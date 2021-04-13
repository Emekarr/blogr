const open_menu = document.querySelector(".open-menu");
const close_menu = document.querySelector(".close-menu");
const nav_tray = document.querySelector(".nav-tray")

const toggle_menu_buttons = (hide, show, show_nav_tray) => {
  hide.classList.add("toggle-menu-controls-hide");
  show.classList.remove("toggle-menu-controls-hide");

  if (show_nav_tray){
      nav_tray.classList.remove("hide-nav-tray")
      nav_tray.classList.add("show-nav-tray")
  }else{
    nav_tray.classList.remove("show-nav-tray")  
    nav_tray.classList.add("hide-nav-tray") 
  }
};

open_menu.addEventListener("click", (e) => {
  toggle_menu_buttons(open_menu, close_menu, true);
});

close_menu.addEventListener("click", (e) => {
  toggle_menu_buttons(close_menu, open_menu, false);
});
