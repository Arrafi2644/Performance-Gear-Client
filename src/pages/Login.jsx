import React, { useContext } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import { Zoom } from 'react-awesome-reveal';

const Login = () => {

    const { signInUser, signInWithGoogle } = useContext(AuthContext)
    const navigate = useNavigate()
    const {pathname, state} = useLocation()
    console.log(pathname, state);

    const handleLoginUser = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        const user = { email, password }
        console.log(user);

        signInUser(email, password)
            .then(result => {
                console.log(result);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Successfully login",
                    showConfirmButton: false,
                    timer: 1500
                });

                navigate(`${state ? state : '/'}`)

            })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Invalid user email or password!",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
    }

    const handleSignInWithGoogle = () => {
        signInWithGoogle()
        .then(result => {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Signup successfully!",
                showConfirmButton: false,
                timer: 1500
              });
              navigate(`${state ? state : '/'}`)
        })
        .catch(error => {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Something went wrong ! Try again",
                showConfirmButton: false,
                timer: 1500
              });
        })
    }

    return (
        <Zoom>
            <div className='max-w-7xl w-11/12 mx-auto my-10'>
            <div className="hero bg-third min-h-screen rounded-lg py-8">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold">Login now!</h1>
                        <p className="py-6 w-11/12 md:w-4/5 lg:w-3/5 mx-auto" >
                            Access your Performance Gear account to explore exclusive deals, manage orders, and gear up for your next adventure effortlessly!
                        </p>
                    </div>
                    <button onClick={handleSignInWithGoogle} className="btn bg-accent w-full md:w-3/5">Log in with google</button>
                    <div className="divider w-full md:w-3/5 mx-auto">OR</div>
                    <div className="card bg-base-100 w-full md:w-3/5 shrink-0 shadow-2xl">
                        <form onSubmit={handleLoginUser} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className='btn bg-accent' type="submit" value="Login" />
                            </div>
                            <p>Don't have any account? <Link className='text-accent underline' to='/signup'>Signup</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </Zoom>
    );
};

export default Login;