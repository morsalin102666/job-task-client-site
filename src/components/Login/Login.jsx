import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import useTitel from "../useTitel/useTitel";

const Login = () => {
    const [open, setOpen] = useState(false)
    useTitel('Login Page')
    const navigate = useNavigate()
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [error, setError] = useState('')
    const { logInEmail, signinGoogel, signinGithub } = useContext(AuthContext)

    // ============ signIn email password ===========
    const loginPage = event => {
        event.preventDefault()

        setError('')

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logInEmail(email, password)
            .then(result => {
                navigate(from, { replace: true });
                form.reset()

            })
            .catch(error => setError(error.message))
    }

    // ============ signIn google ===========
    const googeLogin = () => {
        setError('')
        signinGoogel()
            .then(result => {
                navigate(from, { replace: true });
            })
            .catch(error => { setError(error.message) })
    }


    // ============ signIn github ===========
    const githubLogin = () => {
        setError('')
        signinGithub()
            .then(result => {
                console.log(result)
                navigate(from, { replace: true });
            })
            .catch(error => { setError(error.message) })
    }

    return (
        <div>
            <div className="container mx-auto py-[100px]">
                <div className="flex justify-center">
                    <div className="w-[50%] border border-[#409EFF] px-10 pt-[80px] pb-[50px] rounded-md">
                        <h1 className="text-[25px] text-center font-bold mb-12">Login Page</h1>
                        <form onSubmit={loginPage}>
                            <div>
                                <input className="w-full bg-[#2C2C6C] border border-[#409EFF] outline-none px-3 py-2 rounded-lg text-white" required type="email" name="email" placeholder="Email" />
                            </div>
                            <div>
                                <input className="w-full mt-8 bg-[#2C2C6C] border border-[#409EFF] outline-none px-3 py-2 rounded-lg text-white" required type={open ? "text" : "password"} name="password" placeholder="Password" />
                                <div className="w-8 h-8 flex justify-center items-center md:ml-[650px] ml-[270px] mt-[-38px]" onClick={() => setOpen(!open)}>
                                    <span>{open === true ? <AiFillEye></AiFillEye> : <AiFillEyeInvisible></AiFillEyeInvisible>}</span>
                                </div>
                            </div>
                            <p className="pt-[10px] text-[#409EFF] hover:underline">Forgot password</p>
                            <button className="w-full mt-8 bg-[#409EFF] hover:bg-[#2C2C6C] border border-[#409EFF] outline-none px-3 py-2 rounded-lg text-white">Login</button>
                            <p className="mt-5 ml-3 text-red-600">{error}</p>
                        </form>

                        <button onClick={googeLogin} className="w-full mt-8 bg-[#409EFF] hover:bg-[#2C2C6C] border border-[#409EFF] outline-none px-3 py-2 rounded-lg text-white">Google SignIn</button>
                        <button onClick={githubLogin} className="w-full mt-8 bg-[#409EFF] hover:bg-[#2C2C6C] border border-[#409EFF] outline-none px-3 py-2 rounded-lg text-white">Github SignIn</button>
                        <Link to={'/signUp'}><p className="pt-[20px] hover:underline">New user to create an account <span className="font-bold text-[#409EFF]">SignUp...</span></p></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;