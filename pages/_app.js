import '../styles/globals.css'
import '../styles/Login.css'
import Head from 'next/head';
import Login from './Login';
import { useState } from 'react';
import { auth } from '../BD/Configuracion';
function MyApp({ Component, pageProps }) {
  const [userName, setuserName] = useState(null);
   return (
    	
    <>
      <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
          <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Reem+Kufi:wght@400;500;600;700&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Lilita+One&display=swap" rel="stylesheet"></link>
         <title>Tecer Grado</title>
      </Head>
      {auth.onAuthStateChanged((user) => {
        setuserName(user);
       
      })}
      {userName ? (
          <Component {...pageProps} />
        ) : (
        <Login />
      )}
</>
    )
}

export default MyApp
