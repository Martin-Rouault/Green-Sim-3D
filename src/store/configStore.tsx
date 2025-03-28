import { create } from "zustand";

interface DefaultConfig {
    currentStep: number;
    theme: string;
    structure: string;
    height: number;
    width: number;

    setTheme: (theme: string) => void;
    setStructure: (structure: string) => void;
    
    setHeight: (height: number) => void;
    setWidth: (width: number) => void;

    nextStep: () => void;
    previousStep: () => void;
}

const useConfigStore = create<DefaultConfig>((set) => ({
    currentStep: 1,
    theme: "jungle",
    structure: "bois",
    height: 1,
    width: 1,

    setTheme: (theme: string) => set(() => ({ theme })),
    setStructure: (structure: string) => set(() => ({ structure })),
    
    setHeight: (newHeight: number) => set(() => ({ height: newHeight })),
    setWidth: (newWidth: number) => set(() => ({ width: newWidth })),

    nextStep: () =>
        set((state) => {
            if (state.currentStep < 4) {
                return { currentStep: state.currentStep + 1 };
            }
            return {};
        }),

    previousStep: () =>
        set((state) => {
            if (state.currentStep > 1) {
                return { currentStep: state.currentStep - 1 };
            }
            return {};
        }),

}));

export default useConfigStore;
