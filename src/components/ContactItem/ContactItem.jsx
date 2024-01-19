import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../store/contactsSlice';
import styles from './ContactItem.module.css';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li className={styles.item}>
      <span>{contact.name}: {contact.phone}</span>
      <button className={styles.button} onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default ContactItem;