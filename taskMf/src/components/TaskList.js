import TaskForm from "./TaskForm";
import Task from "./Task";
import { useEffect, useState } from "react";
import axios from "axios";
import { URL } from "../App";
const TaskList = () => {
  const [formData, setFormData] = useState({
    name: "",
    completed: false,
  });

  const { name } = formData;

  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [taskId, setTaskId] = useState();
  const [taskCount, setTaskCount] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const createTask = async (e) => {
    e.preventDefault();
    if (name === "") {
      console.log("empty");
    }
    try {
      await axios.post(`${URL}/api/tasks`, formData);
      setFormData({ ...formData, name: "" });
      getTasks();
    } catch (error) {
      console.log(error);
    }
  };

  const getTasks = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(`${URL}/api/tasks`);
      setTasks(data);
      setIsLoading(false);
      setTaskCount(data.length);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getTasks();
  }, []);

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${URL}/api/tasks/${id}`);
      getTasks();
    } catch (error) {
      console.log(error);
    }
  };

  const getSingleTask = async (task) => {
    setFormData({
      name: task.name,
      completed: false,
    });
    setIsEditing(true);
    setTaskId(task._id);
  };

  const updateTask = async (e) => {
    e.preventDefault();
    if (name === "") {
      return console.log("it is empty");
    }
    try {
      await axios.put(`${URL}/api/tasks/${taskId}`, formData);
      setFormData({ ...formData, name: "" });
      setIsEditing(false);
      getTasks();
    } catch (error) {
      console.log(error);
    }
  };

  const setToCompleted = async (task) => {
    const newFormData = {
      name: task.name,
      completed: !task.completed,
    };
    try {
      await axios.put(`${URL}/api/tasks/${task._id}`, newFormData);
      getTasks();
    } catch (error) {
      console.error();
    }
  };

  useEffect(() => {
    const count = tasks.filter((task) => {
      return task.completed === true;
    });
    setCompletedTasks(count);
  }, [tasks]);

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm
        name={name}
        handleInputChange={handleInputChange}
        createTask={createTask}
        isEditing={isEditing}
        updateTask={updateTask}
      />
      <b> task count: {taskCount}</b>
      <b> task completed : {completedTasks.length}</b>
      {isLoading && <div>loading...</div>}
      {!isLoading && tasks.length === 0 ? (
        <b>no items to display</b>
      ) : (
        <>
          {tasks.map((task, index) => {
            return (
              <Task
                key={task._id}
                task={task}
                index={index}
                deleteTask={deleteTask}
                getSingleTask={getSingleTask}
                setToCompleted={setToCompleted}
              />
            );
          })}
        </>
      )}
    </div>
  );
};
export default TaskList;
