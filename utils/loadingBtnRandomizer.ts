export function getRandomLoadingText(): string {
  const loadingTexts: string[] = [
    "Cooking up a veggie analysis...",
    "Chopping veggies and crunching data...",
    "Assembling vegan knowledge...",
    "Simmering data for the perfect verdict...",
    "Our vegan bots are crunching numbers...",
    "Unleashing plant-based AI...",
  ];

  const randomIndex = Math.floor(Math.random() * loadingTexts.length);
  return loadingTexts[randomIndex];
}
