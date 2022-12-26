
const productContainer = document.getElementById("products-container");
const headerContainer = document.getElementById('header');

let productsArray = [];
let headerData = null;

function onDataSuccess(data) {
    productsArray = data;
    renderPage();
}

function onDataFailed(error) {
    alert('products data failed to arrive');
}

function renderPage() {
    const productsHTML = createProductList(productsArray);
    productContainer.innerHTML = '';
    productContainer.appendChild(productsHTML);

    const headerHTML = createHeader(headerData);
    headerContainer.innerHTML = '';
    headerContainer.appendChild(headerHTML);
}


fetch('http://localhost:3000/header')
    .then(res => res.json())
    .then((data) => {
        headerData = data;
        renderPage();
    })
    .catch(() => {
        alert('Error occured!');
        //TODO: //
    });



const responsePromise = fetch('http://localhost:3000/products');
const dataPromise = responsePromise.then( response => {
    return response.json();
});
dataPromise
    .then(onDataSuccess)
    .catch(onDataFailed)
    .finally(() => {
        console.log('promise ended');
    });

console.log('code still running');

renderPage();




// for(let i=0; i<productsArray.length;i++) {

//     const productDIV = document.createElement("div");
//     productDIV.classList.add("product");

//     const productNameDIV = document.createElement("div");
//     productNameDIV.innerHTML = productsArray[i].name;
//     productDIV.appendChild(productNameDIV);

//     const productAmountDIV = document.createElement("div");
//     productAmountDIV.innerHTML = "Amount: " + productsArray[i].amount;
//     productDIV.appendChild(productAmountDIV);

//     productContainer.appendChild(productDIV);

// }