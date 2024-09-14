export const requestWord = async () => {
  try {
    const response = await fetch(
      "https://random-word-api.vercel.app/api?words=1"
    );

    if (!response.ok) {
      throw new Error("Network response not okay");
    }

    const data: string[] = await response.json();

    // console.log(data[0]);
    return data[0];
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};
