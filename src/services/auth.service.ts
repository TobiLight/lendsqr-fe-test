import httprequest from "../helpers/httprequest";

class AuthService {
    login({ email, password }: { email: string, password: string }) {
        console.log('logging in');
        return httprequest.get('/users')
    }
}

export default new AuthService()