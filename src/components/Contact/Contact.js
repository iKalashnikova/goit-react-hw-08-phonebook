import React from "react"
import { ContactEl, ContactItem, ContactName, DeleteBtn } from './Contact.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from "../redux/actions";


export const ContactList = ({contacts}) => {
  const dispatch = useDispatch();
  
    return (<div>
            <ContactEl>{contacts.map(({ id, name, number }) => (
              <ContactItem key={id}>
                <ContactName>
                  {name}: {number}
                </ContactName>
                <DeleteBtn type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </DeleteBtn>
      </ContactItem>
    ))}</ContactEl>
          </div>)
}