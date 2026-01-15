import { defineStore } from "pinia";

interface OfflineState {
  isOnline: boolean;
}

export const useOfflineStore = defineStore("offline", {
  state: (): OfflineState => ({
    isOnline: navigator.onLine,
  }),
  actions: {
    setOnline(status: boolean) {
      this.isOnline = status;
    },
    initListener() {
      const update = () => {
        this.isOnline = navigator.onLine;
      };

      window.addEventListener("online", update);
      window.addEventListener("offline", update);
    },
  },
});
