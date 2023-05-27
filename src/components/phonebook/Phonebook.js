import ContactForm from 'components/Contact/Contact';
import ContactList from 'components/ContactList/ContactList';
import { ContainerSettings, Title } from './Phonebook.styled';
import Filter from 'components/filter/Filter';

export const Phonebook = () => {
  return (
    <>
      <ContainerSettings>
        <div>
          <ContactForm />
          {/* <h2>Filter</h2> */}
          <Filter />
        </div>
        <div>
          <Title>Phonebook</Title>
        </div>

        <ContactList />
      </ContainerSettings>
    </>
  );
};