import userService from "../user/user.service";
import { createHash } from "../../utility/password";
import { ICredentials } from "./auth.types";
import { createToken } from "../../utility/authorize";
import { sendEmail } from "../../utility/email";
import { authConstants } from "./auth.responses";
import { IUser } from "../user/user.types";

const createUser = async (userDetails: IUser) => {
    try {
        userDetails.password = await createHash(userDetails.password);
        const response = await userService.createUser(userDetails);
        return response;
    } catch (error) {
        throw error
    }
}

const login = async (loginDetails: ICredentials) => {
    try {
        const response = await userService.login(loginDetails);
        return response;
    } catch (error) {
        throw error;
    }
}


const forgotPassword = async (email: string) => {
    try {
        const userDetails = await userService.getUserByMail(email);
        console.log(userDetails?._id);
        const token = createToken({ id: userDetails?._id });
        // const { URL } = process.env;
        // const link = `${URL}/${token}`;
        // console.log(link)
        // // await sendEmail(email, "FORGOT PASSWORD", `
        // //     Hi, ${userDetails?.name},
        // //     Your password reset link is here ${link}
        // // `)

        const resetLink = `<a href=http://192.168.15.109/auth/change-password/${token} target="_blank" rel="noopener noreferrer">Click Here</a>`;
        sendEmail(
          email,
          "Reset Password",
          `Your Password Reset Link is given below: `,resetLink
      )
      return authConstants.PASSWORD_LINK;

    } catch (error) {
        throw error;
    }
}

const resetPassword = async (userId: string, newPassword: string) => {
    try {
        console.log(newPassword);
        newPassword = await createHash(newPassword);
        const response = await userService.updatePassword(userId, newPassword);
        return response;
    } catch (error) {
        throw error;
    }

}



// const googleLogin = async(userProfile:any)=>{
//     try {
//         const user:any = await userService.getOneUser(userProfile.id);
//         if(user){
//         const accessToken = createToken({ id: user.googleId, email: user.email });
//          return { accessToken:accessToken}
//         }
//         const {id,displayName,email} = userProfile;
//        const response = await userService.addUser({googleId:id,name:displayName,email:email})
//         return response;
//     } catch (error) {
//         throw error
//     }
// }

export default { createUser, login, forgotPassword, resetPassword, }



