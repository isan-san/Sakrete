export const CALCULATE_SLAB = (data) => {
  return new Promise((resolve, reject) => {
    fetch("https://7wuv3g8kx5.execute-api.sa-east-1.amazonaws.com/Test/", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data=>{
        resolve(JSON.parse(data.body))})
      .catch((error) => reject(error));
  });
};
