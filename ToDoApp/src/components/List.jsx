import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const List = ({task, toggleComplete, deleteTodo, editTodo}) => {
    console.log(task.id);
    return(
        <div className='List'>
        <p className={`${task.completed ? "completed" : ""}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
            <div>
            <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} onClick={() => editTodo(task.id)} />
            <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={() => deleteTodo(task.id)} />
        
            </div>
        </div>
    )
}
export default List;