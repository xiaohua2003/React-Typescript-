type personNameProps={
   personName:{
       first:string 
       last:string
   }
}
const Person=(props:personNameProps)=>{
    return (
        <div>{props.personName.first}- {props.personName.last}</div>
    )
}
export default Person