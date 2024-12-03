export const handlePending = (state) => {
  state.isLoading = true;
  state.isError = null;
};

export const handleFullfilled = (state) => {
  state.isLoading = false;
};

export const handleRejected = (state, action) => {
  state.isLoading = false;
  state.isError = action?.payload?.message || action?.error?.message;
};
