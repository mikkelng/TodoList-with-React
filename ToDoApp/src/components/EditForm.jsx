import { useState } from "react";

const EditForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task)

    const handleTaskInput = (e) => setValue(e.target.value)
    const handleFormSubmit = (e) => {
        e.preventDefault();
        editTodo(value, task.id)
      
        setValue("")
    }

    return(
        <form className='EditForm' onSubmit={handleFormSubmit}>
            <input type="text" className='input' 
            value={value}
             placeholder ='Edit to?' 
             onChange={handleTaskInput}/> 
             <button type='submit' className='todo-btn'>
                Edit
             </button>
        </form>
    )
}
export default EditForm;