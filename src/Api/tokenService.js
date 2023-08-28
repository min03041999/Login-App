const TokenService = {
    setToken(token) {
        localStorage.setItem("token", JSON.stringify(token));
    },

    getToken() {
        const token = localStorage.getItem("token");
        if (token !== null) {
            return JSON.parse(token);
        }
        return null;
    },

    updateToken(token) {
        localStorage.setItem("token", JSON.stringify(token));
    },

    getRefreshToken() {
        const token = localStorage.getItem("token");
        if (token !== null) {
            return JSON.parse(token)?.refresh_token;
        }
        return null;
    },

    getAccessToken() {
        const token = localStorage.getItem("token");
        if (token !== null) {
            return JSON.parse(token)?.access_token;
        }
        return null;
    },

    removeToken() {
        localStorage.removeItem("token");
    },
}

export default TokenService;