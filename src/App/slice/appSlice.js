import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: 'Music',
}
export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
      changingName: (state, action) => {
        state.name = action.payload
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { changingName } = appSlice.actions
  
  export default appSlice.reducer; 