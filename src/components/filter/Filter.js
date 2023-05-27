import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import { FilterContainer, FilterInput, FilterTitle } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    console.log(e.target.value);
    dispatch(setFilter(e.target.value));
  };

  return (
    <FilterContainer>
      <FilterTitle>Find contacts by name</FilterTitle>
      <FilterInput onChange={handleFilterChange} type="search" name="filter" />
    </FilterContainer>
  );
};

export default Filter;
