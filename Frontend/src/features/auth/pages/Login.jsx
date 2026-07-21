
import AuthForm from "../components/AuthForm";

const Login = () => {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <AuthForm 
        title="Welcome Back"
        description=" Sign in to continue managing your tasks and stay productive"
        buttonText="Login"
        showEmail={false}
        footerText="Don't have an account?"
        footerLinkText="Register"
        footerLink="/"
      />
    </main>
  )
}

export default Login