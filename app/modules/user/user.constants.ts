import { ResponseHandler } from "../../utility/response-handler";

export const USER_MESSAGES = {
    NOT_FOUND: new ResponseHandler(404, 'user not found!'),
    USER_CREATED: new ResponseHandler(201, 'user created!'),
    USER_UPDATED: new ResponseHandler(200, 'user updated!'),
    PASSWORD_CHANGED: new ResponseHandler(200, 'password changed!'),
    USER_DELETED: new ResponseHandler(200, 'user deleted!'),
    UNIQUE_EMAIL: new ResponseHandler(406, 'email should be unique!'),
    FAILED: new ResponseHandler(500, "Internal Error!!!"),
    INVALID_DETAILS: new ResponseHandler(401, "Invalid User Details!!!"),

}
