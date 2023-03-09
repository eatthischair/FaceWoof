/* eslint-disable react/jsx-indent-props */
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';
import AuthForm from '../components/AuthForm/AuthForm';
import dogImage from '../assets/dog.jpg';

const Home = () => {
  const { authState, oktaAuth } = useOktaAuth();
  const history = useHistory();
  const [userEmail, setUserEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  // return <div>this is a test of the home page</div>;
  if (!authState) {
    return <div>Loading...</div>;
  }

  oktaAuth.token
    .getUserInfo()
    .then((info) => {
      setUserEmail(info.email);
      setFirstName(info.given_name);
      setLastName(info.family_name);
    })
    .catch((err) => {
      console.log(err);
    });

  const handleLogin = async () => history.push('/login');
  const handleLogout = async () => oktaAuth.signOut();

  return (
    <div className="flex h-screen w-screen">
      <div className="relative w-[600px]">
        <Link
          to="/"
          className="absolute top-4 left-4 border border-0 px-12 py-2 bg-[#8d5426] rounded text-white"
        >
          Diggr
        </Link>
        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
        <img className="w-full h-full" src={dogImage} alt="dog-image" />
      </div>
      <div
        className="flex flex-col space-y-5 px-12 items-center justify-center"
        style={{ width: `--webkit-calc(100% - 600px)` }}
      >
        <h3 className="text-2xl text-center text-[#bb7c7c] font-medium my-3">Create An Account</h3>
        <AuthForm action="signup" />
        <p className="text-center text-[#bb7c7c]">
          Already Have An Account? &nbsp;
          <Link to="/login" className="font-bold">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Home;
