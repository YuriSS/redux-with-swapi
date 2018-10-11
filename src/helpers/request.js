
const cleanS = s => s.replace(/^\//, '')
const cleanE = s => s.replace(/\/$/, '')

export const get = api => endpoint =>
    fetch(
        `${cleanE(api)}/${cleanS(endpoint)}`
    ).then(r => r.json())

export const swapi = get('https://swapi.co/api/')