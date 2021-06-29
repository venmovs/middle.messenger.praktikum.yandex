import { AuthApi, IRegistrationRequest } from './auth-api';

const registrationApi = new AuthApi();

class AuthController {
    public async register(data: IRegistrationRequest) {
        try {
            registrationApi.signUp(data).then((response) => {
                if (response.status === 200) {
                    return response;
                }
            });
        } catch (error) {
            // router.go('/error');
        }
    }
}

export { AuthController };
