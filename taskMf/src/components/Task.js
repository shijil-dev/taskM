const Task = ({ task, index, deleteTask, getSingleTask, setToCompleted }) => {
  return (
    <div>
      <p>
        <b>{index + 1} </b>
        {task.name}
        <button onClick={() => setToCompleted(task)}>
          {task.completed ? <>done</> : <>pending</>}
        </button>
        <button
          onClick={() => {
            getSingleTask(task);
          }}
        >
          edit
        </button>
        <button
          onClick={() => {
            deleteTask(task._id);
            console.log(task._id);
          }}
        >
          del
        </button>
      </p>
    </div>
  );
};
export default Task;
