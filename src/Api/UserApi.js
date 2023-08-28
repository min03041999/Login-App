import api from "./axiosClient";

const UserApi = {
    loginUser: (data) => {
        const url = 'user/login';
        return api.post(url, data);
    },
    registerUser: (data) => {
        const url = 'user/register';
        return api.post(url, data);
    },
    getUser: () => {
        const url = 'user/get-user';
        return api.get(url);
    },
    refreshToken: (refreshToken) => {
        const url = 'user/refresh-token';
        return api.post(url, refreshToken);
    },
    updateUser: (id, data) => {
        const url = `user/update-user/${id}`;
        return api.put(url, data);
    },
    deleteUser: (id) => {
        const url = `user/delete-user/${id}`;
        return api.delete(url);
    },
    logout: () => {
        const url = 'user/logout';
        return api.delete(url);
    }
};

export default UserApi;