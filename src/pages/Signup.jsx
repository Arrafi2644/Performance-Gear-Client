import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import { updateProfile } from 'firebase/auth';
import auth from '../firebase/firebase.init';
import { Zoom } from 'react-awesome-reveal';

const Signup = () => {

    const {signUpUser, signInWithGoogle} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleSignUpUser = (e) => {
        e.preventDefault();

        console.log("clickdd");
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        const user = {name, email, photo, password}
        console.log(user);

        signUpUser(email, password)
        .then(result => {
            // console.log(result);

              updateProfile(auth.currentUser, {displayName: name, photoURL: photo})
              .then(result => {
                
                  Swal.fire({
                      position: "center",
                      icon: "success",
                      title: "Signup successfully!",
                      showConfirmButton: false,
                      timer: 2000
                    });
                  navigate('/')
              })
              .catch(error => {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Something went wrong ! Try again",
                    showConfirmButton: false,
                    timer: 2000
                  });
              })
        })
        .catch(error => {
            // console.log(error);
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Something went wrong ! Try again",
                showConfirmButton: false,
                timer: 2000
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
                timer: 2000
              });
            navigate('/')
        })
        .catch(error => {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Something went wrong ! Try again",
                showConfirmButton: false,
                timer: 2000
              });
        })
    }

    return (
        <Zoom>
            <div className='max-w-7xl w-11/12 mx-auto my-10'>
            <div className="hero bg-third min-h-screen rounded-lg py-8">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold">Signup now!</h1>
                        <p className="py-6 w-11/12 md:w-4/5 lg:w-3/5 mx-auto" >
                        Join Performance Gear today and unlock exclusive access to premium sports accessories, special offers, and a personalized shopping experience!
                        </p>
                    </div>
                        <button onClick={handleSignInWithGoogle} className="btn bg-accent w-full md:w-3/5">Sign up with google</button>
                        <div className="divider w-full md:w-3/5 mx-auto">OR</div>
                    <div className="card bg-base-100 w-full md:w-3/5 shrink-0 shadow-2xl">
                        <form onSubmit={handleSignUpUser} className="card-body">
                        <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name='name' type="text" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input name='photo' type="text" placeholder="photo url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <input className='btn bg-accent' type="submit" value="Signup" />
                            </div>
                            <p>Already have an account? <Link className='text-accent underline' to='/login'>Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </Zoom>
    );
};

export default Signup;