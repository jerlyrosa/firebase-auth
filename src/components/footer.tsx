import {
    IconGithub,
    IconInstagram,
    IconLinkedin,
    IconTwitter,
} from "./icons/icons";
import styled from '@emotion/styled'
import {Flex} from '@chakra-ui/layout';


const FooterUI = () => {
    return (
      <Footer
        as="footer"
        width="100%"
        justifyContent="center"
        textAlign="center"
        boxShadow="rgb(0 0 0 / 20%) 0px 2px 4px -1px, rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;"
      >
        <Container>
          <SocialBox>
            <span>
              <a
                href="https://www.instagram.com/jerly_hdt/?hl=es"
                aria-label="instagram"
              >
                <IconInstagram />
              </a>
            </span>
            <span>
              <a href="https://github.com/sr-jerly" aria-label="github">
                <IconGithub />
              </a>
            </span>
            <span>
              <a
                href="https://www.linkedin.com/in/jerlydelarosa/"
                aria-label="linkedin"
              >
                <IconLinkedin />
              </a>
            </span>
            <span>
              <a href="https://twitter.com/sr_jerly" aria-label="twitter">
                <IconTwitter />
              </a>
            </span>
          </SocialBox>
          <Line />
          <Copy>
            &copy; Copyright 2021{" "}
            <a href="https://www.linkedin.com/in/jerlydelarosa/">
              &copy; Jerly De La Rosa
            </a>
          </Copy>
        </Container>
      </Footer>
    );
};

export default FooterUI;
const Footer = styled(Flex)`

    

`
const Container = styled.div`
  /* background-color:#f5f5f5; */
  color: white;
  padding: 2rem 1rem;
  color: #4a4a4a;
  width:100%;

`;

const SocialBox = styled.span`
  max-height: 8rem;
  display: flex;
  align-content: center;
  justify-content: center;
  gap: 0.7rem;
`;

const Line = styled.hr`
  border: 0;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgba(17, 12, 12, 0),
    rgb(45 43 43 / 75%),
    rgba(0, 0, 0, 0)
  );
`;

const Copy  = styled.div`
a{
    text-decoration: none;
    color: cornflowerblue;
}
`