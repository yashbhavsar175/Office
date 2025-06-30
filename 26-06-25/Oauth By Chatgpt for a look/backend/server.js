import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as LinkedInStrategy } from 'passport-linkedin-oauth2';
import cors from 'cors';
import session from 'express-session';
import { User } from './models/User.js';

// Load environment variables
dotenv.config();

// Ensure SESSION_SECRET is defined
if (!process.env.SESSION_SECRET) {
  console.error('❌ Error: SESSION_SECRET is not defined in your environment variables.');
  process.exit(1);
}

const app = express();

// Body parsing
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Session configuration (must come before Passport initialization)
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  // cookie: { secure: true }  // enable in production with HTTPS
}));

// CORS configuration
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST'],
}));

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error(err));

// Google OAuth Strategy
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: 'http://localhost:5000/auth/google/callback'
}, async (accessToken, refreshToken, profile, done) => {
  console.log('Google OAuth Profile:', profile);
  let user = await User.findOne({ googleId: profile.id });
  if (!user) {
    user = await User.create({
      googleId: profile.id,
      displayName: profile.displayName,
      email: profile.emails?.[0]?.value || '',
      photo: profile.photos?.[0]?.value || ''
    });
  }
  return done(null, user);
}));

// LinkedIn OAuth Strategy (email scope removed until approved)
passport.use(new LinkedInStrategy({
  clientID: process.env.LINKEDIN_CLIENT_ID,
  clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
  callbackURL: 'http://localhost:5000/auth/linkedin/callback',
  scope: ['r_liteprofile'],
}, async (accessToken, refreshToken, profile, done) => {
  console.log('LinkedIn OAuth Profile:', profile);
  let user = await User.findOne({ linkedinId: profile.id });
  if (!user) {
    user = await User.create({
      linkedinId: profile.id,
      displayName: profile.displayName,
      email: '',  // email scope not requested
      photo: profile.photos?.[0]?.value || ''
    });
  }
  return done(null, user);
}));

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

// --- AUTH ROUTES ---

// Google login (request OpenID Connect scopes)
app.get('/auth/google', passport.authenticate('google', { scope: ['openid', 'profile', 'email'] }));
app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    const { displayName, email, photo } = req.user;
    res.redirect(`http://localhost:5173?name=${encodeURIComponent(displayName)}&email=${encodeURIComponent(email)}&photo=${encodeURIComponent(photo)}`);
  }
);

// LinkedIn login (temporary limit to profile only)
app.get('/auth/linkedin',
  passport.authenticate('linkedin', { state: 'SOME STATE', scope: ['r_liteprofile'] })
);
app.get('/auth/linkedin/callback',
  passport.authenticate('linkedin', { failureRedirect: '/login' }),
  (req, res) => {
    const { displayName, photo } = req.user;
    // Email not available without r_emailaddress scope
    res.redirect(`http://localhost:5173?name=${encodeURIComponent(displayName)}&photo=${encodeURIComponent(photo)}`);
  }
);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).send('Something went wrong!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
