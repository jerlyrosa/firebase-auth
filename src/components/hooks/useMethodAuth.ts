import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";



  export const useMethodAuth = () => {
    const auth = getAuth();


    const addUserAuth = async (email:string, password:string): Promise<unknown> => {

        return createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
          return user.email as string;

          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            console.log(errorCode)
            console.log(errorMessage)
          return false;

            // ..
          });

    };


    const signInAuth = async (
      email: string,
      password: string
    ): Promise<unknown> => {



       return signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          return user.email as string;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          console.log(errorCode);
          console.log(errorMessage);
          return false;
        });




    };




    const AuthSignOut = async ():Promise<void>=>{
      signOut(auth).then(() => {
        // Sign-out successful.
        console.log("Sign-out successful.")
      }).catch((error) => {
        // An error happened.
        console.log("An error happened.", error)
      });

      
    }
    
  
    return {
        addUserAuth,
        signInAuth,
        AuthSignOut
    } as const;
  };
  