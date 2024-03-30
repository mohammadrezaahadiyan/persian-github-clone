import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import IUserDataState from "../interfaces/userDataState.ts";

export const userDataInitialState: IUserDataState = {

    login: "",
    id: 0,
    email: "",
    avatar: "",
    bio: "",
    company: "",
    followers: 0,
    followers_url: "",
    following: 0,
    following_url: "",
    public_repos: 0,
    repos_url: ""
}

export const userDataSlice = createSlice({
    name: 'userData',
    initialState: userDataInitialState,
    reducers: {
        setUserData: (state, action:PayloadAction<IUserDataState>) => {

            return {...state, ...action.payload}
        }
    }
})

export const getUserInitValues = () => userDataInitialState
export const {setUserData} = userDataSlice.actions
export default userDataSlice.reducer