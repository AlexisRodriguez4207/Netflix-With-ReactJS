import React from 'react'

const Signup = () => {
  return (
    <>
      <div className='w-full h-screen'>
          <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/c732cb00-be61-4d64-b8c3-99f022e7a123/0d182e5c-db90-461d-8670-a674e7a923ee/MX-es-20220620-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="/"/>
            <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
            <div className=' fixed w-full px-4 py-24 z-50'>
              <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
                <div className='max-w-[320px] mx-auto py-16'>
                  <h1 className='text-3xl font-bold'>Sign Up</h1>
                  <form>
                    <input type="email" placeholder='Email' autoComplete='email'/>
                    <input type="password" placeholder='Password' autoComplete='current-password'/>
                  </form>
                </div>

              </div>
            </div>
      </div>
    </>
  );
};

export default Signup;