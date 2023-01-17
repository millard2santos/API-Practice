
const container = document.querySelector('.container')
//  

const getFilms = (url) => {
    return fetch(url)
        .then(res => res.json())
        .then(data => data)
}

const getPlanet = (url) => {
    return fetch(url)
        .then(res => res.json())
        .then(data => data)
}



const getPeople = () => {
    return fetch(`https://swapi.dev/api/people`)
        .then(res => res.json())
        .then(data => data)
}


// getPeople()
//     .then(res => res.results.find(e => e.name === 'Luke Skywalker'))
//     .then(response => response.films.forEach((url) => {
//         getFilms(url)
//             .then(res => console.log(res.title))
//     }))


// getPeople()
//     .then(res => res.results.find(e => e.name === 'Leia Organa'))
//     .then(response => {
//         getPlanet(response.homeworld)
//             .then(res => console.log(res.name))
//     })


// getPeople()
//     .then(res => res.results.find(e => e.name === 'C-3PO'))
//     .then(response => response.films.forEach((url) => {
//         getFilms(url)
//             .then(res => console.log(res.title))
//     }))

getPeople()
    .then(res => res.results.find(e => e.name === 'Darth Vader'))
    .then(response => {
        const div = document.createElement('div')
        div.innerHTML = `<p>Nombre: ${response.name}</p>
                         <p>Fecha de Nacimiento: ${response.birth_year}</p>
                         <p>Altura: ${response.height}</p>`
        container.append(div)


    })









