const addPuppy = async (name, breed, apiUrl) => {
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        breed: breed,
      }),
    });
    const result = await response.json();

    console.log(result);
  } catch (err) {
    console.error(err);
  }
};
export default addPuppy;
