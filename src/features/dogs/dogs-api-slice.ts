import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const DOGS_API_KEY = "live_jgvzDRQKbtCsJzNNPk1imdIu7nZZjHLkzQPToOGdrhUHELnVahGIk62iye1YsqPy";

interface Breed {
  id: string;
  name: string;
  image: {
    url: string;
  };
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.thedogapi.com/v1",
    prepareHeaders(headers) {
      headers.set("x-api-key", DOGS_API_KEY);
      return headers;
    },
  }),
  endpoints(builder) {
    return {
      fetchBreeds: builder.query<Breed[], number | void>({
        query(limit = 10) {
          return `/breeds?limit=${limit}`;
        },
      }),
    };
  },
});

/*
보통은 어플 내의 한두개 정도만 API SLICE 있을 것임
예를들어) 블로그 앱 안에 댓글, 좋아요, 게시물 있으면 각각의 API를 제작하는게 아니라, 베이스 서버를 위한 하나의 API를 만들고, 그 안에 다른 엔드포인트들 만들어 주는 것임
*/
