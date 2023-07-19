export function getRandomLoadingText(): string {
  const loadingTexts: string[] = [
    "Whipping up a veggielicious analysis...",
    "Chopping veggies and crunching data...",
    "Assembling the vegan knowledge, one ingredient at a time...",
    "Simmering the data to serve you the perfect vegan verdict...",
    "Our vegan robots are crunching numbers... and carrots!",
    "Unleashing the power of plant-based AI... please hold your kale!",
  ];

  const randomIndex = Math.floor(Math.random() * loadingTexts.length);
  return loadingTexts[randomIndex];
}
