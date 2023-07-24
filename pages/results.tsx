import { VStack, Center } from "@chakra-ui/react";
import BackButton from "@/components/back-btn";
import { useRouter } from "next/router";
import { FetchDataResult } from "@/types/apiResponse";
import Head from "next/head";
import { metadata } from "@/constants/metadata";
import ResultsHeading from "@/components/results-page/results-heading";
import IngredientInfoList from "@/components/results-page/ingredient-info-list";
import ErrorMessage from "@/components/results-page/error";
import { fetchData } from "@/utils/fetchDataOpenAI";
import { useQuery, useQueryClient } from "react-query";
import VeganStatusBadge from "@/components/vegan-status-badge";
import Loading from "@/components/results-page/loading";

export default function ResultsPage() {
  const router = useRouter();
  const queryClient = useQueryClient();

  const userIngredients =
    (router.query.ingredients as string)?.split(",") || [];

  const { data, error, isFetched } = useQuery<FetchDataResult | null>(
    ["ingredients"],
    () => fetchData(userIngredients),
    {
      initialData: () => {
        const storedData = queryClient.getQueryData<FetchDataResult>([
          "ingredients",
        ]);
        return storedData || null;
      },
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  );

  const handleClickBackBtn = () => {
    router.push("/");
  };

  return (
    <>
      <Head>
        <title>{metadata.title.template.replace("%s", "Results")}</title>
        <meta name="description" content={metadata.description} />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      {error && <ErrorMessage />}
      {!error && (
        <VStack align="center" spacing={3}>
          <Center marginTop="6">
            <VStack>
              <BackButton onClick={handleClickBackBtn} />
              <ResultsHeading />
              {data && (
                <VeganStatusBadge productIsVegan={data.isIngredientVegan} />
              )}
            </VStack>
          </Center>
          {!isFetched && <Loading />}
          {isFetched && data && (
            <IngredientInfoList ingredientInfo={data.ingredientInfo} />
          )}
        </VStack>
      )}
    </>
  );
}
