import { getRandomLoadingText } from "@/utils/loadingBtnRandomizer";
import { Center, Spinner, Text } from "@chakra-ui/react";

function Loading() {
  const loadingSentence = getRandomLoadingText();

  return (
    <Center height="50vh" flexDirection="column">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="green.500"
        size="xl"
        label={loadingSentence}
      />
      <Text mt={4} fontFamily="Nunito">
        {loadingSentence}
      </Text>
    </Center>
  );
}

export default Loading;
