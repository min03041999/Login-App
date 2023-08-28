import { createSlice } from "@reduxjs/toolkit";
import TokenService from "../../Api/tokenService";
import UserApi from "../../Api/UserApi";

const initialState = { isPrecessingRequest: false, token: TokenService.getToken() };

const UserSlice = createSlice({
    name: "login",
    initialState: initialState,
    reducers: {
        start: (state) => {
            return {
                ...state,
                isPrecessingRequest: true,
            }
        },
        success: (state, action) => {
            return {
                ...state,
                ...action.payload,
                isPrecessingRequest: true,
            }
        },
        error: (state, action) => {
            return {
                ...state,
                ...action.payload,
                isPrecessingRequest: false,
            }
        }
    }
})

export const loginUser = (data) => async (dispatch) => {
    try {
        const res = await UserApi.loginUser(data);
        const token = TokenService.setToken({ access_token: res.accessToken, refresh_token: res.refreshToken })

        if (token !== null) {
            dispatch(success({ message: res.message, token: token }));
        } else {
            dispatch(error({ message: res.message, token: "" }));
        }
    } catch (err) {
        dispatch(error({ message: "Login is failed!", token: "" }));
    }
}

export const registerUser = (data) => async (dispatch) => {
    try {
        const res = await UserApi.registerUser(data);

        if (!res) return dispatch(error({ message: res.message }));

        return dispatch(success({ message: res.message, data: res.user }));

    } catch (err) {
        dispatch(error({ message: "Register User is failed!" }));
    }
}

export const updateUser = (data, param) => async (dispatch) => {
    try {
        const res = await UserApi.updateUser(data, param);

        if (!res) return dispatch(error({ message: res.message }));

        return dispatch(success({ message: res.message, data: res.user }));

    } catch (err) {
        dispatch(error({ message: "Update User is failed" }));
    }
}

export const deleteUser = (data, param) => async (dispatch) => {
    try {
        const res = await UserApi.deleteUser(data, param);

        if (!res) return dispatch(error({ message: res.message }));

        return dispatch(success({ message: res.message, data: res.user }));

    } catch (err) {
        dispatch(error({ message: "Delete User is failed" }));
    }
}

export const refreshToken = (data) => async (dispatch) => {
    try {
        const res = await UserApi.refreshToken(data);

        if (!res) return dispatch(error({ message: res.message }));

        return dispatch(success({ message: res.message, token: res.accessToken }));
    } catch (err) {
        dispatch(error({ message: "RefreshToken error" }));
    }
}

export const logoutUser = () => async (dispatch) => {
    try {
        const logout = await UserApi.logout();

        if (!logout) return dispatch(error({ message: "Data error" }));

        TokenService.removeToken();

        dispatch(success({ message: "Logout is successfully", token: "" }));
    } catch (err) {
        dispatch(error({ message: "Data error" }));
    }
}

export default UserSlice.reducer;