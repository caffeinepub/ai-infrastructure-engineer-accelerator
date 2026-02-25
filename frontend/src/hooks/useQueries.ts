import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { ApplicationForm } from '../backend';

export function useGetAllApplications() {
  const { actor, isFetching } = useActor();

  return useQuery<ApplicationForm[]>({
    queryKey: ['applications'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllApplications();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetApplication(id: bigint) {
  const { actor, isFetching } = useActor();

  return useQuery<ApplicationForm>({
    queryKey: ['application', id.toString()],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.getApplication(id);
    },
    enabled: !!actor && !isFetching && id !== undefined,
  });
}
