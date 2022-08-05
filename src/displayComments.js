const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/xxyYZnyEypPJCG46fkIR/comments?item_id=';
// eslint-disable-next-line import/prefer-default-export
export const displayComments = async (id) => {
  const apiComments = await fetch(baseUrl + id);
  const comVAlue = await apiComments.json();

  const feedback = document.querySelector('.p-commemts');
  const commentCount = document.querySelector('.Nbr-comments');
  commentCount.textContent = comVAlue.length;

  comVAlue.forEach((el) => {
    const div = document.createElement('div');
    div.classList.add('apiCom');
    div.innerHTML = `
                     <p>${el.creation_date}</p>
                     <p>${el.username}</p>
                     <p>${el.comment}</p>
    `;
    feedback.appendChild(div);
  });

   return  comVAlue;
};