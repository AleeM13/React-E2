export const Task = (props) => {
    const {onDeleteTask, task} = props

  return (
    <>
        <div className="task" id={task.id}>
            <span>{task.task}</span>
            <button className="btn"
            onClick={() => onDeleteTask(task.id)}>Borrar</button> 
        </div>
    </>
  )
}
