import { configureStore, createSlice } from '@reduxjs/toolkit';

// スライスを作成
const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    }
  }
});

// アクションをエクスポート
export const { increment, decrement } = counterSlice.actions;

// ストアを作成
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  }
});

export default store;