export const WILDERS_PATH = "/wilders";

export async function query(url, method, body) {
  let httpStatusError = false;
  try {
    const response = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      ...(body && { body: JSON.stringify(body) }),
    });
    const message = await response.json();
    if (!response.ok) {
      httpStatusError = true;
      throw Error(message.error);
    }
    return message;
  } catch (error) {
    if (httpStatusError) {
      throw Error(error.message);
    }
    throw Error(
      "Impossible de joindre le serveur. Vérifiez votre connexion à Internet."
    );
  }
}