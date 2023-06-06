// import bcrypt from "bcrypt"
// import directus maybe

export const createUser = async (userData) => {
  const finalUserData = {
    ...userData,
    password: bcrypt.hashSync(userData.password, 10),
  };

  return directus.user.create({
    data: finalUserData,
  });
};

export const getUserByUsername = async (username) => {
  return directus.users
    .read({
      filter: {
        username,
      },
    })
    .then((res) => res.data[0]);
};
