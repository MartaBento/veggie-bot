import {
  Container,
  Stack,
  Text,
  ButtonGroup,
  IconButton,
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <Container as="footer" role="contentinfo" maxW="4xl" marginTop={10}>
      <Stack spacing={{ base: "2", md: "4" }} textAlign="center" fontSize="xs">
        <Text>&copy; {new Date().getFullYear()} Marta B.</Text>
        <Text marginTop={2}>
          Veggie Bot Disclaimer: Please consider the information provided by
          Veggie Bot as a helpful tool, but always verify the vegan status of
          ingredients through reliable sources. It&apos;s recommended to consult
          with a professional for dietary concerns. Veggie Bot assumes no
          liability for decisions or actions based on the provided information.
          Use your own judgment and discretion when making veganism and dietary
          choices.
        </Text>
      </Stack>
      <Stack justify="center" direction="row" align="center" marginTop={6}>
        <ButtonGroup>
          <IconButton
            as="a"
            href="https://www.linkedin.com/in/marta-bento/"
            aria-label="Open Linkedin page"
            icon={<FaLinkedin />}
            variant="unstyled"
          />
          <IconButton
            as="a"
            href="https://github.com/MartaBento/veggie-bot"
            aria-label="Open Github page"
            icon={<FaGithub />}
            variant="unstyled"
          />
        </ButtonGroup>
      </Stack>
    </Container>
  );
}

export default Footer;
