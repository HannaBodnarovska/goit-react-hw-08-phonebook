import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactItem from '../ContactItem/ContactItem';
import { fetchContacts } from '../../store/contactsSlice';
import styles from './ContactList.module.css';

const ContactList = () => {
const dispatch = useDispatch();
const { items, isLoading, error } = useSelector((state) => state.contacts);

useEffect(() => {
dispatch(fetchContacts());
}, [dispatch]);

if (isLoading) return <p>Loading...</p>;
if (error) return <p>Error loading contacts: {error}</p>;

return (
<ul className={styles.list}>
{items.map((contact) => (
<ContactItem key={contact.id} contact={contact} />
))}
</ul>
);
};

export default ContactList;