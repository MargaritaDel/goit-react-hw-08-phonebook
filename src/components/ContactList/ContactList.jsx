import { useState, useEffect } from 'react';
import { ContainerItem, ContainerList, Title, DeleteButton  } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/contacts/operations';
import { selectVisibleContacts } from 'redux/contacts/selectors';

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();
  const [deletingContactId, setDeletingContactId] = useState(null);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onDelete = id => {
    setDeletingContactId(id);
    dispatch(deleteContact(id));
  };

  return (
    <div>
      <Title>Contacts</Title>
      <ContainerList>
        {contacts &&
          contacts.map(({ id, name, number }) => (
            <ContainerItem key={id}>
            {name}: {number}
            {deletingContactId === id ? (
              <span>Deleting...</span>
            ) : (
              <DeleteButton
                onClick={() => onDelete(id)}
                type="button"
              >
                Delete contact
              </DeleteButton>
            )}
          </ContainerItem>
          ))}
      </ContainerList>
    </div>
  );
};

export default ContactList;
