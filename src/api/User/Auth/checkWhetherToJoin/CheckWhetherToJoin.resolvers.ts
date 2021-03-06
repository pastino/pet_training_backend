import { Resolvers } from "src/types/resolvers";
import { prisma } from "../../../../../generated/prisma-client";
import {
  CheckWhetherToJoinQueryArgs,
  CheckWhetherToJoinResponse,
} from "../../../../types/graph";

const resolvers: Resolvers = {
  Query: {
    CheckWhetherToJoin: async (
      _,
      args: CheckWhetherToJoinQueryArgs
    ): Promise<CheckWhetherToJoinResponse> => {
      const { id } = args;
      try {
        const existingUser = await prisma.user({ userId: id });
        if (!existingUser) {
          return {
            ok: true,
            error: null,
            result: "No User, Need to join",
          };
        } else {
          return {
            ok: true,
            error: null,
            result: "Find a user, log in",
          };
        }
      } catch (e) {
        return {
          ok: false,
          error: e,
          result: "Error",
        };
      }
    },
  },
};

export default resolvers;
