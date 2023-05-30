import ContactForm from 'components/Contact/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import { ContainerSettings } from '../phonebook/Phonebook.styled';
import Filter from 'components/filter/Filter';

export const Phonebook = () => {
  return (
    <>
      <ContainerSettings>
          <ContactForm />
          <Filter />
        <ContactList />
      </ContainerSettings>
    </>
  );
};
