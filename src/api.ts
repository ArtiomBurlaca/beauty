export const BACKEND_URL = "http://72.62.33.22:8080"; // modifică portul dacă backendul tău rulează pe altceva

export async function checkBackend() {
  const resp = await fetch(`${BACKEND_URL}/health`);
  if (!resp.ok) throw new Error("Backend error!");
  return resp.json ? await resp.json() : {};
}
