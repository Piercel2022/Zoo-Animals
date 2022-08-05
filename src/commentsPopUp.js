import updateTotalNumberOfComments, {
  fetchAllComments, commentApi, animalApi,
} from './commentsDetail.js';

const commentPopUp = document.querySelector('.comments');

const getAnimalInfo = async (animalUrl) => {
  try {
    const response = await fetch(animalUrl);
    const answer = response.json();
    return answer;
  } catch (error) {
    throw new Error('Request failed: ', error);
  }
};

const comment = async (animalUrl, formData = {}) => {
  const answer = await fetch(animalUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),

  });
  const response = answer.text();
  return response;
};

const addComment = async (formData) => {
  const response = await comment(commentApi, formData);
  return response;
};

const animalInfo = async (animalId) => {
  const response = await getAnimalInfo(`${animalApi}/${animalId}`);
  return response;
};
const renderComments = (comment) => {
  commentPopUp.querySelector('.list-of-comments').innerHTML = comment;
};

const displayComments = (animalId) => {
  fetchAllComments(animalId).then((data) => {
    if (!data.error) {
      let comments = '';
      data.forEach((comment) => {
        comments += `<span class="comment-date-username">${comment.username}</span><small>${comment.creation_date}</small>
                    <p class="comment-body">${comment.comment} </p>`;
      });
      renderComments(comments);
    } else {
      renderComments('No Comments To show!!!');
    }
  });
};

const closePopUp = () => {
  document.querySelector('#close-popup').addEventListener('click', () => {
    commentPopUp.style.display = 'none';
    commentPopUp.innerHTML = '';
    document.body.style.overflow = 'visible';
  });
};

const showPopUp = (animalId) => {
  commentPopUp.innerHTML = '<span id="close-popup">X</span>';
  animalInfo(animalId).then((data) => {
    commentPopUp.innerHTML = `
            <div id="close-popup">&times;</div>
            <div class="animal-info">
              <img src="${data.image.medium}" class="popup-img">
              <div class="animal-detail">
                <h3 class="animal-title">${data.name}</h3>
                <p><b>Gender : </b> <small>${data.type}</small></p>
               </div>
            </div>
            <div class="comments-container">
            <div class="commment-div">
                <h4> Total Comments (<span class="total-comments"></span>)</h4>
                <p class="list-of-comments"></p>
            </div>
          <form class="add-comment-form">
          <h3 class="comment-form-title">Add Your Comment Here</h3>
            <input type="text" name="username" placeholder="Your Name here" required>
            <textarea name="comment"  placeholder="Your Comment here" required></textarea>
            <input type="submit" value="Comment" id="submit-button">
          </form>
         </div>
            `;
    closePopUp();
    displayComments(data);
    updateTotalNumberOfComments(data);

    const form = commentPopUp.querySelector('.add-comment-form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const userName = form.elements.username.value;
      const comment = form.elements.comment.value;
      addComment({
        item_id: animalId,
        username: userName,
        comment,
      }).then(() => {
        displayComments(animalId);
        updateTotalNumberOfComments(animalId);
        form.reset();
      });
    });
  });
  commentPopUp.style.display = 'block';
  closePopUp();
};

const commentsListener = () => {
  const commentButton = document.querySelectorAll('.comments');
  commentButton.forEach((btn) => {
    btn.addEventListener('click', () => {
      const animalId = btn.getAttribute('animalId');
      showPopUp(animalId);
      document.body.style.overflow = 'hidden';
    });
  });
};

export default commentsListener;
export { commentPopUp };
