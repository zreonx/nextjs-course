import DeleteForm from "@/components/DeleteForm";
import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";

const TaskPage = () => {
  return (
    <div className="max-w-lg">
      <TaskForm />
      <DeleteForm />
      <TaskList />
    </div>
  );
};

export default TaskPage;
