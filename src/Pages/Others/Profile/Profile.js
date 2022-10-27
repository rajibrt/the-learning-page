import { Button, Checkbox, Label, TextInput, Tooltip } from 'flowbite-react';
import React, { useContext, useState } from 'react';

import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';



const Profile = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    return (
        <form className="flex flex-col gap-4 w-4/5 lg:w-2/6 m-auto mt-8 shadow-md p-8 rounded-md bg-slate-100">
            <img className='rounded-full w-20 m-auto border-4 border-white shadow-lg' src={user?.photoURL} alt="" />
            <Link to='/profile' className="btn">
                <Tooltip
                    content="Tooltip content"
                    placement="bottom"
                >
                    <>
                        {user?.displayName}
                    </>
                </Tooltip>
            </Link>

            <div>
                <div className="mb-2 block ">
                    <Label
                        htmlFor="name"
                        value="User Name"
                    />
                </div>
                <TextInput
                    name="name"
                    type="text"
                    defaultValue={user?.displayName}
                    placeholder="Name"
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
                    defaultValue={user?.email}
                    readOnly
                    type="email"
                    placeholder="Your email address"
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
                    defaultValue={user?.photoURL}
                    placeholder="Photo url https://..."
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

            <Button type="submit">
                Update
            </Button>
        </form>
    );
};

export default Profile;