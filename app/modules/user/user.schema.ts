import { model } from 'mongoose';
import { BaseSchema } from '../../utility/base.schema';
import { IUser } from './user.types';

const userSchema = new BaseSchema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
    }
});

type IUserDocument = Document & IUser;

const UserModel = model <IUserDocument>("user", userSchema);

export default UserModel;  