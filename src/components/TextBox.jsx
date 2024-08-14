

function TextBox(props){
return(
    
    <div className="flex flex-col mb-4">
    <label htmlFor="" className="mb-4 font-bold text-xl">{props.name}</label>
    <input type="text"  placeholder={props.placeholder} id="fullname" name="fullname" required className="border border-indigo-600 w-96 py-1 rounded-lg h-12 px-2.5 border-slate-400"/> 
  </div>
  
)
}
export default TextBox ;
 