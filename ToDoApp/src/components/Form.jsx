import { useState } from "react";

const Form = ({addTodo}) => {
    const [value, setValue] = useState("")

    const handleTaskInput = (e) => setValue(e.target.value)
    const handleFormSubmit = (e) => {
        e.preventDefault();
        addTodo(value)
      
        setValue("")
    }

    return(
        <form className='Form' onSubmit={handleFormSubmit}>
            <input type="text" className='input' 
            value={value}
             placeholder ='What is the next task?' 
             onChange={handleTaskInput}/> 
             <button type='submit' className='todo-btn'>
                Add task
             </button>
        </form>
    )
}
export default Form;