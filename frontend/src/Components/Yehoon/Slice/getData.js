// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit/";
// import axios from "axios";

// const productAll = createAsyncThunk("getData/productAll", async () => {
//   try {
//     return await axios.get("http://localhost:5000/all").then(async (value) => {
//       return await value.data;
//     });
//   } catch (e) {
//     console.log(e);
//   }
// });

// const getData = createSlice({
//   name: "getData",
//   initialState: { value: [], status: "wait" },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(productAll.pending, (state, action) => {
//       state.status = "loading";
//     });
//     builder.addCase(productAll.fulfilled, (state, action) => {
//       state.value.push(action.payload);
//       state.status = "fulfilled";
//     });
//     builder.addCase(productAll.rejected, (state, action) => {
//       state.status = "rejected";
//     });
//   },
// });

// export { productAll };
// export default getData.reducer;
