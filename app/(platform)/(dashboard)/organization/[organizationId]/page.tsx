import { create } from '@/actions/create-board';
import { Button } from '@/components/ui/button';
import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs';
import { Form } from './form';

const organizationPage = async () => {
  const boards = await db.board.findMany();

  return (
    <div className="flex flex-col space-y-4">
      <Form />
      <div className="space-y-2">
        {boards.map((board) => (
          <div key={board.id}>{board.title}</div>
        ))}
      </div>
    </div>
  );
};

export default organizationPage;
