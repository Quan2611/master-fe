import { createSlice } from "@reduxjs/toolkit";
import { generateJWT } from "../API/jwt";
import { STORAGE_ACCESS_TOKEN_KEY } from "../ultils/constants";
import { AppDispatch } from "./store";


export const STORAGE_KEY = 'user_reducer'
const storageData = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "{}")

function _saveData(data: object) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

export const onBookTable = (data: object) => async (dispatch: AppDispatch) => {
  const token = await generateJWT(data);
  window.localStorage.setItem(STORAGE_ACCESS_TOKEN_KEY, token);

  dispatch(userSlice.actions.book(data));
}

const userSlice = createSlice({
  name: "user",
  initialState: {
    table_id: storageData.table_id,
  },
  reducers: {
    book: (state, action) => {
      state.table_id = action.payload.table_id;
      _saveData(state);
      window.location.href = "/";
    },
  },
});
export default userSlice;