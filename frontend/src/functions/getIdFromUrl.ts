export function getIdFromUrl(url: string) {
  if (!url) return null;
  const parts = url.split("/");
  return parts[parts.length - 1];
}