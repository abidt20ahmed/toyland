import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { getAuth, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { Link, useNavigate } from 'react-router-dom';
import SharedFooter from '../../components/SharedFooter';
import { toast } from 'react-toastify';
import NavBar from '../../components/NavBar';

const Register = () => {
    const { createUser, logOut } = useContext(AuthContext)
    const navigate = useNavigate();

    const auth = getAuth(app)


    const handleRegister = async (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name, email, password, photo);

        await createUser(email, password)
            .then(result => {
                const createdUser = result.user
                toast('successfully registered. Login now!')
                logOut()
                navigate('/login')
            })
            .catch(error => {
                console.log(`${error.message}`)
            })


        await updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        }).then(() => {
            // Profile updated!
            console.log('Profile updated!');
            // ...
        }).catch((error) => {
            // An error occurred
            console.log(error);
            // ...
        });

    }




    return (
        <>
            <NavBar></NavBar>
            <form onSubmit={handleRegister} className="flex px-10 md:px-20 flex-col gap-4 my-24 rounded-xl max-w-screen-sm mx-auto bg-slate-100 py-10">
                <h1 className=" text-4xl font-bold text-center pb-10 text-transparent bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text">Register</h1>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="name2"
                            value="Your name"
                        />
                    </div>
                    <TextInput
                        id="name2"
                        type="text"
                        name='name'
                        placeholder="Your Name"
                        required={true}
                        shadow={true}
                    />
                </div>
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
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="photo-url"
                            value="Photo Url"
                        />
                    </div>
                    <TextInput
                        id="photo-url"
                        type="text"
                        name='photo'
                        placeholder='Photo Url'
                        shadow={true}
                    />
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="agree" />
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

                <small className='font-semibold'>Already have an account? <Link className=' text-blue-600 hover:underline dark:text-blue-500 font-semibold' to={'/login'}>Login</Link></small>
            </form>
            <SharedFooter></SharedFooter>
        </>
    );
};

export default Register;