"use client";

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
    <Container as="footer" role="contentinfo" maxW="4xl">
      <Stack
        spacing={{ base: "2", md: "4" }}
        textAlign="center"
        fontSize="x-small"
      >
        <Text>&copy; {new Date().getFullYear()} Marta B.</Text>
        <Text marginTop={2}>
          Veggie Bot Disclaimer: Use the information provided by Veggie Bot as a
          helpful tool, but always verify ingredient vegan status through
          reliable sources. Consult with a professional for dietary concerns.
          Veggie Bot is not liable for decisions or actions based on the
          provided information. Use your own judgment and discretion for
          veganism and dietary choices.
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
