import { create } from 'zustand';

type UserStoreProps = {
  urlImage: string;
};
interface UserStoreActions {
  setUrlImage: (newUrlImage: string) => void;
}
type UserStore = UserStoreProps & {
  actions: UserStoreActions;
};

const initialState: UserStoreProps = {
  urlImage: '',
};

export const useStore = create<UserStore>((set) => ({
  ...initialState,
  actions: {
    setUrlImage: (newUrlImage: string) => set({ urlImage: newUrlImage }),
  },
}));
