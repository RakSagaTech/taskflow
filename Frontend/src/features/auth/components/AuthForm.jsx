import { Link } from "react-router-dom";


const inputClass = `
  w-full
  border
  border-slate-700
  bg-slate-800
  px-4
  py-3 
  rounded-lg
  text-white
  placeholder:text-slate-500
  focus:outline-none 
  focus:ring-2
  focus:ring-blue-500/30
  focus:border-blue-600
  hover:border-slate-600
  transition-colors
`

const labelClass = `
  mb-2
  text-sm
  font-medium
  text-slate-300
  block
`


const AuthForm = ({title, buttonText, description, showEmail=true, footerLink, footerLinkText, footerText}) => {
  return (
    <section className="w-full max-w-lg border border-slate-700 rounded-2xl bg-slate-800 p-8 shadow-2xl">
      <header className="mb-10 text-center">
        <h2>
          <Link to="/" className="text-3xl font-bold text-blue-500 transition-colors duration-200 hover:text-blue-400">
            TaskFlow
          </Link>
        </h2>
      </header>

      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-white">
          {title}
        </h1>
        <p className="mt-2 text-sm leading-6 text-slate-400">
          {description}
        </p>
      </div>

      <form className="space-y-6">
        <div>
          <label htmlFor="username" className={labelClass}>
            Username
          </label>
          <input 
            type="text" 
            id="username"
            name="username"
            placeholder="Enter username"
            className={inputClass}
            autoComplete="username"
            required
          />
        </div>

        {showEmail && (
          <div>
            <label htmlFor="email" className={labelClass}>
              Email
            </label>
            <input 
              type="email" 
              id="email"
              name="email"
              placeholder="Enter email"
              className={inputClass}
              autoComplete="email"
              required
            />
          </div>
        )}

        <div>
          <label htmlFor="password" className={labelClass}>
            Password
          </label>
          <input 
            type="password" 
            id="password"
            name="password"
            placeholder="Enter password"
            className={inputClass}
            autoComplete="new-password"
            required
          />
        </div>

        <button type="submit"
          className="w-full bg-blue-600 py-3 font-semibold text-white rounded-lg transition-all duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2
         focus:ring-blue-500/30 active:scale-95"
        >
          {buttonText}
        </button>
      </form>

      <div className="pt-2 text-sm text-slate-400">
        {footerText}
        <Link
          to={footerLink}
          className="font-medium text-blue-500 transition-colors hover:text-blue-400 ml-1"
        >
          {footerLinkText}
        </Link>
      </div>
    </section>
  )
}

export default AuthForm