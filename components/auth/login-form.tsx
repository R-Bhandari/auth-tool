import { CardWrapper } from "./card-wrapper"

export const LoginForm = () => {
    return(
        <div>
            <CardWrapper 
                headerLabel="Welcome Back!"
                backButtonLabel="Don't have an Account?"
                backButtonHref="/auth/register"
                showSocial
            >
                login form
            </CardWrapper>
        </div>
    )
}