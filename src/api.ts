export const BACKEND_URL = "http://localhost:8000"; // modifică portul dacă backendul tău rulează pe altceva

export async function checkBackend() {
  const resp = await fetch(`${BACKEND_URL}/health`);
  if (!resp.ok) throw new Error("Backend error!");
  return resp.json ? await resp.json() : {};
}
