import argon2 from 'argon2';
import nextConnect from 'next-connect';

import { createUser, findUserByUsername, getAllUsers } from '../../lib/db';
import auth from '../../middleware/auth';

const handler = nextConnect();

handler
  .use(auth)
  .get(async (req, res) => {
    // For demo purpose only. You will never have an endpoint which returns all users.
    // Remove this in production
    res.json({ users: await getAllUsers() });
  })
  .post(async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).send('Missing fields');
    }
    // Here you check if the username has already been used
    const usernameExisted = !!(await findUserByUsername(req, username));
    if (usernameExisted) {
      return res.status(409).send('The username has already been used');
    }
    // Security-wise, you must hash the password before saving it
    const hashedPass = await argon2.hash(password);
    const user = { username, password: hashedPass };
    createUser(user);
    req.logIn(user, (err) => {
      if (err) throw err;
      // Log the signed up user in
      res.status(201).json({
        user,
      });
    });
  });

export default handler;
