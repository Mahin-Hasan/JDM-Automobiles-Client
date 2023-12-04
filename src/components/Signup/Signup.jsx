import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import toast from "react-hot-toast";


const Signup = () => {

    const { googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleGoogleSignUp = () => {
        googleLogin()
            .then(res => {
                toast.success('Logged In Successfully');
                navigate('/')
                console.log(res.user);
            })
            .catch(err => {
                console.error(err);
            })
    }

    return (
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
                <form>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Your name" className="input input-bordered" required />
                    </div>
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
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="image" placeholder="Image URL" className="input input-bordered" />
                    </div>
                    <label className="label">
                        <span href="#" className="label-text-alt link link-hover">Already have an account? <Link className="border-b font-semibold border-primary text-fuchsia-800" to='/login'>Login</Link></span>
                    </label>
                    <div className="form-control mt-6">
                        <button className="btn btn-outline bg-fuchsia-900 hover:bg-purple-600 text-white rounded-md">Sign Up</button>
                    </div>
                </form>
                <div className="form-control mt-2">
                    <button onClick={handleGoogleSignUp} className="btn btn-outline btn-primary"><FaGoogle /> Sign Up With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Signup;