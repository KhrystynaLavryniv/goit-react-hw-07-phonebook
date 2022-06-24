import { FilterInput } from './Filter.style';
import { Label } from '../ContactsForm/ContactsForm.style';

const Filter = ({ value, onInputChange }) => {
  return (
    <Label>
      Find contacts by name
      <FilterInput
        type="text"
        name="filter"
        value={value}
        autoComplete="off"
        onChange={onInputChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />
    </Label>
  );
};

export default Filter;
