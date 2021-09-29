import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const newsHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key':process.env.REACT_APP_RAPIDAPI_KEY,
};

const baseUrl = "https://bing-news-search1.p.rapidapi.com";

const createRequest = (url)=>({url,headers:newsHeaders});

export const newsApi = createApi({
    reducerPath:'newsApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getNews:builder.query({
            query:({newsCategory})=>createRequest(`https://bing-news-search1.p.rapidapi.com/news/search?q=${newsCategory}&cc=in&safeSearch=Off&textFormat=Raw`)
        }),
    }),
});

export const {useGetNewsQuery} = newsApi;

