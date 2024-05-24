import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counter-slice";
import { apiSlice } from "../features/dogs/dogs-api-slice";

export const store = configureStore({
  //이 부분 다시 공부하기
  reducer: {
    counter: counterReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

//새로운 타입을 정의
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>; //slice reducer를 계속 추가해도 이 타입이 자동적으로 업데이트 됨
