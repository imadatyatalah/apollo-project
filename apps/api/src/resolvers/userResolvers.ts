import { Context } from "../context";

export const userResolvers = {
  employeeByHandle: (_parent, args: { handle: string }, context: Context) => {
    return context.prisma.employee.findUnique({
      where: { employeeHandle: args.handle },
      include: {
        profile: {
          select: {
            bio: true,
            location: true,
            website: true,
            position: true,
            profileImage: true,
          },
        },
      },
    });
  },
};
