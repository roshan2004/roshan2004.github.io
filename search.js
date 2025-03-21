async function search(query) {
    let response = await fetch('/index.json');
    let pages = await response.json();
    let results = pages.filter(page => page.title.toLowerCase().includes(query.toLowerCase()));

    let resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = results.map(page =>
        `<li><a href="${page.url}">${page.title}</a></li>`
    ).join('');
}

document.getElementById('search-input').addEventListener('input', (e) => {
    search(e.target.value);
});

