import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Login = () => {
    const { signIn, setLoading, providerLogin } = useContext(AuthContext);
    const googleProviderLogin = new GoogleAuthProvider();
    const githubProviderLogin = new GithubAuthProvider();
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        return providerLogin(googleProviderLogin)
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });

            })
            .catch(error => console.error(error))
    }
    const handleGithubSignIn = () => {
        return providerLogin(githubProviderLogin)
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            }
            )
            .catch(error => console.error(error))
    }


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(userCredential => {
                const user = userCredential.user;
                form.reset();
                setError('');
                if (user.emailVerified) {
                    navigate(from, { replace: true });
                }
                else {
                    toast.error('Please verify your email address. (Check inbox or spam folder)')
                }
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })

    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-4/5 lg:w-2/6 m-auto mt-8 shadow-md p-8 rounded-md bg-slate-100">
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="email"
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
                        htmlFor="password"
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
                <Checkbox id="remember" />
                <Label htmlFor="remember">
                    Remember me
                </Label>
            </div>
            <Button type="submit">
                Login
            </Button>
            <div className='flex gap-2'>
                <Button className='bg-blue-600 w-1/2' onClick={handleGoogleSignIn}><FaGoogle className='mr-2'></FaGoogle>Login with Google</Button>
                <Button className='bg-blue-600 w-1/2' onClick={handleGithubSignIn}><FaGithub className='mr-2'></FaGithub>Login with Github</Button>
            </div>
            <h2 className='text-center font-bold'>or</h2>
            <Button className='bg-yellow-400 w-2/2'><Link to='/register'>Register</Link></Button>

            <p className='text-orange-500'>{error}</p>
        </form >
    );
};

export default Login;