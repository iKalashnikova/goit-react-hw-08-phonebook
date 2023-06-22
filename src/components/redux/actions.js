import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContactsAPI, addContactAPI, deleteContactAPI } from '../API/contacts'; 

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const response = await fetchContactsAPI();
  return response; 
});

export const addContact = createAsyncThunk('contacts/addContact', async (contactData) => {
  const response = await addContactAPI(contactData); 
  return response; 
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId) => {
  await deleteContactAPI(contactId); 
  return contactId; 
});
