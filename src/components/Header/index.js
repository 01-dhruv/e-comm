// import React from 'react'
// import { Link } from 'react-router-dom'


// const navigations = [
//   {
//     name: 'Home',
//     path: '/'
//   },
//   {
//     name: 'Products',
//     path: '/products'
//   },  
//   {
//     name: 'About',
//     path: '/about'
//   },
//   {
//     name: 'Contact',
//     path: '/contact'
//   },

// ]



// const Header = () => {
//   return (

//     <header className="text-gray-600 body-font border-t-2 bg-blue-200">
//   <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//     <Link to={'/'} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
//       <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
//         <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
//       </svg>
//       <span className="ml-3 text-xl">Ecom</span>
//     </Link>
//     <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">

//         {
//           navigations.map((navigation) =>{
//             return (
//               <Link to={navigation.path} className='mr-5 hover:text-gray-900'>{navigation.name}</Link>
//             )
//           })
//         }


//     </nav>


//     <Link to={'/login'} className="inline-flex items-center text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-700 rounded text-base mt-4 md:mt-0 ml-2 mr-2">Log In
//       {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
//         <path d="M5 12h14M12 5l7 7-7 7"></path>
//       </svg> */}
//     </Link>


//     <Link to={'/cart'} className="inline-flex items-center text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-700 rounded text-base mt-4 md:mt-0 ml-2 mr-2">Cart
//       {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
//         <path d="M5 12h14M12 5l7 7-7 7"></path>
//       </svg> */}
//     </Link>




//   </div>
// </header>

//   )
// }

// export default Header












import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../firebase'; // Import your Firebase authentication instance


const navigations = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Categories',
    path: '/categories'
  },  
  {
    name: 'About',
    path: '/about'
  },
  {
    name: 'Contact',
    path: '/contact'
  },

]


const Header = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        // User is signed in.
        setUser(authUser);
      } else {
        // No user is signed in.
        setUser(null);
      }
    });

    return () => {
      // Unsubscribe from the auth observer when the component is unmounted.
      unsubscribe();
    };
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Successfully signed out
      })
      .catch((error) => {
        console.error('Error signing out:', error);
      });
  };

  return (
    <header className="text-gray-600 body-font border-t-2 bg-blue-200">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to={'/'} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">UrbaneMart</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          {/* Navigation links */}
          {/* ... */}


    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        {
          navigations.map((navigation) =>{
            return (
              <Link to={navigation.path} className='mr-5 hover:text-gray-900'>{navigation.name}</Link>
            )
          })
        }
    </nav>


        </nav>
        <div className="flex items-center">
          {user ? (
            <div className="mr-2">
              <span className="text-black text-base font-bold capitalize">{user.displayName}</span>
            </div>
          ) : (
            <Link
              to={'/login'}
              className="inline-flex items-center text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-700 rounded text-base mt-4 md:mt-0 ml-2 mr-2"
            >
              Log In
            </Link>
          )}
          {user && (
            <>
            <Link to={'/'}
              onClick={handleLogout}
              className="inline-flex items-center text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-700 rounded text-base mt-4 md:mt-0"
            >
              Logout
            </Link>

            <Link to={'/cart'} className="inline-flex items-center text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-700 rounded text-base mt-4 md:mt-0 ml-2 mr-2">Cart
              {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg> */}
            </Link>    
            </>     
  )}
        </div>
      </div>
    </header>
  );
};

export default Header;