const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
let myLi = ''

function showAll() {
    menuOptions.forEach(product => {
        myLi += `
            <li>
                <img src=${product.src}>
                <p>${product.name}</p>
                <p class="item-price">R$ ${product.price}</p>
            </li>
        `
    })

    list.innerHTML = myLi
}

function mapAllItems(){
    console.log('chameeei')
}

buttonShowAll.addEventListener('click', showAll)
buttonMapAll.addEventListener('click', mapAllItems)