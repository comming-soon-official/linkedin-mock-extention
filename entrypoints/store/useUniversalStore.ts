import { createRef } from "react";
import { create } from "zustand";
import React from "react";
export const useUniversalStore = create<{
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
  dialogRef: React.RefObject<HTMLDivElement>;
  activeInputId?: string;
  setActiveInputId: (activeInputId: string | undefined) => void;
}>((set) => ({
  isModalOpen: false,
  setIsModalOpen: (isModalOpen: boolean) => set({ isModalOpen }),
  dialogRef: createRef<HTMLDivElement>(),
  setActiveInputId(activeInputId) {
    set({ activeInputId });
  },
}));
