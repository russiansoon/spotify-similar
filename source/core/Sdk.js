import {
    Client,
    UserHandler,
    TrackHandler,
    ArtistHandler,
    PlaylistHandler
} from 'spotify-sdk'
import 'whatwg-fetch'
import reqWRAPPER from '../helped/Request'
import _ from 'lodash'

let client = Client.instance;
let user = new UserHandler();

let options = {};

client.settings = {
    clientId: '89518a48cd974fbe95dc1eaf4c957bd5',
    secretId: '968a9e9bb34d448ababaef682c22d89a',
    scopes: ['user-follow-modify'],
    redirect_uri: 'http://localhost:8989'
};

let SpotifySDK = {
    getAccess: () => {
        if (localStorage.token) {
            client.token = localStorage.token
        } else if (window.location.hash.split('&')[0].split('=')[1]) {
            localStorage.token = window.location.hash.split('&')[0].split('=')[1]
            client.token = localStorage.token
        }
    },

    login: () => {
        let loginURL = 'https://accounts.spotify.com/authorize?client_id=' + client._clientId + '&redirect_uri=http://spotifysimilar.local:8989&scope=' + client._scopes + '&response_type=token'

        window.location.href = loginURL

        SpotifySDK.getAccess()
    },

    user: (userID) => {
        reqWRAPPER({
            url: '/me',
            success: (response) => {
                let name = response.display_name
                let numeroFollowers = response.followers.total

                console.log(numeroFollowers)
            }
        })
    },

    me: () => {
        fetch('https://api.spotify.com/v1/me', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.token
            }
        }).then((res) => {
            return res.json()
        }).then((resJSON) => {

            let user = {}

            if (resJSON.name == null) {
                user.name = 'Thom Yorke'
            } else {
                user.name = resJSON.display_name
            }

            user.followers = resJSON.followers.total
            user.picture = resJSON.images[0].url
        })
    }
};

export default SpotifySDK