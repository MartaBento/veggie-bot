export function formatUserInput(word: string) {
  const formattedWord = word
    .split(" ")
    .map((w, index) => {
      if (index === 0) {
        return w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();
      } else {
        return w.toLowerCase();
      }
    })
    .join(" ");

  return formattedWord;
}
