import {
  collection,
  addDoc,
  onSnapshot
} from "firebase/firestore";
import { SyntheticEvent, useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { FormInterface } from "../interface";
import { useMethodAuth } from "./useMethodAuth";
// import { modelDataWiew, modelDataBase } from "../../interface/interface";
export const useMethodFirebase = () => {

  const COLLECTION: string = "user";

  const [nick, setNick] = useState<string | undefined>(undefined)

const {addUserAuth, signInAuth }= useMethodAuth()

  const addFirebase = async (e: SyntheticEvent): Promise<string> => {
    e.preventDefault();
    const target = e.target as typeof e.target & FormInterface

    const nickname:(string | undefined  ) = target.usernickname?.value;
    const fuulname:(string | undefined  )=target.userfullname?.value;
    const email:string=target.useremailaddress.value;
    const password:string=target.userpassword.value;



    if (nickname !== undefined && nickname !== undefined) {
      await addDoc(collection(db, COLLECTION), {
        nick_name:nickname,
        full_name: fuulname,
        email:email,
        password:password
      })
        .then(() => {
          addUserAuth(email, password)
          getNickName(email)
          console.log("User available");
        })
        .catch((error) => {
          console.error("Upload failed", error);
        });
    }
    if(email && password && nickname == undefined){
      // console.log("entro")
      signInAuth(email,password).then(()=> getNickName(email) )
   


      // return true


    }
    return nick as string
  };

interface dataI {
  nick_name:string
  email: string
}


  const getNickName=((useremail:string) => {

   const algo = onSnapshot(collection(db, COLLECTION), (doc) => {
      const data = doc.docs.map((doc) => [doc.id, doc.data()]);
      // const docdata: modelDataWiew[] = [];

      return data.map((item) => {
        const { nick_name, email } = item[1] as dataI;
      
        if (useremail === email) setNick(nick_name);
      });
 
    });


  }
  );

  return {
    addFirebase,
    getNickName,
    nick
  } as const;
};
