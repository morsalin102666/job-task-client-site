import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useTitel from "../useTitel/useTitel";

const SingUp = () => {
    const [open, setOpen] = useState(false)
    useTitel('Sign Up Page')
    const [error, setError] = useState('')
    console.log(error)
    const { createNewUser, updateUserProfile } = useContext(AuthContext)

    const signUpAccount = event => {
        event.preventDefault()

        setError('')

        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;

        if (password.length >= 6) {
            createNewUser(email, password)
                .then(result => {
                    Swal.fire({
                        title: 'Compleate SignUp',
                        text: 'Thank you success your signUp',
                        icon: 'Success',
                        confirmButtonText: 'ok'
                    })
                    console.log(result)
                    updateProfileUser(name, photoUrl)
                    form.reset()
                })
                .catch(error => {
                    setError(error.message)
                })
        }
        else {
            return alert('plesh musbe 6 carector password')
        }

        const updateProfileUser = (userName, photoUrl) => {
            const profile = {
                photoURL: photoUrl,
                displayName: userName
            }
            updateUserProfile(profile)
                .then(result => { console.log(result.user) })
                .catch(error => { setError(error.message) })
        }


    }

    return (
        <div className="container mx-auto py-[100px]">
            <div className="flex justify-center">
                <div className="w-[50%] border border-[#409EFF] px-10 pt-[80px] pb-[50px] rounded-md">
                    <h1 className="text-[25px] text-center font-bold mb-12">SignUp Page</h1>
                    <form onSubmit={signUpAccount}>
                        <div className="flex justify-between">
                            <input className="w-[49%] bg-[#2C2C6C] border border-[#409EFF] outline-none px-3 py-2 rounded-lg text-white" required type="text" name="name" placeholder="User Name" />
                            <input className="w-[49%] bg-[#2C2C6C] border border-[#409EFF] outline-none px-3 py-2 rounded-lg text-white" required type="url" name="photoUrl" placeholder="Photo Url" />
                        </div>
                        <div>
                            <input className="w-full mt-8 bg-[#2C2C6C] border border-[#409EFF] outline-none px-3 py-2 rounded-lg text-white" required type="email" name="email" placeholder="Email" />
                        </div>
                        <div>
                            <input className="w-full mt-8 bg-[#2C2C6C] border border-[#409EFF] outline-none px-3 py-2 rounded-lg text-white" required type={open ? "text" : "password"} name="password" placeholder="Password" />
                            <div className="w-8 h-8 flex justify-center items-center md:ml-[650px] ml-[270px] mt-[-38px]" onClick={() => setOpen(!open)}>
                                <span>{open === true ? <AiFillEye></AiFillEye> : <AiFillEyeInvisible></AiFillEyeInvisible>}</span>
                            </div>
                        </div>
                        <input className="w-full mt-8 bg-[#2C2C6C] hover:bg-[#409EFF] border border-[#409EFF] outline-none px-3 py-2 rounded-lg text-white" type="submit" />
                    </form>
                    <Link to={'/login'}><p className="pt-[20px] hover:underline">Alrady Have a account to <span className="font-bold text-[#409EFF]">Login...</span></p></Link>
                </div>
            </div>
        </div>
    );
};

export default SingUp;