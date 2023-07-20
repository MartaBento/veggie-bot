import { VStack, Center } from "@chakra-ui/react";
import BackButton from "@/components/back-btn";
import { useRouter } from "next/router";
import { IngredientInfo } from "@/types/apiResponse";
import { responseParse } from "@/utils/responseParser";
import { isProductVegan } from "@/utils/veganAnalyser";
import { GetServerSidePropsContext } from "next";
import { apiURL } from "@/constants/url";
import VeganStatusBadge from "@/components/vegan-status-badge";
import Head from "next/head";
import { metadata } from "@/constants/metadata";
import ResultsHeading from "@/components/results-page/results-heading";
import IngredientInfoList from "@/components/results-page/ingredient-info-list";
import ErrorMessage from "@/components/results-page/error";

type ResultsPageProps = {
  ingredientInfo: IngredientInfo[];
  productIsVegan: boolean | null;
  errorMessage: string | null;
};

export default function ResultsPage({
  ingredientInfo,
  productIsVegan,
  errorMessage,
}: ResultsPageProps) {
  const router = useRouter();

  const handleClickBackBtn = () => {
    router.push("/");
  };

  return (
    <>
      <Head>
        <title>{metadata.title.template.replace("%s", "Results")}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href={metadata.icons.icon} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={metadata.icons.shortcut}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={metadata.icons.shortcut}
        />
      </Head>
      {errorMessage && <ErrorMessage />}
      {!errorMessage && (
        <VStack align="center" spacing={3}>
          <Center marginTop="6">
            <VStack>
              <BackButton onClick={handleClickBackBtn} />
              <ResultsHeading />
            </VStack>
          </Center>
          <VeganStatusBadge productIsVegan={productIsVegan} />
          <IngredientInfoList ingredientInfo={ingredientInfo} />
        </VStack>
      )}
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { query } = context;
  const { ingredients } = query;

  try {
    const apiKey = process.env.NEXT_PUBLIC_OPENAI_KEY;

    const requestBody = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are a vegan ingredient checker. If the user inputs a list of ingredients that are in a different language than English, please find a way to translate the name of the ingredient in the 'reason' object, but in a natural way. Please provide the vegan status of each ingredient separately, in JSON format, like this: [{ ingredient: the ingredient name, vegan: true/false, reason: 'reason for being vegan or not here, with a detailed description' }]",
        },
        {
          role: "user",
          content: `Ingredients: ${ingredients}`,
        },
      ],
      temperature: 0.2,
    };

    const response = await fetch(apiURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(requestBody),
    });

    if (response.ok) {
      const data = await response.json();
      const ingredientInfo = responseParse(data);
      const productIsVegan = !ingredientInfo
        ? null
        : isProductVegan(ingredientInfo);

      return {
        props: {
          ingredientInfo,
          productIsVegan,
          errorMessage: null,
        },
      };
    } else {
      return {
        props: {
          ingredientInfo: [],
          productIsVegan: null,
          errorMessage: "An error occurred while processing your request.",
        },
      };
    }
  } catch (error) {
    return {
      props: {
        ingredientInfo: [],
        productIsVegan: null,
        errorMessage: `An error occurred while processing your request. 
        ${error}`,
      },
    };
  }
}
