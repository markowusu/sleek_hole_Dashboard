import Context from "../loginContext";
abstract class State{
    protected context!: Context;
    public referenceContext(context: Context){
        this.context = context;
    }
    public abstract execute(value:{email:string}):void;
    public abstract transition():void;
}

export default State;