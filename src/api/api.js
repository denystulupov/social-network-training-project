import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "39c42902-0f67-4bf6-97f0-3a5aa80ffae5"
    }
});


export const usersApi = {
    getUsers(currentPage = 1, pageSize = 100) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(userId){
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId){
        return instance.delete(`follow/${userId}`)
    }
};

export const profileAPI = {
    getProfile(userId){
        return instance.get(`profile/` + userId)
    },
    getStatus(userId){
        return instance.get('profile/status/' + userId)
    },
    updateStatus(status){
        return instance.put('profile/status', {status})
    }
};

export const authApi = {
    me(){
        return instance.get('auth/me')
    }
};