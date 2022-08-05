import './style.css';
import { GetLikes } from './Likes.js';
import { addLikes } from './AddLikes.js';
import { popupwindow } from './popWindow.js';
import { Comment } from './comments.js';
import { displayComments } from './displayComments.js';

const popup = document.querySelector('.popup');
const body = document.querySelector('.contents');

const animalCount = document.querySelector('.Nbr-animals');

let LikeID = 0;
let Likearray;

// display the cards
// eslint-disable-next-line import/prefer-default-export
export const getInfos = async () => {
  // consuming list api
  const result = await fetch('https://zoo-animal-api.herokuapp.com/animals/rand/9');
  const response = await result.json();

  animalCount.textContent = response.length;

  // consuming likes api
  const value = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/xxyYZnyEypPJCG46fkIR/likes');
  const ArrValue = await value.json();

  Likearray = response;
  popupwindow(Likearray);

  response.forEach((element) => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `<img src=${element.image_link} width="300px" height="300px"> <br/>
                    <p class="likes" id=${LikeID}>💗</p>
                    <p class="likes-number">${ArrValue[LikeID].likes} likes <p>
                    <h2 class="animal-name">${element.name}</h2>
                    <p class="description">${element.diet}</p>
                    <button type="button" class="comments" id=${LikeID}> Comments </button><br/><br/>
                    `;

    body.appendChild(div);

    LikeID += 1;
  });

  return response;
};

body.addEventListener('click', (e) => {
  const id = JSON.parse(e.target.id);
  const NextEl = e.target.nextElementSibling;
  if (e.target.id) {
    GetLikes(id, NextEl);
    addLikes(e.target.id);
    popupwindow(Likearray, id);
    Comment(e.target.id);
    displayComments(e.target.id);

    if (e.target.classList.contains('comments')) {
      body.classList.toggle('hide');
      popup.classList.toggle('hide');
    }
  }
});

// send the information to get element from  API

getInfos();
