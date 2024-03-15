import * as z from "zod";

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Email is Required!"
    }),
    password: z.string().min(1, {
        message: "Password is Required!"
    })
})


export const RegisterSchema = z.object({
    email: z.string().email({
        message: "Email is Required!"
    }),
    password: z.string().min(8, {
        message: "Minimum 8 Characters Reqired!"
    }),
    name: z.string().min(1, {
        message: "Name is Required!"
    })
})