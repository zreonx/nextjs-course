import EditForm from '@/components/EditForm';
import { getTask } from '@/utils/actions';
import Link from 'next/link';

const EditTaskPage = async ({ params }) => {
  const task = await getTask(params.id);

  return (
    <>
      <div className="mb-16">
        <Link className="btn btn-accent" href="/tasks">back to tasks</Link>
        <EditForm task={task} />
      </div>
    </>
  );
};

export default EditTaskPage;
