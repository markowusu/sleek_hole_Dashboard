import State from "../classes/abstractClasses/loginState";
import ForgotPassword from "./forgotPassword";
class ContinueWithEmail extends State{  
    public execute(value:{email:string}): void {
        console.log(`${value} This is email `)
    }

    public transition(): void {
        this.context.transitionState(new ForgotPassword())
    }
}

export default ContinueWithEmail;