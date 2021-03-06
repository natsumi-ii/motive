import axios from '@/lib/axios';
import { useTasksOfDay, useTasksInYear } from '@/lib/api/tasks';
import { apiClient } from '@/lib/axios'

export const useHooks = () => {
  const { data } = useTasksOfDay();
  const { data: tasksInYear } = useTasksInYear();
  const onSubmit = async (values: any) => {
    console.log('values', values);
    const body = { ...values, point: 1, status: 'TODO', date: new Date() };
    console.log('body is', body);
    const res = await apiClient.post('/tasks', body);
    console.log('res is', res);
  };

  return { onSubmit, tasks: data, tasksInYear };
};
