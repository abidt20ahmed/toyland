import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SharedFooter from '../../components/SharedFooter';
import { FaGoogle } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import NavBar from '../../components/NavBar';

const Login = () => {
    const { signIn } = useContext(AuthContext)
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app)

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/'
    console.log(from);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user
                toast('Signed in Successfully')
                navigate(from, { replace: true })

            })
            .catch(error => {
                toast(error.message)
            })

    }


    const handleGoogleSignin = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                toast('Signed in successfully')
                navigate(from, { replace: true })

                console.log(result.user.photoURL);

            })
            .catch(error => {
                toast(`${error.message}`)
            })
    }

    return (    

        <>
            <NavBar></NavBar>
            <form onSubmit={handleLogin} className="flex px-10 md:px-20 flex-col gap-4 mt-24 rounded-lg max-w-screen-sm mx-auto bg-slate-200 pt-10 py-32 mb-20">
                <h1 className=" text-4xl font-bold text-center pb-10 text-transparent bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text">Login</h1>


            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="email2"
                        value="Your email"
                    />
                </div>
                <TextInput
                    id="email2"
                    type="email"
                    name='email'
                    placeholder="name@gmail.com"
                    required={true}
                    shadow={true}
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="password2"
                        value="Your password"
                    />
                </div>
                <TextInput
                    id="password2"
                    type="password"
                    name='password'
                    placeholder='******'
                    required={true}
                    shadow={true}
                />
            </div>

            <div className="flex items-center gap-2">
                    <Checkbox id="agree" required={true} />
                <Label htmlFor="agree">
                    I agree with the
                    <a
                        href="/forms"
                        className="ml-2 text-blue-600 hover:underline dark:text-blue-500"
                    >
                        terms and conditions
                    </a>
                </Label>
            </div>
                <Button gradientDuoTone="purpleToBlue" className='bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-900' type="submit">
                Register new account
            </Button>
                <div className='flex justify-between items-end'>

                    <Button outline={true} onClick={handleGoogleSignin} gradientDuoTone="purpleToBlue" className='bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-900 w-20'>

                        <FaGoogle className=' text-blue-600  w-6 h-6 bg-white rounded-full py-0'></FaGoogle>

                    </Button>

                    <small className='font-semibold text-right'>Not registered yet? <Link className=" text-blue-600 hover:underline dark:text-blue-500 font-semibold" to={'/register'}>Register</Link></small>
                </div>
        </form>
            <SharedFooter></SharedFooter>
        </>
    );
};

export default Login;