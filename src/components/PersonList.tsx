type personProps={
    NameList:{first: string , last:string}[]
}
export const PersonList=(props:personProps)=>{
    return (
        <div>{props.NameList.map(name=>{
            return (
                <h2 key={name.first}>{name.first}-{name.last}</h2>
            )
        })}</div>
    )
}