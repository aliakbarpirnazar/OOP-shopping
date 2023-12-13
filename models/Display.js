class Display {
  constructor(parent, products) {
    this.parent = parent;
    this.products = products;
    this.parent.addEventListener("click", this);
  }

  showProducts() {
    this.ToShow = [...new Set(this.products)];
    this.parent.innerHTML = "";
    this.ToShow.forEach((product) => {
      const qty = this.products.filter((p) => p.id === product.id).length;
      this.createCard(product, qty);
    });

    this.calculateTotalPrice();
  }

  createCard(data, qty) {
    const cardEle = document.createElement("div");

    const imgEle = this.productImg(data);
    const infoEle = this.productInfo(data);

    cardEle.innerHTML = imgEle;
    cardEle.innerHTML += infoEle;

    if (this.constructor.name === "Cart") {
      const controlEle = this.ProductControl(data, qty);
      cardEle.innerHTML += controlEle;
    }

    this.parent.appendChild(cardEle);
  }

  productImg(data) {
    const { image, alt } = data;
    const imgJSX = `<img alt=${alt} src=${image} />`;

    return imgJSX;
  }
}

export default Display;
