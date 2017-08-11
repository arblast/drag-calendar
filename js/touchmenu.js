$(document).ready(() => {

  let $touchmenu = $("#touchmenu");

//opens touch menu, timer to prevent onclick from firing at same time
//set default values of day/time to clicked element

  $("#calendar").on('touchstart', (e) => {
    let target = e.target;
    let fields = {day: "", hour: "", minute: "", ampm: ""};
    if(target.nodeName === "LABEL") {
      fields = parseID(target.control.id);
    } else if(target.nodeName ==="INPUT") {
      fields = parseID(target.id);
    }
    $("#startday").val(fields.day);
    $("#starthour").val(fields.hour);
    $("#startminute").val(fields.minute);
    $("#ampmstart").val(fields.ampm); 
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

  function parseID(id) { //function to parse the id
    let day = id.slice(0,3);
    let ampm = id.slice(-2);
    let time = id.slice(3,-2);
    let hour, minute;
    if(time.slice(-2) === "30") {
      minute = "30";
      hour = parseInt(time.slice(0,-2));
    } else {
      minute = "00";
      hour = parseInt(time);
    }
    return {day, hour, minute, ampm};
  }

  function getID(day, hour, minute, ampm) { //function to return id

  }

});
