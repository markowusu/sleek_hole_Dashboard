'use client'
import LoginHeader from "./loginHeader";
import Input from "../input";
import Image from "next/image";
import CardButton from "../cardButton";
import i18n from "../../../public/translation/i18n.json";
import {useFormik} from "formik";
import {emailValidationSchema} from "../../utils/validationSchemas/";
import { useState } from "react";
import classNames from "classnames";
import LinkText from "../textLink"
import route from "../../../public/routes/route.json"
import Context from "@/app/utils/helper/classes/loginContext";
import ContinueWithEmail from "@/app/utils/helper/ImplLoginStates/continueWithEmail";

function LoginCard() {

  const [forgotPassword, setFortPassword] = useState(false);
  let context = new Context(new ContinueWithEmail());
   
  if (forgotPassword){
    context.transition();
  }
  const OnForgotPassword = ()=>{
    setFortPassword(!forgotPassword);
  };

  const OnContinueWithEmail =()=>{
    setFortPassword(!forgotPassword);
  }
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: emailValidationSchema,
    onSubmit: (values) => {
      context.execute(values);
    },
  });
  
  return (
    <div className="flex items-center justify-center min-h-screen text-black bg-white">
      <div className="w-full max-w-sm bg-white rounded-lg ">
        <div className="flex flex-col items-center justify-center mb-10">
          <LoginHeader text={i18n.login} />
          <div className="max-w-[340px] ">
            <div className="flex flex-col items-center justify-center w-full ">
            <div className="flex flex-col items-center justify-center w-full space-y-4 align-middle">
              <CardButton text="Continue with Google" cls="w-full" >
              <Image
              src={route.googlelogo}
              alt="Vercel Logo"
              className="text-black"
              width={15}
              height={18}
              priority
            />
              </CardButton>
              <CardButton text="Continue with Apple" cls="w-full">
              <Image
              src={route.applelogo}
              alt="Vercel Logo"
              className="flex-shrink-0 text-black"
              width={18}
              height={18}
              priority
            />
                </CardButton>
            </div>
            
            <div className="mt-10"></div>
            <div className="flex items-center justify-center flex-1 flex-grow-0 flex-shrink-0 w-full h-11">
              <div className="  w-full h-[1px]  border-b-[1px] border-gray-200"></div>
            </div>

            <div className="flex flex-col items-center justify-start w-full mt-6 ">
              <form className="flex flex-col items-center justify-center w-full" onSubmit={formik.handleSubmit}>
                <div className="w-full mb-4">
                  <Input
                    type={i18n.email}
                    name={i18n.email}
                    onChange={formik.handleChange}
                    description={i18n.enterYourEmailAddress}
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                    errorMessage ={formik.errors.email}
                  />
                </div>
                 <CardButton
                  text={ forgotPassword ? i18n.forgotPassword :i18n.continueWithEmail}
                  cls="bg-red-100 border-red-400 hover:bg-red-300 w-full"
                  onClick={formik.handleSubmit}
                />
              </form>
              <div className={classNames("text-center mx-[8px] my-[12px]  text-base font-normal text-[#A6a6a6]")}>
              <LinkText onClick={ forgotPassword ? OnContinueWithEmail : OnForgotPassword} text= { forgotPassword ? i18n.continueWithEmail : i18n.forgotPassword} /> 
              </div>
            </div>
            </div>
          </div>
          <div className="w-[340px] mt-[60px] text-center text-sm font-thin text-[#A6a6a6] ">
            <p> {i18n.policy}{" "}
              <LinkText text={i18n.termsAndConditions}/> and {" "}
              <LinkText text={i18n.privacyPolicy} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginCard;
