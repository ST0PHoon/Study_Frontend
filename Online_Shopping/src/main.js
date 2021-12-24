
//Fetch the items from the JSON file
function loadItems() { 
    return fetch('./data/data.json') // fetch를 통해서 data.json 불러오기
        .then(response => response.json()) //받아온 데이터가 성공적이면 json으로 반환
        .then(json => json.items); //반환한 데이터중에서 items만 반환
}

function displayItems(items) {
    //싱픔 컨테이너 지정하기
    const container = document.querySelector('.items');
    //받아온 데이터를 html li형식으로 mapping 하기
    container.innerHTML = items.map(item => createHTMLString(item)).join('');
}
//li 형식으로 받아오기 위한 함수 정의
function createHTMLString(item) {
    return `
    <li class="item">
        <img src="${item.image}" alt="${item.type}" class="item__thumbnail"/>
        <span class="item__description">${item.gender}, ${item.size}</span>
    </li>
    `;
}

// Handle button click
function onButtonClick(event, items) {
    console.log(items,'1')
    const target = event.target;
    const key = target.dataset.key;
    const value = target.dataset.value;

    if (key == null || value == null) {
        return;
    }
    updateItems(items, key, value);
}


// Handle button click
function onButtonClick() {
    console.log('1')
    

}
// Make the items matching {key: value} invisible.
function updateItems(items, key, value) { 
    console.log(items);

    items.forEach(item => {
        if (item.dataset[key] === value) {
          return;
        } else {
            item.style.display='none';
        }
    });
}

//main
loadItems()
    .then(items => {
        displayItems(items)
        updateItems(items, key, value);
    })
    .catch(console.log);