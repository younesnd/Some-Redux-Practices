import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit'
import { User } from './UsersManager.types'
import { initialUsers } from './initialUsers'
import { RootState } from '@/store'

type UsersState = {
  users: User[]
  selectedUserId?: User['id'] | null
}

const initialState: UsersState = {
  users: initialUsers,
  selectedUserId: undefined,
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUsers: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload)
    },
    removeUsers: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter((user) => user.id !== action.payload)
    },
    selectUer: (state, action : PayloadAction<string>) => {
      state.selectedUserId = action.payload
    },
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload
    },
    
  },
})
export const {addUsers , removeUsers, selectUer, setUsers} = usersSlice.actions

export const getSelectedUser = createSelector(
  (state: RootState) => state.users,
  (users) => {
    if (users.selectedUserId) {
      return users.users.find((user) => user.id === users.selectedUserId)
    }
    return null
  }
)

export default usersSlice.reducer


