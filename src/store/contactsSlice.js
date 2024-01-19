import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContacts as fetchContactsApi, addContact as addContactApi, deleteContact as deleteContactApi } from '../api/AuthAPI';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
  const token = thunkAPI.getState().auth.token;
  const response = await fetchContactsApi(token);
  return response;
});

export const addContact = createAsyncThunk('contacts/addContact', async (contactData, thunkAPI) => {
  const token = thunkAPI.getState().auth.token;
  const response = await addContactApi(contactData, token);
  return response;
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId, thunkAPI) => {
  const token = thunkAPI.getState().auth.token;
  await deleteContactApi(contactId, token);
  return contactId;
});

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter((contact) => contact.id !== action.payload);
      });
  },
});

export default contactsSlice.reducer;
