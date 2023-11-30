import { authenticate, validateMobileOrUsername, validateUsername, register } from "../DataSource/user_datasource"

export const registerUser = async (user) => {
    try {
        const { data } = await register(user);
        console.log("registering user");
        return { data: data, error: null };

    } catch (error) {
        console.log("error occurred while registering user");
        console.log(error);
        return { data: null, error: error };
    }
}

export const checkUsername = async (username) => {
    try {
        const { data } = await validateUsername(username);
        console.log("validating user");
        return { data: data, error: null };

    } catch (error) {
        console.log("error occurred while validating user");
        console.log(error);
        return { data: null, error: error };
    }
}

export const authenticateUser = async (user) => {
    try {
        const { data } = await authenticate(user);
        console.log("authenticating user");
        return { data: data, error: null };
    } catch (error) {
        console.log("error occurred while authenticating user");
        console.log(error);
        return { data: null, error: error };
    }
}

export const validateUniqueCredential = async (param) => {
    try {
        console.log('params is ');
        console.log(param);
        const { data } = await validateMobileOrUsername(param);
        console.log("validating user email or mobile");
        return { data: data, error: null };
    } catch (error) {
        console.log("error occurred while validating email or mobile");
        console.log(error);
        return { data: null, error: error };
    }
}