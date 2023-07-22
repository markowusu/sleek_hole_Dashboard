import State from "./abstractClasses/loginState";
class Context{
    protected state!: State;
    constructor(
        state: State
    ){
       this.transitionState(state);
    }

    transitionState(state: State){
        this.state = state;
        this.state.referenceContext(this)
    }
    execute(value:{email:string}): void{
        this.state.execute(value);
    }

    transition(){
        this.state.transition();
    }
}

export default Context;