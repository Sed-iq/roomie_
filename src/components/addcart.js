export default (name, img, price, setState) => {
  var cart = JSON.parse(localStorage.getItem("cart_data"));
  if (cart == "") {
    // Empty
    cart = [
      {
        id: 1,
        name,
        img,
        price,
        amount: 1,
      },
    ];
    localStorage.setItem("cart_data", JSON.stringify(cart));
    setState((prev) => prev + 1);
  } else {
    cart.push({
      id: cart.length + 1,
      name,
      img,
      price,
      amount: 1,
    });
    setState((prev) => prev + 1);
    localStorage.setItem("cart_data", JSON.stringify(cart));
  }
};
