import axios from 'axios';

const API_URL = 'https://648843ad0e2469c038fd5d77.mockapi.io/Contacts';

export const fetchContactsAPI = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch contacts');
  }
};

export const addContactAPI = async (contactData) => {
  try {
    const response = await axios.post(API_URL, contactData);
    return response.data
  } catch (error) {
    throw new Error('Failed to add contact');
  }
};

export const deleteContactAPI = async (contactId) => {
  try {
    const response = await axios.delete(`${API_URL}/${contactId}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to delete contact');
  }
};
