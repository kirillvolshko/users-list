import { BaseQueryParams } from "../baseQuery";

export const usersService = BaseQueryParams("users", ["USERS"]).injectEndpoints(
  {
    endpoints: (builder) => ({
      getUsers: builder.query({
        query: () => ({
          url: "/users",
          method: "GET",
        }),
      }),
    }),
  }
);
export const { useGetUsersQuery } = usersService;
