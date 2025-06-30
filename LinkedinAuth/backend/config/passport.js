import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20';
import pkg from 'passport-linkedin-oauth2';
const LinkedInStrategy = pkg.Strategy; 
import User from '../models/User.js';
import dotenv from 'dotenv';
dotenv.config();

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) => User.findById(id).then(user => done(null, user)));

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "/auth/google/callback"
}, async (accessToken, refreshToken, profile, done) => {
  const existingUser = await User.findOne({ providerId: profile.id });
  if (existingUser) return done(null, existingUser);
  const newUser = await User.create({
    providerId: profile.id,
    email: profile.emails[0].value,
    name: profile.displayName,
    provider: 'google'
  });
  done(null, newUser);
}));

passport.use(new LinkedInStrategy({
  clientID: process.env.LINKEDIN_CLIENT_ID,
  clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
  callbackURL: "/auth/linkedin/callback",
  scope: ['openid', 'profile', 'email'], 
}, async (accessToken, refreshToken, profile, done) => {
  const existingUser = await User.findOne({ providerId: profile.id });
  if (existingUser) return done(null, existingUser);
  const newUser = await User.create({
    providerId: profile.id,
    name: profile.displayName,
    provider: 'linkedin'
  });
  done(null, newUser);
}));
