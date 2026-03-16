import { create } from "zustand";

interface VinStore {
  lastVinResults: any[];
  variablesList: any[];
  selectedVariable: any;
  vinResults: any[];
  apiError: string;
  loading: boolean;

  addVinResult: (vinData: any) => void;
  setVariablesList: (list: any[]) => void;
  setSelectedVariable: (variable: any) => void;
  setApiError: (message: string) => void;
  clearSelectedVariable: () => void;
  setLoading: (value: boolean) => void;
}

export const useVinStore = create<VinStore>((set, get) => ({
  lastVinResults: [],
  variablesList: [],
  selectedVariable: null,
  vinResults: [],
  apiError: "",
  loading: false,
  // добавляем новый результат VIN
  addVinResult: (vinData) => {
    const current = get().lastVinResults;
    const newList = [vinData, ...current].slice(0, 3); // максимум 3
    set({ lastVinResults: newList, vinResults: vinData.Results, apiError: "" });
  },

  setVariablesList: (list) => set({ variablesList: list }),
  setSelectedVariable: (variable) => set({ selectedVariable: variable }),
  setApiError: (message) => set({ apiError: message }),
  clearSelectedVariable: () => set({ selectedVariable: null }),
  setLoading: (value) => set({ loading: value }),
}));
