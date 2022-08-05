import create from 'zustand';
import { persist, devtools } from 'zustand/middleware';

// define the store
const useGlobalStore = create(
  persist(
    devtools(
      (set) => ({
        user: null,
        setUser: (user) => set((_) => ({ user })),
      }),
      {
        name: 'capstone-project',
      }
    )
  )
);

export default useGlobalStore;
