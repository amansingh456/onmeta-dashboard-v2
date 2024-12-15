const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  merchantInfo: {},
};

const stateSlice = createSlice({
  name: "stateSlice",
  initialState,
  reducers: {
    setMerchantInfo: (state, action) => {
      state.merchantInfo = { ...action.payload };
    },
  },
});

export const { setMerchantInfo } = stateSlice.actions;
export default stateSlice.reducer;
