import './style.css';
import {GetLikes} from './Likes.js';




const body = document.querySelector(".contents");
let  LikeID = 0;

// display the cards
 export const getInfos = async() => {
   const result = await fetch('https://zoo-animal-api.herokuapp.com/animals/rand/10');
    const response = await result.json();
    console.log(response)
    response.forEach(element => {
        let div= document.createElement('div');
        div.classList.add('card');
    div.innerHTML = `<img src=${element.image_link} width="300px" height="300px"> <br/>
                    <p class="likes" id=${LikeID}>💗</p>
                    <p> 0 likes <p>
                    <h2>${element.name}</h2>
                    <p>${element.diet}</p>
                    <button class="comments">Comments</button>`;
                    
                    LikeID ++;
        body.appendChild(div);
    });
  }

  // send the information to get element from  API

  body.addEventListener('click',(e) =>{
    
    const id = JSON.parse(e.target.id);
    const NextEl = e.target.nextElementSibling;

    GetLikes(id , NextEl);
  })

  getInfos();

  
