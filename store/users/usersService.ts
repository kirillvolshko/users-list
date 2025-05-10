import { IUsersResponse } from "@/types/users";
import { BaseQueryParams } from "../baseQuery";

export const usersService = BaseQueryParams("users", ["USERS"]).injectEndpoints(
  {
    endpoints: (builder) => ({
      getUsers: builder.query<
        IUsersResponse[],
        Record<string, string | undefined>
      >({
        query: (filter) => ({
          url: "/users",
          method: "GET",
          params: filter,
        }),
      }),
    }),
  }
);
export const { useGetUsersQuery } = usersService;
