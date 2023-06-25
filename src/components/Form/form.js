import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormEl, LabelEl, InputContact, InputSubmit } from './Form.styled';
import { nanoid } from 'nanoid';

const ContactForm = ({ onSubmit }) => {
  const [name, setIsName] = useState('');
  const [number, setIsNumber] = useState('');

  const contact = {
    id: nanoid(),
    name: name,
    number: number,
  };

  const handleInputСhange = event => {
    const { name, value } = event.target;
    if (name === 'name') {
      setIsName(value);
    } else if (name === 'number') {
      setIsNumber(value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    onSubmit(contact);
    reset();
  };
  const reset = () => {
    setIsName('');
    setIsNumber('');
  };

  return (
    <FormEl onSubmit={handleSubmit}>
      <LabelEl>
        Name
        <InputContact
          value={name}
          onChange={handleInputСhange}
          type="text"
          name="name"
          pattern="^[A-Za-z\u0080-\uFFFF ']+$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </LabelEl>
      <LabelEl>
        Number
        <InputContact
          value={number}
          onChange={handleInputСhange}
          type="tel"
          name="number"
          pattern="^(\+?[0-9.\(\)\-\s]*)$"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </LabelEl>
      <InputSubmit type="submit"> Add contact</InputSubmit>
    </FormEl>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
