import { Heading } from '@chakra-ui/layout';
import styled from '@emotion/styled';
import { useMethodAuth } from '../hooks/useMethodAuth';
interface Props{
  email:string | undefined

} 

const  Home = ({email}:Props): JSX.Element => {
  const {AuthSignOut} =useMethodAuth()

  return (

      <Section>
        <Heading textAlign="center" fontSize={{ base: "2.2rem", sm: "2.4rem", md: "3rem" }}>
          Welcome, you are logged in {email}
        </Heading>

        <CustomButtom onClick={AuthSignOut}> 
        
         <Heading  fontSize={{ base: "2.2rem", sm: "2.4rem", md: "3rem" }}>
         Sign Out

        </Heading>
         
          </CustomButtom>
        
      </Section>
  );
}

export default Home;


const Section = styled.section`
text-align: center;

`

const CustomButtom = styled.button`
  border: none;
  background: inherit;
  cursor: pointer;
  color: #9c27b0;
  &:hover {
   color: #3f51b5;
  }
`;
