// import { useState } from "react";

// const EditForm = ({editTodo, task}) => {
//     const [value, setValue] = useState("")

//     const handleTaskInput = (e) => setValue(e.target.value)
//     const handleFormSubmit = (e) => {
//         e.preventDefault();
//         editTodo(value, task.id)
      
//         setValue("")
//     }

//     return(
//         <form className='Form' onSubmit={handleFormSubmit}>
//             <input type="text" className='input' 
//             value={value}
//              placeholder ='Edit to?' 
//              onChange={handleTaskInput}/> 
//              <button type='submit' className='todo-btn'>
//                 Edit Task
//              </button>
//         </form>
//     )
// }
// export default EditForm;