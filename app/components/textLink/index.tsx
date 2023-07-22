export default function TextLink({text, onClick}:{text:string, onClick?:any}){
    return (
    <a className="underline" onClick={onClick}>{text}</a> 

    )
}