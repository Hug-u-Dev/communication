import {Router} from "express";
import { EmailController } from "../controllers/email.controllers";


const emailController = new EmailController();

export const routes = Router();

routes.post("/mail", emailController.send);
