// import bcrypt from 'bcrypt';

export default defineEventHandler(async (event) => {
  const body = await useBody(event);

  const { username, password } = body;

  if (!username || !password) {
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: 'Invalid params' })
    );
  }

  const user = await directus.users.login({
    email: username,
    password,
  });

  if (!user) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: 'Invalid username or password',
      })
    );
  }

  // compare password
  const passwordMatch = await bcrypt.compare(password, user.password);

  // generate token
  const { accessToken, refreshToken } = generateTokens(user);

  return {
    access_token: accessToken,
    user: user,
  };
});
