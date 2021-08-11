// const changeFileUrl = document.querySelector('.type-select');
// const changeUrl = document.querySelector('.url');
// const changefill = document.querySelector('.file');

// const swatch = changeUrl.value === 'url'

// if (changeUrl.value === 'url'){

// }
const ocrForm = document.querySelector('#ocr-form');
const select = document.querySelector('#select');
const ocrUrl = document.querySelector('#ocr-url');
const language = document.querySelector('#language');

ocrForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (select.value == 'file') {
    fetch('/ocr/file', {
      body: new FormData(ocrForm),

      method: 'post',
    }).then((response) => response.json())
      .then((data) => console.log(data));
  } else {
    fetch('/ocr/url', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        link: ocrUrl.value,
        lang: language.value,
      }),
      method: 'post',
    }).then((response) => response.json())
      .then((data) => console.log(data));
  }
});
