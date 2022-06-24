import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Form, AddBtn, Label } from './ContactsForm.style';
import {
  useGetContactsQuery,
  useAddContactsMutation,
} from '../../redux/contactsSlice';

export default function ContactsForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { data: contacts } = useGetContactsQuery();
  const [addContact] = useAddContactsMutation();

  const handlerInputChange = e => {
    switch (e.target.name) {
      case 'name':
        return setName(e.target.value);
      case 'number':
        return setNumber(e.target.value);
      default:
        throw new Error();
    }
  };

  const handlerSubmitUser = e => {
    e.preventDefault();
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    handlerSubmitUserForm(contact);
    reset();
  };

  const handlerSubmitUserForm = contact => {
    contacts.some(
      contactItem =>
        contactItem.name.toLocaleLowerCase() ===
        contact.name.toLocaleLowerCase()
    )
      ? alert(`${contact.name} is already in contacts`)
      : addContact({ name, phone: number });
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handlerSubmitUser}>
      <Label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          autoComplete="off"
          onChange={handlerInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Number
        <input
          type="tel"
          name="number"
          autoComplete="off"
          value={number}
          onChange={handlerInputChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <AddBtn type="submit">Add contact</AddBtn>
    </Form>
  );
}
