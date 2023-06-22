import { NextFunction, Request, Response, Router } from "express";
import { verifyToken } from "../../utility/authorize";
import { ResponseHandler } from "../../utility/response-handler";
import authService from "./auth.service";
import { loginValidator } from "./auth.validations";

export const authRouter = Router();

authRouter.get("/error",async(req,res,next)=>{
    try {
        console.log('error')
    } catch (error) {
        next(error);
    }
})

authRouter.post("/login", loginValidator, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await authService.login(req.body);
        res.send(new ResponseHandler(response));
    } catch (error) {
        next(error);
    }
})

authRouter.post('/create-user', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await authService.createUser(req.body);
        res.send(new ResponseHandler(response));
    } catch (error) {
        next(error);
    }
});

authRouter.post('/forgot-password', async (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log('Forgot Password');
        const response = await authService.forgotPassword(req.body);
        res.send(new ResponseHandler(response));
    } catch (error) {
        next(error);
    }
});

authRouter.put('/change-password/:token', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = verifyToken(req.params.token) as any;
        console.log(user);
        const response = await authService.resetPassword(user.id, req.body.password);
        res.send(new ResponseHandler(response));
    } catch (error) {
        next(error);
    }
});






