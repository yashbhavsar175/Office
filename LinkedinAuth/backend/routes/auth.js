import express from 'express';
import passport from 'passport';
import axios from 'axios';
import User from '../models/User.js';
import dotenv from 'dotenv';

dotenv.config();


const router = express.Router();

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', passport.authenticate('google', {
  successRedirect: process.env.CLIENT_URL,
  failureRedirect: "/login/failed"
}));

router.get('/linkedin', passport.authenticate('linkedin'));

router.get('/linkedin/callback', async (req, res) => {
  const code = req.query.code;

  const tokenRes = await axios.post('https://www.linkedin.com/oauth/v2/accessToken', null, {
    params: {
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: 'http://localhost:5000/auth/linkedin/callback',
      client_id: process.env.LINKEDIN_CLIENT_ID,
      client_secret: process.env.LINKEDIN_CLIENT_SECRET,
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });

  const { access_token, id_token } = tokenRes.data;

  const payload = JSON.parse(Buffer.from(id_token.split('.')[1], 'base64').toString());
  console.log('Decoded LinkedIn ID Token Payload:', payload);

  const user = await User.findOneAndUpdate(
    { providerId: payload.sub },
    {
      providerId: payload.sub,
      name: payload.name || payload.given_name,
      email: payload.email,
      provider: 'linkedin',
    },
    { upsert: true, new: true }
  );

  res.redirect('http://localhost:5173');
});

router.get('/logout', (req, res) => {
  req.logout(() => {
    res.redirect(process.env.CLIENT_URL);
  });
});

export default router;
