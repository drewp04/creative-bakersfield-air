// Helper to safely open HCP modal once widget is ready
export const openHCPModal = () => {
  if (window.HCPWidget?.openModal) {
    window.HCPWidget.openModal();
  } else {
    // Widget not ready yet — wait and retry
    const interval = setInterval(() => {
      if (window.HCPWidget?.openModal) {
        clearInterval(interval);
        window.HCPWidget.openModal();
      }
    }, 200);
    // Stop trying after 5 seconds
    setTimeout(() => clearInterval(interval), 5000);
  }
};
