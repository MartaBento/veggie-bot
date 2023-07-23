import { VStack, Center } from "@chakra-ui/react";
import BackButton from "@/components/back-btn";
import { useRouter } from "next/router";
import { IngredientInfo } from "@/types/apiResponse";
import { responseParse } from "@/utils/responseParser";
import { isProductVegan } from "@/utils/veganAnalyser";
import { apiURL } from "@/constants/url";
import VeganStatusBadge from "@/components/vegan-status-badge";
import Head from "next/head";
import { metadata } from "@/constants/metadata";
import ResultsHeading from "@/components/results-page/results-heading";
import IngredientInfoList from "@/components/results-page/ingredient-info-list";
import ErrorMessage from "@/components/results-page/error";
import { fetchData } from "@/utils/fetchDataOpenAI";
import { useQuery, useQueryClient } from "react-query";
import { useEffect, useMemo, useState } from "react";

const BATCH_SIZE = 5; // Number of ingredients per batch

export default function ResultsPage() {
  const router = useRouter();
  const queryClient = useQueryClient();

  const userIngredients = useMemo(
    () => (router.query.ingredients as string)?.split(",") || [],
    [router.query.ingredients]
  );
  const [batchIndex, setBatchIndex] = useState(0);

  const batch = userIngredients.slice(
    batchIndex * BATCH_SIZE,
    (batchIndex + 1) * BATCH_SIZE
  );

  const { data, error, isPreviousData } = useQuery({
    queryKey: ["ingredients", batchIndex],
    queryFn: () => fetchData(batch),
    initialData: () => {
      const storedData = queryClient.getQueryData<IngredientInfo[]>([
        "ingredients",
        batchIndex,
      ]);
      return storedData || null;
    },
    keepPreviousData: true,
  });

  const handleClickBackBtn = () => {
    router.push("/");
  };

  const handleClickNextBtn = () => {
    if ((batchIndex + 1) * BATCH_SIZE < userIngredients.length) {
      setBatchIndex(batchIndex + 1);
    } else {
      console.log("All ingredients fetched");
    }
  };

  const handleClickPreviousBtn = () => {
    if (batchIndex > 0) {
      setBatchIndex(batchIndex - 1);
    } else {
      console.log("Already at the first batch");
    }
  };

  useEffect(() => {
    // Prefetch the next page only if it's not previous data
    if (!isPreviousData && data?.hasMore) {
      queryClient.prefetchQuery({
        queryKey: ["ingredients", batchIndex + 1],
        queryFn: () =>
          fetchData(
            userIngredients.slice(
              (batchIndex + 1) * BATCH_SIZE,
              (batchIndex + 2) * BATCH_SIZE
            )
          ),
      });
    }
  }, [isPreviousData, data, queryClient, userIngredients, batchIndex]);

  return (
    <>
      <Head>
        <title>{metadata.title.template.replace("%s", "Results")}</title>
        <meta name="description" content={metadata.description} />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      {error && <ErrorMessage />}
      {batch}
      {!error && (
        <VStack align="center" spacing={3}>
          <Center marginTop="6">
            <VStack>
              <BackButton onClick={handleClickBackBtn} />
              <ResultsHeading />
            </VStack>
          </Center>
          <button
            onClick={handleClickNextBtn}
            disabled={(batchIndex + 1) * BATCH_SIZE >= userIngredients.length}
          >
            Next
          </button>
          <button onClick={handleClickPreviousBtn} disabled={batchIndex <= 0}>
            Previous
          </button>
        </VStack>
      )}
    </>
  );
}
