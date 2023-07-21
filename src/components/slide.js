// Controls slider
import $ from "jquery";
export default (event) => {
  const pane = $(event.target.parentElement.childNodes[2]);
  pane.fadeToggle(300);
  //   $("#details").fadeToggle();
};
