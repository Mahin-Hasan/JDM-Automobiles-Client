import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";



const Login = () => {
    const [visibility, setVisibility] = useState(false)

    return (
        <div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <form>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type={visibility ? "text" : "password"}
                                name="password"
                                placeholder="password"
                                className="input input-bordered"
                                required />
                            <span className="relative left-72 bottom-8 text-fuchsia-800 text-lg" onClick={() => setVisibility(!visibility)}>
                                {
                                    visibility ? <FaEyeSlash /> : <FaEye />
                                }
                            </span>
                            <label className="label">
                                <span href="#" className="label-text-alt link link-hover">Do not have an account? <Link className="border-b font-semibold border-primary text-fuchsia-800" to='/signup'>Signup</Link></span>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-outline bg-fuchsia-900 hover:bg-purple-600 text-white rounded-md">Log In</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;