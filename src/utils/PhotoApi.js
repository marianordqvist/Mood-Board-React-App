class PhotoApi {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject("An error has occured");
  }

  searchPhoto(keyword) {
    return fetch(`${this._url}search?query=${keyword}&per_page=80`, {
      method: "GET",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  fetchStartPhotos() {
    return fetch(`${this._url}curated?per_page=13`, {
      method: "GET",
      headers: this._headers,
    }).then(this._checkResponse);
  }
}

const apiKey = process.env.REACT_APP_API_KEY;

const photoApi = new PhotoApi({
  url: "https://api.pexels.com/v1/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: apiKey,
  },
});

export default photoApi;
