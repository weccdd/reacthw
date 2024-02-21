const baseURL ='https://rickandmortyapi.com/api';

const episode = '/episode'
const character = '/character'

const urls = {

        episode,
        character: {
                byId: (id)=> `${character}/${id}`
        }
}

export {
        baseURL,
        urls
}