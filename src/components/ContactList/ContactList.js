import { useEffect } from 'react';
import { ContainerItem, ContainerList } from './ContactList.styled';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/contacts/operations';
import { selectVisibleContacts } from 'redux/contacts/selectors';

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();
 

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onDelete = id => dispatch(deleteContact(id));

  return (
    <div>
      <h2>Contacts</h2>
      <ContainerList>
        {contacts &&
          contacts.map(({ id, name, number }) => (
            <ContainerItem key={id}>
              {name}: {number}
              <AiOutlineCloseCircle onClick={() => onDelete(id)} />
            </ContainerItem>
          ))}
      </ContainerList>
    </div>
  );
};

export default ContactList;