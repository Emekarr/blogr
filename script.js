const open_menu = document.querySelector(".open-menu");
const close_menu = document.querySelector(".close-menu");

const toggle_menu_buttons = (hide, show) => {
  hide.classList.add("toggle-menu-controls-hide");
  show.classList.remove("toggle-menu-controls-hide");
};

open_menu.addEventListener("click", (e) => {
  toggle_menu_buttons(open_menu, close_menu);
});

close_menu.addEventListener("click", (e) => {
  toggle_menu_buttons(close_menu, open_menu);
});
