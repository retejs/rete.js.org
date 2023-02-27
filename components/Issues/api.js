export default async function request(path) {
  const response = await fetch(`https://api.github.com/${path}`);

  return response.json();
}
