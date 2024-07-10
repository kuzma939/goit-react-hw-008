import { useDispatch, useSelector } from 'react-redux';
import { selectContactFilter } from '../../redux/filters/selectors';
import { setContactFilter } from '../../redux/filters/slice';
import { Wrapper, Label, Input } from './Filter.styled';

 const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectContactFilter);

  return (
    <Wrapper>
      <Label htmlFor="filter">Find contact by name</Label>
      <Input
        name="filter"
        type="text"
        id="filter"
        value={filter}
        placeholder={' '}
        onChange={e => dispatch(setContactFilter(e.currentTarget.value))}
      />
    </Wrapper>
  );
};
export default Filter