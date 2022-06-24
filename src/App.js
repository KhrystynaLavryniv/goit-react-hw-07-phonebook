import ContactsForm from './components/ContactsForm/ContactsForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import { Container } from 'components/ContactsForm/ContactsForm.style';
import { useGetContactsQuery } from './redux/contactsSlice';
import { useState } from 'react';

export default function App() {
  const { data = [] } = useGetContactsQuery();
  const [filter, setFilter] = useState('');

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactsForm />
      <h2>Contacts</h2>
      {data.length > 0 ? (
        <Filter
          value={filter}
          onInputChange={e => setFilter(e.currentTarget.value)}
        />
      ) : (
        <p>Phonebook does not contain any saved contacts</p>
      )}
      <ContactList contacts={data} filter={filter} />
    </Container>
  );
}
