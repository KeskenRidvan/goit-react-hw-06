import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';
import css from './ContactList.module.css';

function ContactList() {
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectNameFilter);

  const normalizedFilter = filterValue.toLowerCase().trim();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  if (visibleContacts.length === 0) {
    return <p className={css.empty}>Gosterilecek kisi bulunamadi.</p>;
  }

  return (
    <ul className={css.list}>
      {visibleContacts.map(contact => (
        <li key={contact.id} className={css.item}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
