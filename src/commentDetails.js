export const commentApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/xxyYZnyEypPJCG46fkIR/comments';
export const animalApi = 'https://zoo-animal-api.herokuapp.com/animals/rand/10';

const fetchAllComments = async (animalId) => {
  const response = await fetch(`${commentApi}?item_id=${animalId}`).catch((error) => error);
  return response.json();
};

const fetchTotalNumberOfComments = async (animalId) => {
  const response = await fetchAllComments(animalId)
    .then((data) => (!data.error ? data.length : 0))
    .catch(() => 0);
  return response;
};

const commentPopUp = document.querySelector('.comments');
const updateTotalNumberOfComments = (animalId) => {
  fetchTotalNumberOfComments(animalId).then((totalNumOfComments) => {
    commentPopUp.querySelector('.total-comments').innerHTML = totalNumOfComments;
  });
};
const countNumOfComments = (response) => (typeof (response) === 'object' ? response.length : 'no match');
document.addEventListener('click', async (e) => {
  if (e.target.matches('.comments')) {
    const response = await fetchAllComments(e.target.id);
    const numberOfComments = countNumOfComments(response);
    commentPopUp.querySelector('.total-comments').textContent = numberOfComments || 0;
  }
});
// Those functions with export should be accessible from outside the current module.
export default updateTotalNumberOfComments;
export { fetchAllComments, countNumOfComments };
