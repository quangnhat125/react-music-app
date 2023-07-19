import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  menu: 1,
}
export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
      updateMenuSelected: (state, action) => {
        state.menu = action.payload
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { updateMenuSelected } = menuSlice.actions
  
  export default menuSlice.reducer; 