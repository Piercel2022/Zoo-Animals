import './style.css';




const body = document.querySelector(".contents");
  const getInfos = async() => {
   const result = await fetch('https://zoo-animal-api.herokuapp.com/animals/rand/10');
    const response = await result.json();
    console.log(response)
    response.forEach(element => {
        let div= document.createElement('div');
    div.innerHTML = `<img src=${element.image_link} width="300px" height="300px"> <br/>
                    <h2>${element.name}</h2>
                    <p>${element.diet}</p>`;

        body.appendChild(div);
    });
  }

  getInfos();
  