import usersReducer from '@/components/UsersManager/usersSlice';
import { configureStore } from '@reduxjs/toolkit';


export const store = configureStore({reducer : {
    users : usersReducer ,
}})

export type RootState = ReturnType<typeof store.getState>


export type AppDispatch= typeof store.dispatch 