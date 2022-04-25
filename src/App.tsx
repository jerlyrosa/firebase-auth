import { useState } from 'react';
import AuthUI from './components/auth';
import Home from './components/home';
import Layout from './components/layout';



function App(): JSX.Element {

  const [user, setUser] = useState(null)
  return (

    <Layout>

      {user ? <Home /> : <AuthUI />}

    </Layout>
  );
}

export default App;
