const body = document.querySelector('body');


  const getInfos = async() => {
    result = await fetch('https://zoo-animal-api.herokuapp.com/animals/rand/10');
    const response = await result.json();
    console.log(response)
    response.forEach(element => {
        let div= document.createElement('div');
    div.innerHTML = `<img src=${element.image_link} width="300px" height="300px"> <br/>
                    <h2>${element.name}</h2>
                    <p>${element.diet}</p>`;

        body.appendChild(div);
    });

    body.style.display = "flex";
    body.style.gap = "20px";
    body.style.flexWrap ="wrap";
  }


  getInfos();

  