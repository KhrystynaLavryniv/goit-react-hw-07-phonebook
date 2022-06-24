import { Item, ItemBtn, Contacts } from './ContactList.style';
import { useDeleteContactsMutation } from '../../redux/contactsSlice';

const ContactList = ({ contacts, filter }) => {
  const [deleteContacts, { isLoading: isDeleting }] =
    useDeleteContactsMutation();

  const filterVisibleContacts = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  return (
    <>
      <Contacts>
        {filterVisibleContacts().map(({ id, name, phone }) => (
          <Item key={id}>
            {name}: {phone}
            <ItemBtn
              type="button"
              onClick={() => deleteContacts(id)}
              disabled={isDeleting}
            >
              Delete
            </ItemBtn>
          </Item>
        ))}
      </Contacts>
    </>
  );
};

export default ContactList;
