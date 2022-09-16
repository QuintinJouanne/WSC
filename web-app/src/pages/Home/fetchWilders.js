export async function fetchWilders() {
  const response = await fetch("/wilders");
  const fetchedWilders = await response.json();
  return fetchedWilders;
}
