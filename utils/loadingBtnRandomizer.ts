export function getRandomLoadingText(): string {
  const loadingTexts: string[] = [
    "Cooking up a veggie analysis...",
    "Chopping veggies and crunching data...",
    "Assembling vegan knowledge...",
    "Simmering data for the perfect verdict...",
    "Our vegan bots are crunching numbers...",
    "Unleashing plant-based AI...",
    "Sprinkling some vegan fairy dust...",
    "Blending the plant-based goodness...",
    "Chopping up cruelty-free ingredients...",
    "Serving you a platter of vegan data...",
    "Whisking together the vegan knowledge...",
  ];

  const randomIndex = Math.floor(Math.random() * loadingTexts.length);
  return loadingTexts[randomIndex];
}
