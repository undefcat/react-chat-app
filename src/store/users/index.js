import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: [],
  filter: {
    query: '',
  }
}

const usersSlice = createSlice({
  name: 'users',

  initialState,

  reducers: {
    searchByName(state, action) {
      state.filter.query = action.payload
    },
    setUsers(state, action) {
      state.list = action.payload
    }
  },
})

export const { searchByName, setUsers } = usersSlice.actions

export default usersSlice.reducer
