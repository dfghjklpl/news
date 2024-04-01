function fetchData(api) {
    return fetch(api)
        .then((response) => response.json())
        .catch((error) => console.error("У тебя ошибка, исправляй", error));
}
fetchData("https://8ee2d0795d26b95f.mokky.dev/KomArticle").then((data) => {
    renderNews(data);
});
function renderNews(data) {
    let wrapper = document.querySelector(".news__list");
    wrapper.innerHTML = data
        .map((news) => {
            return `          
          <div class="news__card">
          <img  class="news__info-img" src="${news.image}" alt=""  />
          <div class="news__info">
            <div class="news__box">
            <span>${news.date}</span>
            <img class="news__like" src="./heart.svg" alt=""> 
            </div>
            <h3>${news.title}</h3>
            <p>${news.text}
            
            
              
            </p>
            <a href="">Читать дальше>></a>
            <img src="./share-2.png" alt="" />
      
          </div>
        </div>`;
        })
        .join("");
}