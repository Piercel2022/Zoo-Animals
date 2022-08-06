// display popup window

const popup = document.querySelector('.popup');
const body = document.querySelector('.contents');
const footer = document.querySelector('.footer');

// eslint-disable-next-line import/prefer-default-export
export const popupwindow = (arr, id) => {
  const index = id || 0;
  const element = arr[index];

  popup.innerHTML = `
<div class="details">
<p class="close"> ✖️ </p>
<img src=${element.image_link} width="300px" height="300px" alt="image animal" class="pop-image"> <br/>
  <h2>${element.name}</h2>
  <div class="pop-items">
      <p> <mark>eats</mark>: ${element.diet}</p>
      <p><mark>geo_range</mark>: ${element.geo_range}</p>
      <p><mark>animal_type</mark>: ${element.animal_type}</p>
      <p><mark>habitat</mark>: ${element.habitat}</p>
      <p><mark>active_time</mark>: ${element.active_time}</p>
      <p><mark>latin_name</mark>: ${element.latin_name}</p>
</div>
<h2>Comments (<span class="Nbr-comments">0</span>)</h2>

</div>

<div class="p-commemts">
  <p class="date-commemts"> </p>
  <p class="posted-commemts"> </p>
    
</div>

<form action="" id="form">
<input type="text" placeholder="Your name" class="name">
<input type="text" placeholder="Your insights" class="insight">
<input type="submit" value="Comments">
</form>
`;
};

popup.addEventListener('click', (e) => {
  if (e.target.classList.contains('close')) {
    body.classList.toggle('hide');
    popup.classList.toggle('hide');
    footer.classList.toggle('hide');
  }
});
