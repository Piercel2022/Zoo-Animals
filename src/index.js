import './style.css';
import { GetLikes } from './Likes.js';
import { addLikes } from './AddLikes.js';

const body = document.querySelector('.contents');
let LikeID = 0;

// display the cards
// eslint-disable-next-line import/prefer-default-export
export const getInfos = async () => {
  // consuming list api
  const result = await fetch('https://zoo-animal-api.herokuapp.com/animals/rand/10');
  const response = await result.json();

  // consuming likes api
  const value = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/xxyYZnyEypPJCG46fkIR/likes');
  const ArrValue = await value.json();

  response.forEach((element) => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `<img src=${element.image_link} width="300px" height="300px"> <br/>
                    <p class="likes" id=${LikeID}>💗</p>
                    <p>${ArrValue[LikeID].likes} likes <p>
                    <h2>${element.name}</h2>
                    <p>${element.diet}</p>
                    <button class="comments">Comments</button>`;
    LikeID += 1;
    body.appendChild(div);

    // popup
  });
};

// send the information to get element from  API

body.addEventListener('click', (e) => {
  const id = JSON.parse(e.target.id);
  const NextEl = e.target.nextElementSibling;
  if (e.target.id) {
    GetLikes(id, NextEl);
    addLikes(e.target.id);
  }
});

// document.addEventListener('DOMContentLoaded', GetLikes());

getInfos();
