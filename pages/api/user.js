import nextConnect from 'next-connect';

import { deleteUser, updateUserByUsername } from '../../lib/db';
import auth from '../../middleware/auth';

const handler = nextConnect();

handler
  .use(auth)
  .get((req, res) => {
    // You do not generally want to return the whole user object
    // because it may contain sensitive field such as !!password!! Only return what needed
    const { username } = req.user;
    try {
      res.json({ user: { username } });
    } catch (err) {
      console.log(err);
      return err;
    }
  })
  .use((req, res, next) => {
    // handlers after this (PUT, DELETE) all require an authenticated user
    // This middleware to check if user is authenticated before continuing
    try {
      if (!req.user) {
        res.status(401).send('unauthenticated');
      } else {
        next();
      }
    } catch (err) {
      console.log(err);
      return err;
    }
  })
  .put((req, res) => {
    const { name } = req.body;
    const user = updateUserByUsername(req, req.user.username, { name });
    res.json({ user });
  })
  .delete((req, res) => {
    deleteUser(req);
    req.logOut();
    res.status(204).end();
  });

export default handler;
