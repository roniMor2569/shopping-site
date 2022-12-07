

function createProduct(product) {

    const productHTML = document.createElement('div');
    productHTML.classList.add('product');

    const productTitle = document.createElement('h2');
    productTitle.innerHTML = product.name;
    productHTML.appendChild(productTitle);

    const productDataContainer = document.createElement('div');
    productDataContainer.classList.add('product-data-container');
    productHTML.appendChild(productDataContainer);

    const productPrice = document.createElement('div');
    productPrice.classList.add('product-price');
    productPrice.innerHTML = 'Price: ' + product.price;

    productDataContainer.appendChild(productPrice);
    

    return productHTML;
}

function createProductList(productList) {
    const productListElement = document.createElement('div');
    if(productList && productList.length) {
        for(let i=0;i<productList.length;i++) {
            const product = createProduct(productList[i]);
            productListElement.appendChild(product);
        }
    } else {
        productListElement.innerHTML = 'No Items.';
    }
    return productListElement;
}

function createHeader(headerObject) {
    //TODO: add logic

    //stub
    const headerElement = document.createElement('div');
    headerElement.innerHTML = 'HEADER HERE';
    return headerElement;
}