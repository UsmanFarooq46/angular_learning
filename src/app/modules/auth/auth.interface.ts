export interface LoginData {
    token: string;
    userData: {
        email: string,
        password: string,
        role: string,
        userName: string,
        _id: string
    };
}