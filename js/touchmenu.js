$(document).ready(() => {

  let $touchmenu = $("#touchmenu");

//opens touch menu, timer to prevent onclick from firing at same time

  $("#calendar").on('touchstart', (e) => {
    setTimeout(showTouchMenu, 350);
  });

//closes touch menu
  $("#cancel").on('click', (e) => {
    hideTouchMenu();
  });





  function showTouchMenu() {
    $touchmenu.css("display", "block");
  };

  function hideTouchMenu() {
    $touchmenu.css("display", "none");
  }

});
