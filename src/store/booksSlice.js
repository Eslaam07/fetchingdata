import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getBooks = createAsyncThunk(
  "books/getBooks",
  async function (_, thunkAPI) {
    const { rejectWithValue } = thunkAPI;
    console.log(thunkAPI);
    try {
      const response = await fetch(
        "https://clammy-succulent-derby.glitch.me/books"
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const insertBooks = createAsyncThunk(
  "books/insertBooks",
  async function (receivedBook, thunkAPI) {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await fetch(
        "https://clammy-succulent-derby.glitch.me/books",
        {
          method: "POST",
          body: JSON.stringify(receivedBook),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteBooks = createAsyncThunk(
  "books/deleteBooks",
  async function (receivedBook, thunkAPI) {
    const { rejectWithValue } = thunkAPI;
    try {
      await fetch(
        `https://clammy-succulent-derby.glitch.me/books/${receivedBook.id}`,
        { method: "DELETE" }
      );
      // const data = await response.json();
      return receivedBook;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const booksSlice = createSlice({
  name: "books",
  initialState: { books: [], isLoading: false, error: false },
  reducers: {},
  extraReducers: {
    // Get Books
    [getBooks.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getBooks.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
    },
    [getBooks.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // Insert Books
    [insertBooks.pending]: (state, action) => {
      state.isLoading = true;
    },
    [insertBooks.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.books.push(action.payload);
    },
    [insertBooks.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // delete Books
    [deleteBooks.pending]: (state, action) => {
      state.isLoading = true;
    },
    [deleteBooks.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.books = state.books.filter((book) => book.id !== action.payload.id);
    },
    [deleteBooks.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default booksSlice.reducer;
