/*
slice라고 하는 이유:
리덕스의 상태를 하나의 슬라이스?(one slice)의 로직과 데이터를 나타냄
이걸 DUX(=DUCKS) 패턴라고 함
*/
//createSlice: 리덕스 로직을 정의할때 사용하는 메인 API 함수
//PayloadAction: 하나의 주어진 객체의 콘텐츠라는걸 나타내는 타입스크립트 타입
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//(Interface)는 객체의 구조를 정의
interface CounterState {
  value: number;
}

//초기 상태 정의
const initialState: CounterState = {
  value: 0,
};

//슬라이스 정의 (슬라이스 안에 reducer 로직이 들어있음)
//createSlice는 하나의 파라미터만 가짐 (객체)
const counterSlice = createSlice({
  name: "counter", //슬라이스의 이름
  initialState, //초기 상태
  reducers: {
    //카운트 증가
    incremented(state) {
      state.value++; //그냥 기존 리덕스에서는 불가능함(mutate X)-여기서는 변형하는 것처럼 코드를 짜도 immer라는 라이브러리가 알아서 immutable 업데이트 해줌
    },
    //카운트 감소

    //카운터 초기화
  },
});

//원래 리덕스는 actionCreaters를 따로 만들어서 직접 짜야하지만 createSlice가 만들어줌
export const { incremented } = counterSlice.actions;
export default counterSlice.reducer;
