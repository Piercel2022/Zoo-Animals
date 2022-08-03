// eslint-disable-next-line import/prefer-default-export
export const addLikes = async (idval) => {
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/xxyYZnyEypPJCG46fkIR/likes', {
    method: 'POST',
    body: JSON.stringify({
      item_id: idval,
    }),
    headers: {
      'Content-type': 'application/json; charset=utf-8',
    },
  });
};
