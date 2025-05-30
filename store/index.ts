"use client";
import { combineReducers, configureStore, Middleware } from "@reduxjs/toolkit";
import { usersService } from "./users/usersService";
import filterReducer from "./filter/filterSlice";

const rootReducer = combineReducers({
  [usersService.reducerPath]: usersService.reducer,
  filter: filterReducer,
});

const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(usersService.middleware as Middleware),
  });
};

export const store = makeStore();

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
