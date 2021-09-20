var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=6dccec3fffdf49c18950f4d8613fdc6a';
var req = new Request(url);
fetch(req)
    .then(function(response) {
        console.log(response.json());
    })