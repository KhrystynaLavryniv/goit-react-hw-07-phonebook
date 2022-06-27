import { FilterInput } from './Filter.style';
import { Label } from '../ContactsForm/ContactsForm.style';
import { filterContacts } from '../../redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';

const Filter = () => {
  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const handlerFilterChange = event => {
    dispatch(filterContacts(event.currentTarget.value));
  };

  return (
    <Label>
      Find contacts by name
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        autoComplete="off"
        onChange={handlerFilterChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />
    </Label>
  );
};

export default Filter;
