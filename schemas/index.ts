import * as z from "zod";

export const LoginSchema = () => {
    email: z.string().email({
        message: "Email is required!",
    })
    password: z.string().min(1, {
        message: "Password is required!",
    })
}