import {
  Container,
  Stack,
  Text,
  ButtonGroup,
  IconButton,
  Center,
  VStack,
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import BuyMeACoffeeButton from "./buy-me-a-coffee-btn";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Container
      as="footer"
      role="contentinfo"
      maxW="4xl"
      marginTop={10}
      fontFamily="Nunito"
    >
      <VStack
        align="center"
        spacing={{ base: "2", md: "4" }}
        textAlign="center"
        fontSize="xs"
      >
        <Text>&copy; {currentYear} Marta B.</Text>
        <Text marginTop={2}>
          Veggie Bot Disclaimer: Please consider the information provided by
          Veggie Bot as a helpful tool, but always verify the vegan status of
          ingredients through reliable sources. It&apos;s recommended to consult
          with a professional for dietary concerns. Veggie Bot assumes no
          liability for decisions or actions based on the provided information.
          Use your own judgment and discretion when making veganism and dietary
          choices.
        </Text>

        <Stack justify="center" direction="row" align="center">
          <ButtonGroup>
            <IconButton
              as="a"
              href="https://www.linkedin.com/in/marta-bento/"
              aria-label="Open Linkedin page"
              icon={<FaLinkedin />}
              variant="ghost"
            />
            <IconButton
              as="a"
              href="https://github.com/MartaBento/veggie-bot"
              aria-label="Open Github page"
              icon={<FaGithub />}
              variant="ghost"
            />
          </ButtonGroup>
        </Stack>

        <Center mb={6}>
          <BuyMeACoffeeButton />
        </Center>
      </VStack>
    </Container>
  );
}

export default Footer;
