


const body = document.querySelector('.contents');

// eslint-disable-next-line import/prefer-default-export
export const popup = async () => {
  // consuming list api
  const Result = await fetch('https://zoo-animal-api.herokuapp.com/animals/rand/10');
  const Response = await Result.json();
  // consuming likes api

  let LikeID = 0;

  const Value = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/xxyYZnyEypPJCG46fkIR/likes');
  const Arr = await Value.json();
  const element = Arr[LikeID];

    const div = document.createElement('div');
    div.classList.add('popup');
    div.innerHTML = `<div class="details">
    <img src=${element.image_link} width="300px" height="300px"> <br/>
                      <p class="likes" id=${LikeID}>💗</p>
                      <h2>${element.name}</h2>
                      <p>eats: ${element.diet}</p>
                      <p>geo_range: ${element.geo_range}</p>
                      <p>animal_type: ${element.animal_type}</p>
                      <p>habitat: ${element.habitat}</p>
                      <p>active_time: ${element.active_time}</p>
                      <p>latin_name: ${element.latin_name}</p>
                    </div>
                    <div class="p-commemts">
                        <p class="posted-commemts"> </p>
                        <p class="date-commemts"> </p>
                    </div>

                      <form action="">
  <input type="text" placeholder="Your name">
  <input type="text" placeholder="Your insights">
  <input type="submit" value="Comments">
</form>
                        `;
    LikeID += 1;
    body.appendChild(div);
};
