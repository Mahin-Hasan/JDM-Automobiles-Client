import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";


const Signup = () => {

    const { googleLogin, createUser } = useContext(AuthContext);
    const navigate = useNavigate();

    //signup using email and pass
    const handleSignUp = event => {
        event.preventDefault();
        console.log('wokring');
        const field = event.target;
        const name = field.name.value;
        const email = field.email.value;
        const password = field.password.value;
        const image = field.image.value;

        console.log(name, email, password, image);

        //check password validation
        if (password.length < 6) {
            toast.error('password can not be less than 6 character');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            toast.error('Must have one capital letter')
            return;
        }
        else if (!/[^a-zA-Z0-9]/.test(password)) {
            toast.error('Must contain one special character')
            return;
        }

        // signup with emaila and password
        createUser(email, password)
            .then(res => {
                console.log(res.user);
                toast.success('Sign up Successful')
                updateProfile(res.user, {
                    displayName: name,
                    photoURL: image
                })
                navigate('/')
            })
            .catch(err => {
                console.error(err);
            })
    }

    // signup using google auth
    const handleGoogleSignUp = () => {
        googleLogin()
            .then(res => {
                toast.success('Sign up sucessful');
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
                <form onSubmit={handleSignUp}>
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