export class LoginResponse {
    jwt: string;
    refreshToken: string;
    exp: Date;
    username: string;
}