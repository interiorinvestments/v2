import User from '../../models/user';

export async function getAllUsers() {
  try {
    const users = await User.find({});
    return users;
  } catch (err) {
    return err;
  }
}

export async function createUser(user) {
  try {
    const newUser = new User({
      username: user.username,
      password: user.password,
    });
    await newUser.save();
    return;
  } catch (err) {
    return err;
  }
}

export async function findUserByUsername(req, username) {
  try {
    const user = await User.findOne({ username });
    return user;
  } catch (err) {
    return err;
  }
}

export const findUserById = async (id) => {
  try {
    const user = await User.findById(id);
    return user;
  } catch (err) {
    return err;
  }
};

export function updateUserByUsername(req, username, update) {
  // Here you update the user based on id/username in the database
  // const user = await db.updateUserById(id, update)
  const user = req.session.users.find((u) => u.username === username);
  Object.assign(user, update);
  return user;
}

export function deleteUser(req, username) {
  // Here you should delete the user in the database
  // await db.deleteUser(req.user)
  req.session.users = req.session.users.filter(
    (user) => user.username !== req.user.username
  );
}
