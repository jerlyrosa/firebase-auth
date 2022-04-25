import { Heading } from '@chakra-ui/layout';


function Home(): JSX.Element {

  return (

      <section>
        <Heading textAlign="center" fontSize={{ base: "2.2rem", sm: "2.4rem", md: "3rem" }}>
          Welcome, you are logged in
        </Heading>
      </section>
  );
}

export default Home;
