function InputText(props){
    return(
        <>
        <div className="flex flex-col gap-7">
            <label className="">{props.name}</label>
            <input type="text" className="min-h-14 w-96 pl-3 border-2 rounder" placeholder={props.text}></input>
        </div>
        </>
    )
}
export default InputText;