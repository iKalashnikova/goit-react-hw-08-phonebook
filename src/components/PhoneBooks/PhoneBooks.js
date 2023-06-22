import React, { useEffect } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import ContactForm from '../Form/form';
import { ContactList } from '../Contact/Contact';
import { Filter } from '../Filter/Filter';
import { Title, GridContainer } from './PhoneBooks.styled';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, fetchContacts} from '../redux/actions';
import {filterContact} from '../redux/slice'

const PhoneBooks = () => {

  const dispatch = useDispatch();
  const contacts = useSelector(state => state.friend.contacts.items);
  const filter = useSelector(state => state.friend.filter);


  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])


  const handleAddContact = newContact => {
    console.log(newContact);
    const includedContact = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (includedContact) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      const contact = {
        id: nanoid(),
        name: newContact.name,
        number: newContact.number,
      };
      dispatch(addContact(contact))

    }
  };


  const handleChangeFilter = event => {
    dispatch(filterContact(event.target.value));
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts
    .filter(contact => contact.name && contact.name.toLowerCase().includes(normalizedFilter))
    
  };

  const visibleContact = getVisibleContacts();
  console.log(visibleContact);

  return (
    <GridContainer
      style={{
      //   height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101',
      }}
    >
      <div>
        <Title>Phonebook</Title>

        <ContactForm
         onSubmit={data => handleAddContact(data)}
         />

        <Title>Contacts</Title>

        <Filter value={filter} onChange={handleChangeFilter} />
        <ContactList
          contacts={visibleContact}
        />
      </div>
    </GridContainer>
  );
};

PhoneBooks.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string,
};

export default PhoneBooks;
