import TaskForm from "./TaskForm"
import Task from "./Task"
const TaskList = () => {
  return <div>
    <h1>Task Manager</h1>
    <TaskForm/>
    <b> task count: 0</b>
    <b> task completed : 0</b>
    <Task/>
</div>
}
export default TaskList
