import TaskList from '@/components/TaskList';
import prisma from '@/utils/db';

const prismaHandlers = async () => {
  console.log('prisma example');
  
  // await prisma.task.create({
  //   data: {
  //     content: 'wake up'
  //   }
  // })

  const allTasks = await prisma.task.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  })

  return allTasks;
}

const PrismaExamplePage = async () => {
  const tasks = await prismaHandlers();
  return (
    <div>
      <TaskList />
    </div>
  );
};

export default PrismaExamplePage;
