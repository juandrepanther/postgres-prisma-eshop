import { create, SetState } from 'zustand'

interface State {
  counter: number
  increment: () => void
  decrement: () => void
}

export const useStore = create((set: SetState<State>) => ({
  counter: 0,
  increment: () => set((state) => ({ counter: state.counter + 1 })),
  decrement: () => set((state) => ({ counter: state.counter - 1 })),
}))
