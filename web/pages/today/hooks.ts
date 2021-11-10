import axios from '@/lib/axios';
import { useTasksOfDay, useTasksInYear } from '@/lib/api/tasks';
import {useApiClient} from '@/lib/api/apiClient'

export const useHooks = () => {
  const { data } = useTasksOfDay();
  const { data: tasksInYear } = useTasksInYear();
  const onSubmit = async (values: any) => {
    console.log('values', values);
    const body = { ...values, point: 1, status: 'TODO', date: new Date() };
    console.log('body is', body);
    const res = await axios.post('/tasks', body);
    console.log('res is', res);
  };

  return { onSubmit, tasks: data, tasksInYear };
};
