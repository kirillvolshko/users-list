"use client";

import { BaseApi } from "@/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQueryUrl = fetchBaseQuery({
  baseUrl: BaseApi,
});

export const BaseQueryParams = (reducerPath: string, tags: string[]) => {
  const baseQuery = createApi({
    baseQuery: baseQueryUrl,
    endpoints: () => ({}),
    reducerPath,
    tagTypes: tags?.length ? tags : [],
  });
  return baseQuery;
};
