const { default: Toastify } = require("../_components/toast");

export const showToast = (type, message) => {
  Toastify.show({ type, message, autoClose: 3000 });
};
