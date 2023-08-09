import create from 'zustand';

const useInfoStore = create((set) => ({
  state: {
    info: "default value"
  },
  setState: (newState) => set(() => ({ state: newState })),
}));

export { useInfoStore };    
