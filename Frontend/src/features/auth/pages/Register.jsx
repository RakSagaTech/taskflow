import AuthForm from '../components/AuthForm';

const Register = () => {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <AuthForm 
        title="Create Account"
        buttonText="Register"
        description="Sign up to organize your work, track your progress, and stay productive."
      />
    </main>
  )
}

export default Register;