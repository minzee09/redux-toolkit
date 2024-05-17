/*
create pre-defined versions of React-Redux hooks that already know the right types for our state and our dispatch
 */
//기존에 제공하는 useDispatch과 useSelector 대신에 타입을 재정의해서 사용할거임
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "./store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
