import { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const Login = () => {
    const [open, setOpen] = useState(false)

    const logInAccount = event => {
        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password, 'this is login page')
    }

    return (
        <div>
            <div className="container mx-auto py-[100px]">
                <div className="flex justify-center">
                    <div className="w-[50%] border border-[#409EFF] px-10 pt-[80px] pb-[50px] rounded-md">
                        <h1 className="text-[25px] text-center font-bold mb-12">Login Page</h1>
                        <form onSubmit={logInAccount}>
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
                            <input className="w-full mt-8 bg-[#2C2C6C] hover:bg-[#409EFF] border border-[#409EFF] outline-none px-3 py-2 rounded-lg text-white" type="submit" />
                        </form>

                        <button className="w-full mt-8 bg-[#409EFF] hover:bg-[#2C2C6C] border border-[#409EFF] outline-none px-3 py-2 rounded-lg text-white">Google</button>
                        <button className="w-full mt-8 bg-[#409EFF] hover:bg-[#2C2C6C] border border-[#409EFF] outline-none px-3 py-2 rounded-lg text-white">Github</button>
                        <Link to={'/signUp'}><p className="pt-[20px] hover:underline">New user to create an account <span className="font-bold text-[#409EFF]">SignUp...</span></p></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;