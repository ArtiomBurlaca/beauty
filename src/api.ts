export const BACKEND_URL = "https://api.gorgeous.help"; // modifică portul dacă backendul tău rulează pe altceva

export async function checkBackend() {
  const resp = await fetch(`${BACKEND_URL}/api/test/health`);
  if (!resp.ok) throw new Error("Backend error!");
  return resp.json ? await resp.json() : {};
}


