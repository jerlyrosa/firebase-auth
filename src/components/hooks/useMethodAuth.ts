import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useMethodFirebase } from "./useMethodFirebase";


// const {getNickName}=useMethodFirebase();

  export const useMethodAuth = () => {
  
    const addUserAuth = async (email:string, password:string): Promise<void> => {
        const auth = getAuth();

        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            console.log(errorCode)
            console.log(errorMessage)
            // ..
          });

    };


    const signInAuth = async (
      email: string,
      password: string
    ): Promise<void> => {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          console.log("inicie seccion")
          const user = userCredential.user;
          console.log(user.email)
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          console.log("error")
        });
    };
    

    
  
    return {
        addUserAuth,
        signInAuth
    } as const;
  };
  