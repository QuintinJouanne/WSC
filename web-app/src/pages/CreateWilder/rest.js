export async function createWilder(firstName, lastName) {
    try {
      const response = await fetch("/wilders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName }),
      });
      const newWilder = await response.json();
      if (!response.ok) {
        throw Error(await response.json());
      }
      return newWilder;
    } catch (error) {
      throw Error(
        "Impossible de joindre le serveur. Vérifiez votre connexion à Internet."
      );
    }
  }