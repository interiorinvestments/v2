import argon2 from 'argon2';
import passport from 'passport';
import LocalStrategy from 'passport-local';

import { findUserById, findUserByUsername } from './db/user';

passport.serializeUser(function (user, done) {
  // serialize the id into session
  done(null, user._id);
});

passport.deserializeUser(async function (req, id, done) {
  // deserialize the id back into user object
  try {
    const user = await findUserById(id);
    done(null, user);
  } catch (err) {
    return err;
  }
});

passport.use(
  new LocalStrategy(
    { passReqToCallback: true },
    async (req, username, password, done) => {
      // Lookup the user in your DB and compare the password/hashed password
      const user = await findUserByUsername(req, username);
      if (!user || !(await argon2.verify(user.password, password))) {
        done(null, null);
      } else {
        done(null, user);
      }
    }
  )
);

export default passport;
