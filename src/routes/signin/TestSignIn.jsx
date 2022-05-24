import { display } from "@mui/system";
import React from "react";
import { useContext } from "react";

import { userContext } from "../../contexts/user.context";
import { userSignInWithEmailAndPassword } from "../../utils/firebase/firebaseutils";

const TestSignIn = () => {
  const { setUserData } = useContext(userContext);

  userSignInWithEmailAndPassword("waseem.tahir@gmail.com", "Mus@92953").then();

  return <div>setUserData({})</div>;
};

export default TestSignIn;
