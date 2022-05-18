const c = (el)=>{
    return document.querySelector(el);
}
const cs = (el)=>document.querySelectorAll(el);


pizzaJson.map((item, index)=>{
    let pizzaItem = c('.models .pizza-item').cloneNode(true);
    // preencher as informações do meu PIZZA TEMPLATE com os items do array

    pizzaItem.querySelector('.pizza-item--price').innerHTML = item.price;
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;

    c('.pizza-area').append(pizzaItem);
});