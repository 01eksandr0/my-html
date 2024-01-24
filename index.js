const renderPageOneListEl = document.querySelector(".render-page-one-list");
const listTranes = [];
const markupInf = {
  url: "./img/test-img.jpg",
  apparatus: "Abductors",
  zones: "Muscles",
};
const createList = () => {
  let iteration = 8;
  const body = document.querySelector("body");
  const width = getComputedStyle(body).width;
  if (parseInt(width) > 767) iteration = 12;
  for (let i = 0; i < iteration; i++) listTranes.push(markupInf);
};
createList();
const createMarkupListPageOne = (array) => {
  return array.reduce((html, item) => {
    return (
      html +
      ` <li class="render-page-one-item">
            <img src="${item.url}" alt="" />
            <div class="render-page-one-img-container">
              <p class="render-page-one-item-title">${item.apparatus}</p>
              <p class="render-page-one-item-zones">${item.zones}</p>
            </div>
          </li>`
    );
  }, "");
};
renderPageOneListEl.innerHTML = createMarkupListPageOne(listTranes);
