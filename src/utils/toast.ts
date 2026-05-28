export const showToast = (message = "⏱️ Coming Soon to LEKTO Beta!") => {
  window.dispatchEvent(new CustomEvent('show-toast', { detail: message }));
};
