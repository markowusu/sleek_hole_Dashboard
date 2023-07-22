import ContinueWithEmail from "./continueWithEmail";
import State from "../classes/abstractClasses/loginState"
class ForgotPassword extends State{
    public execute(value:{email:string}): void {
        console.log("This is password ","{send this email a password of fsg-dsf-fw6-rtd}")
        
    }

    public transition(): void {
        this.context.transitionState(new ContinueWithEmail())

    }
}

export default ForgotPassword;