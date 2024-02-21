function addNews() {
    fetch('https://dca2e135-8ac6-4af2-918d-b5d62ee7e2e3.mock.pstmn.io/news')
    .then(Response => Response.json()) 
    .then(news => {
        const newsContainer = document.getElementById('news');
        let generatedNewsHtml = '';
        news.forEach((newsItem) => {
             const html = `
            <div class="card-news">
                <h2 class="card-news__title"${newsItem.title}</h2>
                <p class="card-news__date">${newsItem.date}</p>
                <p class="card-news__description">${newsItem.description}</p>
                <a class="card-news__link" href="#">Read More</a>
            </div>
            `;
            generatedNewsHtml = generatedNewsHtml + html;
        });
    
        newsContainer.innerHTML = generatedNewsHtml;
               
    });
            
}

addNews();