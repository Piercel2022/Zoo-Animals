// getting the likes from the API and displaying the clicked Element
// eslint-disable-next-line import/prefer-default-export

export const GetLikes = async (id, nextEL) => {
  const value = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/xxyYZnyEypPJCG46fkIR/likes');
  const ArrValue = await value.json();
  nextEL.innerHTML = `${ArrValue[id].likes} likes`;
};

