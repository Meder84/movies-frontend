export const MOVIES_URL = 'https://api.nomoreparties.co';

class MoviesApi {
  constructor(config) {
    this._url = config.baseUrl;
    this._headers = config.headers;
  }

  _handleResponse(res) {
    if (res.ok) return res.json();
    return Promise.reject(`Произошла ошибка: ${res.status}`);
  }

  async getAllMovies() {
    const res = await fetch(this._url + '/beatfilm-movies', {
      method: 'GET',
      headers: this._headers
    });
    return this._handleResponse(res);
  }
}

const moviesApi = new MoviesApi({
  baseUrl: MOVIES_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

export default moviesApi;
