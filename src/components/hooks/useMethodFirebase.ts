import {
  collection,
  addDoc,
} from "firebase/firestore";
import { SyntheticEvent } from "react";
import { db } from "../../config/firebase";
import { FormInterface } from "../interface";
import { useMethodAuth } from "./useMethodAuth";
export const useMethodFirebase = () => {

  const COLLECTION: string = "user";



const {addUserAuth, signInAuth }= useMethodAuth()

  const addFirebase = async (e: SyntheticEvent): Promise<string | undefined | boolean> => {
    e.preventDefault();
    const target = e.target as typeof e.target & FormInterface

    const nickname:(string | undefined  ) = target.usernickname?.value;
    const fuulname:(string | undefined  )=target.userfullname?.value;
    const email:string=target.useremailaddress.value;
    const password:string=target.userpassword.value;



    if (nickname !== undefined && nickname !== undefined) {

      
      await addDoc(collection(db, COLLECTION), {
        nick_name: nickname,
        full_name: fuulname,
        email: email,
        password: password,
      })
        .then(() => {
          addUserAuth(email, password).then((email) => {
            console.log("User available");
            return email as string | boolean;
          });
        })
        .catch((error) => {
          console.error("Upload failed", error);
          return false;
        });


    }

    if(email && password && nickname === undefined){
      return signInAuth(email, password)
        .then((email) => {
          return email as string | boolean;
        })
        .catch((error) => {
          console.error("Upload failed", error);
          return false;
        });
    }
  };



  return {
    addFirebase,
  } as const;
};
