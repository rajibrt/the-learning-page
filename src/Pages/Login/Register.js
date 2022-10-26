import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Register = () => {
    const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false)

    const handleAccepted = event => {
        setAccepted(event.target.checked)
    }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, email, photoURL, password);

        createUser(email, password)
            .then(userCredential => {
                const user = userCredential.user;
                console.log(user);
                form.reset();
                handleUpdateUserProfile(name, photoURL);
                handleEmailVerification();
                toast.success('Great! Please verify your email before login!')
            })
            .catch(error => console.error(error));
    }

    const handleEmailVerification = () => {
        verifyEmail()
            .then(() => { })
            .catch(error => console.error(error))
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-4/5 lg:w-2/6 m-auto mt-8 shadow-md p-8 rounded-md bg-slate-100">

            <div>
                <div className="mb-2 block ">
                    <Label
                        htmlFor="name"
                        value="Full Name"
                    />
                </div>
                <TextInput
                    name="name"
                    type="text"
                    placeholder="Full Name"
                    required={true}
                />
            </div>



            <div className='photo'>
                <div className="mb-2 block">
                    <Label
                        htmlFor="photoURL"
                        value="Photo url"
                    />
                </div>
                <TextInput
                    name="photoURL"
                    type="text"
                    placeholder="Photo url https://..."
                    required={true}
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="email1"
                        value="Your email"
                    />
                </div>
                <TextInput
                    name="email"
                    type="email"
                    placeholder="Your email address"
                    required={true}
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="password1"
                        value="Your password"
                    />
                </div>
                <TextInput
                    name="password"
                    type="password"
                    placeholder="Put your password"
                    required={true}
                />
            </div>
            <div className="flex items-center gap-2">
                <Checkbox onClick={handleAccepted} id="terms" />
                <Label htmlFor="terms">
                    Accept <Link to='/terms'><span className='text-blue-600'>Terms & Condition</span></Link>
                </Label>
            </div>
            <Button type="submit" disabled={!accepted}>
                Register
            </Button>
            <div className='text-center'>
                <h2>Already have an account? Please, try to <Link className="link link-primary" to="/login">Login</Link></h2>
            </div>
        </form>
    );
};

export default Register;