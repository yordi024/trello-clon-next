'use client';

import { Button } from '@/components/ui/button';
import { useFormState } from 'react-dom';
import { FormInput } from './form-input';
import { createBoard } from '@/actions/create-board';
import { useAction } from '@/hooks/use-action';

export const Form = () => {
  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const onSubmit = (FormData: FormData) => {
    const title = FormData.get('title') as string;

    execute({ title });
  };

  return (
    <form action={onSubmit}>
      <div className="flex flex-col space-y-2">
        <FormInput errors={fieldErrors} />
      </div>
      <Button>Submit</Button>
    </form>
  );
};
