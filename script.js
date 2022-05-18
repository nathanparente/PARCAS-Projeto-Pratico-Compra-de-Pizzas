let modalQt = 1;

const c = (el)=>{
    return document.querySelector(el);
}
const cs = (el)=>document.querySelectorAll(el);

// preencher as informações do meu PIZZA TEMPLATE com os items do array
pizzaJson.map((item, index)=>{
    let pizzaItem = c('.models .pizza-item').cloneNode(true);

    pizzaItem.setAttribute('data-key', index);
    pizzaItem.querySelector('.pizza-item--img img').src = item.img;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;

// preencher as informações do meu PIZZA CARD TO BUY com os items do array
    pizzaItem.querySelector('a').addEventListener('click', (e)=>{
        e.preventDefault();
        let key = e.target.closest('.pizza-item').getAttribute('data-key');
        modalQt = 1;

        c('.pizzaBig img').src = pizzaJson[key].img;
        c('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
        c('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
        c('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price.toFixed(2)}`;

// definindo um reset do PIZZA CARD TO BUY pra sempre aparecer a opção "grande" selecionada
        c('.pizzaInfo--size.selected').classList.remove('selected');
        cs('.pizzaInfo--size').forEach((size, sizeIndex)=>{
            if(sizeIndex == 2){
                size.classList.add('selected');
            }
            size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];
        })

        c('.pizzaInfo--qt').innerHTML = modalQt;

// definindo uma transição de animação do PIZZA CARD TO BUY
        c('.pizzaWindowArea').style.opacity = 0;
        c('.pizzaWindowArea').style.display = 'flex';
        setTimeout(()=>{
        c('.pizzaWindowArea').style.opacity = 1;
        },200)
    });

    c('.pizza-area').append(pizzaItem);
});

//eventos do PIZZA CARD TO BUY

function closeModal(){
    c('.pizzaWindowArea').style.opacity = 0;
    setTimeout(()=>{
    c('.pizzaWindowArea').style.display = 'none';
    },200);
}

cs('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach((item)=>{
    item.addEventListener('click', closeModal);
})