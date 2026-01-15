export function listenConnectionStatus(callback: (online: boolean) => void) {
  const update = () => callback(navigator.onLine);

  window.addEventListener("online", update);
  window.addEventListener("offline", update);

  // initial
  update();

  return () => {
    window.removeEventListener("online", update);
    window.removeEventListener("offline", update);
  };
}
