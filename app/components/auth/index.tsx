import LoginHeader from "./loginHeader";
import Input from "../input";
import CardButton from "../cardButton";
import i18n from "../../../public/translation/i18n.json";
function LoginCard() {
  return (
    <div className="flex items-center justify-center min-h-screen text-black bg-white">
      <div className="w-full max-w-sm bg-white rounded-lg ">
        <div className="flex flex-col items-center justify-center mb-10">
          <LoginHeader text={i18n.login} />
          <div className="max-w-[340px] ">
            <div className="flex flex-col items-center justify-center w-full ">
            <div className="flex flex-col items-center justify-center w-full space-y-4 align-middle">
              <CardButton text="Continue with Google" cls="w-full" />
              <CardButton text="Continue with Apple" cls="w-full"/>
            </div>
            
            <div className="mt-10"></div>
            <div className="flex items-center justify-center flex-1 flex-grow-0 flex-shrink-0 w-full h-11">
              <div className="  w-full h-[1px]  border-b-[1px] border-gray-200"></div>
            </div>

            <div className="flex flex-col items-center justify-start mt-6 ">
              <form className="flex flex-col items-center justify-center">
                <div className="w-full mb-4">
                  <Input
                    type={i18n.email}
                    name="Email"
                    description={i18n.enterYourEmailAddress}
                    value=""

                  />
                </div>
                <CardButton
                  text={i18n.continueWithEmail}
                  cls="bg-red-100 border-red-400 hover:bg-red-200 w-full"
                />
              </form>
              <div className="text-center mx-[8px] my-[12px]  text-base font-normal text-[#A6a6a6]">
                <a className="underline">{i18n.forgotPassword}</a>
              </div>
            </div>
            </div>
          </div>
          <div className="w-[340px] mt-[60px] text-center text-sm font-thin text-[#A6a6a6] ">
            <p> {i18n.policy}{" "}
              <a className="underline">{i18n.termsAndConditions}</a> and {" "}
              <a className="underline">{i18n.privacyPolicy}</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginCard;
