import { createToken } from "../../utility/authorize";
import { comparePassword } from "../../utility/password";
import { ICredentials } from "../auth/auth.types";
import { USER_MESSAGES } from "./user.constants";
import userRepo from "./user.repo";
import dummyRepo from "./user.repo"
import { IUser } from "./user.types"

const createUser = async (userDetails: IUser) => {
    try {
        await userRepo.add(userDetails as IUser);
        return USER_MESSAGES.USER_CREATED;
    } catch (error) {
        throw error;
    }
}

const updateUser =async (id: string, updateUserDetails: object) => {
    try {
        await userRepo.updateOne(id, updateUserDetails);
        return USER_MESSAGES.USER_UPDATED;
    } catch (error) {
        throw USER_MESSAGES.FAILED
    }
}


const getUserByMail = async (email: any) => {
    try {
        return await userRepo.getOne(email)
    } catch (error) {
        throw USER_MESSAGES.FAILED
    }
}

const login = async (loginDetails: ICredentials) => {
    try {
        const user: any = await userRepo.getOne({ email: loginDetails.email });
        const isMatched = await comparePassword(loginDetails.password, user.password)

        if (user && isMatched) {
            console.log('Logged In Successfully')
            const payload = user.id 
            const token = createToken(payload) 
            return ({
                token
            });
        }
        throw USER_MESSAGES.INVALID_DETAILS

    } catch (error) {
        throw USER_MESSAGES.INVALID_DETAILS
    }
}

const updatePassword = async (userId: string, newPassword: string) => {
    try {
        await userRepo.updateOne(userId, { password: newPassword });
        return USER_MESSAGES.PASSWORD_CHANGED
    } catch (error) {
        throw USER_MESSAGES.FAILED
    }
}

export default { createUser, updateUser, login, getUserByMail, updatePassword };