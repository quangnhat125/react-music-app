import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tab: [
    {
      id: 1,
      content: [
        { id: 1, songs: 20, name: "Alan Walker" },
        { id: 2, songs: 10, name: "VMH" },
      ],
    },
    {
      id: 2,
      content: [
        { id: 1, songs: 30, name: "Mỹ Tâm" },
        { id: 2, songs: 25, name: "Khánh Phương" },
      ],
    },
    {
      id: 3,
      content: [
        { id: 1, songs: 38, name: "Noo Phước Thịnh" },
        { id: 2, songs: 12, name: "Black Pink" },
      ],
    },
    {
      id: 4,
      content: [
        { id: 1, songs: 29, name: "Binz" },
        { id: 2, songs: 13, name: "Taylor Swift" },
      ],
    },
  ],
  test: 1,
};
export const tabSlice = createSlice({
  name: "tab",
  initialState,
  reducers: {
    updateTabSelected: (state, action) => {
      state.test = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateTabSelected, updateContentSelected } = tabSlice.actions;

export default tabSlice.reducer;
