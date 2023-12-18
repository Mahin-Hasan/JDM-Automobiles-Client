import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../../providers/AuthProviders";
import loginbg from '../../assets/login.png'



const Login = () => {
    const [visibility, setVisibility] = useState(false)
    const location = useLocation();// to find private route details
    const navigate = useNavigate();
    const { signIn } = useContext(AuthContext);


    //try login
    const handleLogin = (event) => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;

        signIn(email, password)
            .then(res => {
                console.log(res.user);
                toast.success('Log In Successful');
                navigate(location?.state ? location.state : '/');
            })
            .catch(err => {
                toast.error(err.message)
                console.error(err.message);
            })

    }
    return (
        <div style={{ backgroundImage: `url(${loginbg})` }} className="bg-cover bg-center">
            <div className="h-screen container mx-auto flex items-center">
                <div className="w-full mx-2 flex justify-center sm:flex-none sm:justify-start">
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl glass">
                        <div className="card-body">
                            <form onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white font-semibold text-base">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white font-semibold text-base">Password</span>
                                    </label>
                                    <input
                                        type={visibility ? "text" : "password"}
                                        name="password"
                                        placeholder="password"
                                        className="input input-bordered"
                                        required />
                                    <div className="absolute">
                                        <span className="relative left-72 -bottom-[54px] text-fuchsia-800 text-lg" onClick={() => setVisibility(!visibility)}>
                                            {
                                                visibility ? <FaEyeSlash /> : <FaEye />
                                            }
                                        </span>
                                    </div>
                                    <label className="label">
                                        <span href="#" className="label-text-alt link link-hover text-white text-sm">Do not have an account? <Link className="border-b font-bold border-primary text-fuchsia-400" to='/signup'>Signup</Link></span>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-outline border-none bg-fuchsia-900 hover:bg-purple-600 text-white rounded-md">Log In</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;