import mongoose from 'mongoose';
import nextConnect from 'next-connect';

import passport from '../lib/passport';
import session from '../lib/session';

const { COOKIE_SECRET } = process.env;

const auth = nextConnect()
  .use(
    session({
      name: 'sess',
      secret: COOKIE_SECRET, // This should be kept securely, preferably in env vars
      cookie: {
        maxAge: 60 * 60 * 8, // 8 hours,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        path: '/',
        sameSite: 'lax',
      },
    })
  )
  .use(async (req, res, next) => {
    mongoose.set('debug', true);
    mongoose.connect(process.env.DB_URL, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    next();
  })
  .use(passport.initialize())
  .use(passport.session());

export default auth;
