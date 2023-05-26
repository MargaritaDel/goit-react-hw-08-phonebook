import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import { FilterContainer } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    console.log(e.target.value);
    dispatch(setFilter(e.target.value));
  };

  return (
    <FilterContainer>
      <p>Find contacts by name</p>
      <input onChange={handleFilterChange} type="search" name="filter" />
    </FilterContainer>
  );
};

export default Filter;
