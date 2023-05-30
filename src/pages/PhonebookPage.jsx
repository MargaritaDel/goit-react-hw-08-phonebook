import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Phonebook } from 'components/phonebook/Phonebook';
import { selectIsLoading } from 'redux/contacts/selectors';

export default function PhonebookPage() {
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <div>{isLoading && 'Request in progress...'}</div>
      <Phonebook />
    </>
  );
}
