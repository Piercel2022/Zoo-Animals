// consuming comments API
// eslint-disable-next-line import/prefer-default-export
export const Comment = (idval) => {
  const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/xxyYZnyEypPJCG46fkIR/comments';

  const feedback = document.querySelector('.p-commemts');
  const form = document.querySelector('#form');
  const name = document.querySelector('.name');
  const insights = document.querySelector('.insight');

  // form value and submit comment to the API
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (name.value.trim() !== '' && insights.value.trim() !== '') {
      fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify({
          item_id: idval,
          username: name.value,
          comment: insights.value,
        }),
        headers: {
          'Content-type': 'application/json; charset=utf-8',
        },
      });

      // display input values to the UI
      // creating temporary date
      const today = new Date();
      const day = String(today.getDate()).padStart(2, '0');
      const month = String(today.getMonth() + 1).padStart(2, '0');
      const year = today.getFullYear();
      // appending and display the date to the UI

      feedback.innerHTML += `

    <div class="apiCom">
        <p>${day}-${month}-${year}</p>
        <p>${name.value}</p>
        <p>${insights.value}</p>
    </div>

`;

      name.value = '';
      insights.value = '';
    }
  });
};