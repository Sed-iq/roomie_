export default (id, set) => {
  const cart = JSON.parse(localStorage.getItem("cart_data"));

  const remain = cart.filter((c) => c.id != id);
  set(remain);
  localStorage.setItem("cart_data", JSON.stringify(remain));
};
