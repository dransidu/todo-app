export default function TodoItem(props) {
    return (
        <li className={`list-group-item ${props.isComplete ? 'bg-success text-white' : ''}`}>
            <div className='d-flex justify-content-between align-items-center'>
                <span className={`fw-bold `}>{props.name}</span>
                <div className=''>
                    <button onClick={() => props.doneTodo(props.index)} className={`btn btn-success btn-sm fw-bold me-1 ${props.isComplete ? 'd-none' : ''}`}>O</button>
                    <button onClick={() => props.redoTodo(props.index)} className={`btn btn-warning btn-sm fw-bold me-1 ${props.isComplete ? '' : 'd-none'}`}>U</button>
                    <button onClick={() => props.removeTodo(props.index)} className='btn btn-danger btn-sm fw-bold'>X</button>
                </div>
            </div>
        </li>
    )
}
