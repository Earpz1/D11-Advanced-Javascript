let container = document.querySelector('.row')

const query = function (event) {
  const searchQuery = event.target.value
  console.log

  searchAPI(searchQuery)
}

const searchAPI = function (query) {
  searchTerm = query
  container.innerHTML = ''
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'cadf6a4802msha2cebf7932d8820p1f1798jsn7b3fefa2b948',
      'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
    },
  }

  fetch(
    'https://deezerdevs-deezer.p.rapidapi.com/search?q=' + searchTerm,
    options,
  )
    .then((response) => response.json())

    .then((searchResults) => {
      for (results of searchResults.data) {
        let newCol = document.createElement('div')
        newCol.classList.add('col-2')
        let newCard = document.createElement('div')
        newCard.classList.add('card')
        newCard.setAttribute('style', 'style="width: 18rem;"')

        let cardImage = document.createElement('img')
        cardImage.setAttribute('src', results.artist.picture_small)
        cardImage.classList.add('card-img-top')
        newCard.appendChild(cardImage)

        let cardBody = document.createElement('div')
        cardBody.classList.add('card-body')
        let cardTitle = document.createElement('h5')
        cardTitle.classList.add('card-title')
        cardTitle.innerHTML = results.artist.name
        let cardContent = document.createElement('p')
        cardContent.classList.add('card-text')
        cardContent.innerHTML = results.title

        cardBody.appendChild(cardTitle)
        cardBody.appendChild(cardContent)
        newCard.appendChild(cardBody)
        newCol.appendChild(newCard)
        container.appendChild(newCol)
      }
    })

    .catch((err) => console.error(err))
}
