import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/FormRegister/RegisterForm';

export default function RegisterPage() {
  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </div>
  );
}