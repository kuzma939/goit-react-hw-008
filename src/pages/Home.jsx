import { AuthItem } from '../components/AuthNav/AuthNav.styled';
import { Title, Paragraph, Info, InfoLink } from '../App.styled';
import { useAuth } from '../hooks/useAuth';

export const HomePage = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Title>Your Phonebook Application</Title>
      <Paragraph>
      Ever wondered, "What was the name of that person?"
       With our unified phone book, integrated with powerful keyword search,
        you'll never have to worry again. Find contacts 
      effortlessly, anytime, anywhere. Your phone book is always within reach.
       
      </Paragraph>
      {!isLoggedIn && (
        <Paragraph>
          To get started, please Sign up or Sign in. <AuthItem to={'/register'}>Sign up</AuthItem> or{' '}
          <AuthItem to={'/login'}>Sign in</AuthItem>
        
        </Paragraph>
      )}

      <Info>
      Created by{' '}
        <InfoLink
          href="https://www.linkedin.com/in/anja-kuzma-902774275/"
          target="_blank"
          rel="noreferrer"
        >
          Anja Kuzma
        </InfoLink>
      </Info>
    </>
  );
};
console.log(Info)
export default HomePage;