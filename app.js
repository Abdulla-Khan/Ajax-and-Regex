const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = []
fetch(endpoint).then(
    blob => blob.json()
).then(
    data => cities.push(...data)
)
function findMatches(word, city) {
    return cities.filter(places => {
        const regex = RegExp(word, 'gi')

        return places.city.match(
            regex
        ) || places.state.match(
            regex
        )
    })
}

function display() {

    const match = findMatches(
        this.value, cities
    )
    const html = match.map(
        place => {
            return `
            <li>
                <span class = 'name'>${place.city},${place.state}</span>
                <span class = 'population'> ${place.population}</span>

            </li>
            `
        }
    ).join('')
    suggestions.innerHTML = html
}
const searchInput = document.querySelector('.search')
const suggestions = document.querySelector('.suggestions')

searchInput.addEventListener(
    'change', display
)
searchInput.addEventListener(
    'keyup', display
)