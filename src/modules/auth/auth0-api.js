const dummyUser = {
  created_at: "2020-11-22T04:24:33.377Z",
  email: "matt@cyberwizard.io",
  email_verified: false,
  identities: [
    {
      connection: "Username-Password-Authentication",
      provider: "auth0",
      user_id: "5fb9e80193ed5e006f758478",
      isSocial: false,
    },
  ],
  name: "matt@cyberwizard.io",
  nickname: "matt",
  picture:
    "https://s.gravatar.com/avatar/d5826c9e8fbb99d47fb5cc4995d28532?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fma.png",
  updated_at: "2020-11-27T02:30:57.251Z",
  user_id: "auth0|5fb9e80193ed5e006f758478",
  user_metadata: {
    flat_id: "foo-bar-baz-123",
    color: "blue",
  },
  last_login: "2020-11-27T02:26:56.859Z",
  last_ip: "124.157.91.42",
  logins_count: 16,
  app_metadata: {
    flat_id: "foo-bar-baz-123",
  },
};

export const getUserById = async (userId) => {
  return Promise.resolve(dummyUser);
};

export const getUserByEmail = () => {};

/** Adds flatId to app_metadata of user object for userId */
export const addUserToFlat = (userId, flatId) => {
  // Throw if flat_id already exists
};
