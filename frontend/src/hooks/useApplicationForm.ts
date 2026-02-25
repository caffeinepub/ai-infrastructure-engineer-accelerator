import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { CareerStatus, Program } from '../backend';

export function useApplicationForm() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async ({
      program,
      name,
      email,
      careerStatus,
      motivationStatement,
      preferredStartDate,
    }: {
      program: Program;
      name: string;
      email: string;
      careerStatus: CareerStatus;
      motivationStatement: string;
      preferredStartDate: string;
    }) => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.submitApplication(
        program,
        name,
        email,
        careerStatus,
        motivationStatement,
        preferredStartDate
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['applications'] });
    },
  });

  return {
    submitApplication: (
      program: Program,
      name: string,
      email: string,
      careerStatus: CareerStatus,
      motivationStatement: string,
      preferredStartDate: string
    ) => mutation.mutateAsync({ program, name, email, careerStatus, motivationStatement, preferredStartDate }),
    isSubmitting: mutation.isPending,
    error: mutation.error,
  };
}
