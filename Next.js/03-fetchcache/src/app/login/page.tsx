// Componets:
import { FormLogin } from "@/components/FormLogin/FormLogin";
import GetCookie from "@/components/GetCookie/GetCookie";


export default function LoginPage() {

    return (
        <main className="LoginPage">
            <h1>Login</h1>

            <GetCookie />

            <FormLogin />
        </main>
    );
}