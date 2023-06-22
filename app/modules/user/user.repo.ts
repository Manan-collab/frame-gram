import UserModel from "./user.schema";
import { IUser } from "./user.types";


const add = (userDetails: IUser) => UserModel.create(userDetails);

const getOne = (field: any) => UserModel.findOne({ ...field });

const updateOne = (id: string, updateUserDetails: object) => UserModel.updateOne({ _id: id }, updateUserDetails);

export default { add, getOne, updateOne };