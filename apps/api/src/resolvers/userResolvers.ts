import { Context } from "../context";

export const userResolvers = {
  userByUsername: (_parent, args: { username: string }, context: Context) => {
    return {
      name: "Imad Atyat-Allah",
      email: "imad@gmail.com",
      username: "imadatyat",
      profile: { avatarUrl: "url" },
    };
  },
};
