class Products {
  constructor(parent, products) {
    this.parent = parent;
    this.products = products;
  }

  showProducts() {
    this.products.forEach((product) => {
      this.createCard(product);
    });
  }

  createCard(data) {
    const cardEle = document.createElement("div");

    const imgEle = this.productImg(data);
    const infoEle = this.productInfo(data);

    cardEle.innerHTML = imgEle;
    cardEle.innerHTML += infoEle;

    this.parent.appendChild(cardEle);
  }

  productImg(data) {
    const { image, alt } = data;
    const img = `<img alt=${alt} src=${image} />`;

    return img;
  }
  
  productInfo(date) {
    const { id, name, price } = date;
    const infoJSX = `
           <div>
                <h3>${name}</h3>
                <div>
                    <spna>${price}</span>
                    <button data-id=${id}>+</button>
                </div>
           </div>
    `;

    return infoJSX;
  }
}

export default Products;
