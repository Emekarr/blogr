// control options menu
const open_menu = document.querySelector(".open-menu");
const close_menu = document.querySelector(".close-menu");
const nav_tray = document.querySelector(".nav-tray");

const toggle_menu_buttons = (hide, show, show_nav_tray) => {
  hide.classList.add("toggle-menu-controls-hide");
  show.classList.remove("toggle-menu-controls-hide");

  if (show_nav_tray) {
    nav_tray.classList.remove("hide-nav-tray");
    nav_tray.classList.add("show-nav-tray");
  } else {
    nav_tray.classList.remove("show-nav-tray");
    nav_tray.classList.add("hide-nav-tray");
  }
};

open_menu.addEventListener("click", () => {
  toggle_menu_buttons(open_menu, close_menu, true);
});

close_menu.addEventListener("click", () => {
  toggle_menu_buttons(close_menu, open_menu, false);
});

// control options menu items click
// items
const product = document.querySelector(".product");
const company = document.querySelector(".company");
const connect = document.querySelector(".connect");

// menus
const product_menu = document.querySelector(".options-product");
const company_menu = document.querySelector(".options-company");
const connect_menu = document.querySelector(".options-connect");

const toggle_more_options = (show, hide1, hide2) => {
  const show_cl = show.classList;
  if (show_cl.contains("show-more-options")) {
    show.classList.remove("show-more-options");
    show.classList.add("hide-more-options");
  } else {
    show.classList.add("show-more-options");
    show.classList.remove("hide-more-options");
    hide1.classList.add("hide-more-options");
    hide1.classList.remove("show-more-options");
    hide2.classList.add("hide-more-options");
    hide2.classList.remove("show-more-options");
  }
};

product.addEventListener("click", () => {
  toggle_more_options(product_menu, connect_menu, company_menu);
});
company.addEventListener("click", () => {
  toggle_more_options(company_menu, connect_menu, product_menu);
});
connect.addEventListener("click", () => {
  toggle_more_options(connect_menu, product_menu, company_menu);
});
