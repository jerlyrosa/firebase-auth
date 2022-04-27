import { useEffect, useState } from 'react';
import AuthUI from './components/auth';
import Home from './components/home';
import { useMethodFirebase } from './components/hooks/useMethodFirebase';
import Layout from './components/layout';



function App(): JSX.Element {

  const { nick } = useMethodFirebase()
// let result:string = getNickName();



useEffect(()=>(



  console.log(nick)

),[nick])



  const [user, setUser] = useState<boolean>(false)




  return (

    <Layout>

      {user ? <Home /> : <AuthUI setUser={setUser} />}

    </Layout>
  );
}

export default App;
