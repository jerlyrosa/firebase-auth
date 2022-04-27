import { useEffect, useState } from 'react';
import AuthUI from './components/auth';
import Home from './components/home';
import Layout from './components/layout';
import { getAuth,  onAuthStateChanged } from "firebase/auth";
import { Heading } from '@chakra-ui/react';

function App(): JSX.Element {


  const [user, setUser] = useState<boolean | undefined >(undefined)
  const [email, setEmail] = useState<string | undefined>(undefined)
  
  
  
  useEffect(()=>{
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const userEmail: string = user.email as string;
        setUser(true);
        setEmail(userEmail);
      } else {
        // User is signed out
        setUser(false);
        console.log("error");
      }
    });
},[])


  return (
    <Layout>
      {user === undefined ? (
        <Heading textAlign="center">Loading...</Heading>
      ) : user === true ? (
        <Home email={email} />
      ) : (
        <AuthUI setUser={setUser} setEmail={setEmail} />
      )}
    </Layout>
  );
}

export default App;
