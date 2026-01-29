import { Program } from '@/types/program';
import { create } from 'zustand';

type programState = {
  programs: Program[];
  selectedProgram: Program | null;
  error?: string | null;
  setPrograms: (programs: Program[]) => void;
  selectProgram: (program: Program) => void;
  clearSelectedProgram: () => void;
  clearErrors: () => void;
};

export const useProgramStore = create<programState>((set) => ({
  programs: [],
  selectedProgram: null,
  error: null,
  setPrograms: (programs: Program[]) => set({ programs }),
  selectProgram: (program: Program) => set({ selectedProgram: program }),
  clearSelectedProgram: () => set({ selectedProgram: null }),
  clearErrors: () => set({ error: null }),
}));

/*fetchPrograms: async () => {
    set({ loading: true });
    try {
      const programs = await getPrograms();
      set({ programs, loading: false });
      return programs;
    } catch (error) {
      set({
        loading: false,
        error:
          error instanceof Error ? error.message : 'Failed to fetch programs',
      });
    }
  },
  fetchProgram: async (id: string) => {
    set({ loading: true });
    try {
      const program = await getProgram(id);
      set({ selectedProgram: program, loading: false });
      return program;
    } catch (error) {
      set({
        loading: false,
        error:
          error instanceof Error ? error.message : 'Failed to fetch program',
      });
    }
  },*/
