const removePuppy = async (puppyId) => {
  const cohort = "2303-ftb-et-web-ft-react"; //Cohort
  const apiUrl = `https://fsa-puppy-bowl.herokuapp.com/api/${cohort}/players`; //url
  try {
    const response = await fetch(`${apiUrl}/${puppyId}`, {
      method: "DELETE",
    });
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

export default removePuppy;
