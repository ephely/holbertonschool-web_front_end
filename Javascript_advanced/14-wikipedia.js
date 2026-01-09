function createElement(data) {
  const p = document.createElement('p');
  p.textContent = data;
  document.body.appendChild(p);
}
function queryWikipedia(callback) {
  const url =
    'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*';

  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'json';

  xhr.onload = function () {
    if (xhr.status === 200) {
      const response = xhr.response;
      const pages = response.query.pages;
      const firstPageId = Object.keys(pages)[0];
      const extract = pages[firstPageId].extract;
      callback(extract);
    }
  };

  xhr.send();
}
queryWikipedia(createElement);
