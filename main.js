const CLIENT_ID = "9e2bafa4d5cf43b8a099033dd8819010"
const Login_button = document.querySelector("button")
const REDIRECT_URI = "https://lyndonmelon.github.io/Song-Guessing-Game/"
const SCOPES = [
  'user-read-email',
  'user-top-read'
]
let token = ""

function constructAuthURL(client_id, redirect_url, scopes) {
//   define a function which construct the authorization URL
  return 'https://accounts.spotify.com/authorize?client_id='
    + client_id 
    + '&redirect_uri=' 
    + encodeURIComponent(redirect_url) 
    + '&scope=' 
    + encodeURIComponent(scopes.join(' ')) 
    +'&response_type=token';
}

function loginSpotify() {
  const loginURL = constructAuthURL(CLIENT_ID, REDIRECT_URI, SCOPES)
  window.addEventListener("message", event => {
    let hash = JSON.parse(event.data)
    token = hash.access_token
    })
  window.open(loginURL, "Spotify Login")
}

Login_button.addEventListener("click", event => {
    loginSpotify()
})
console.log(token)