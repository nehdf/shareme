import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { client } from '../client';

import { useGoogleLogin } from '@react-oauth/google';
import shareVideo from '../assets/Share.mp4'
import logo from '../assets/logo.png'

const Login = () => {
  const navigate = useNavigate();

  const responseGoogle = (credentialResponse: any) => {
    // credentialResponse contains credential and other info
    // You may want to decode the JWT to get user info
    localStorage.setItem('user', JSON.stringify(credentialResponse));
    const doc={
      _id: credentialResponse.profileObj.email,
      _type: 'user',
      userName: credentialResponse.profileObj.name,
      image: credentialResponse.profileObj.picture,
    }
    
      
    
    // You can add logic here to send the credential to your backend or Sanity
    // and navigate to the home page after successful login
    navigate('/');
  };
  return (
  <div className='flex justify-start itemes-center flex-col h-screen z-10'>
    <div className='relative w-full h-full'>
      <video
        src={shareVideo}
        typeof='video/mp4'
        loop
        controls={false}
        muted
        autoPlay
        className='w-full h-full object-cover opacity-40'
      />
      <div className='absolute flex flex-col justify-center items-center top-0 right-0  left-0 bottom-0 '>
        <div className='p-5'>
          <img src={logo} width='130px' alt="logo" />
        </div>
        <div className='shadow-2xl'>
          <GoogleOAuthProvider clientId={import.meta.env.REACT_APP_GOOGLE_API_TOKEN}>
            <GoogleLogin
              onSuccess={responseGoogle}
              onError={() => {
                console.log('Login Failed');
              }}
            />
          </GoogleOAuthProvider>

        <div>
          
        </div>
      </div>
      
    </div>
    
      </div>
    </div>
  );
}

export default Login