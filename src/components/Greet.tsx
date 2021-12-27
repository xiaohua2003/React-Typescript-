type GreetProps={
    name:string
    isLoggedIn:boolean
}
const Greet=(props:GreetProps) =>{
    return(
        <div>
            <h1>{props.isLoggedIn ? `hello ${props.name}from Canada`: 'Welsome guest' }</h1>
        </div>
    )
}
export default Greet