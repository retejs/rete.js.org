const { serviceWorker } = navigator;

if (serviceWorker) {
  window.addEventListener('load', async () => {
    await serviceWorker.register('/service-worker.js');
  });
}
