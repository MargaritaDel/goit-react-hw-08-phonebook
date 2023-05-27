import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Phonebook } from 'components/phonebook/Phonebook';
import { fetchContacts  } from 'redux/contacts/operations';
import { selectIsLoading} from 'redux/contacts/selectors';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts ());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <div>{isLoading && 'Request in progress...'}</div>
      <Phonebook/>
    </>
  );
}
