$(document).ready(() => {

  let touchmenu = $("#touchmenu");
  let allCells = $(".time").children();

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
    setStartTime(fields);
    resetEndTime();
    setTimeout(showTouchMenu, 350);
  });

//closes touch menu
  $("#cancel").on('click', (e) => {
    hideTouchMenu();
  });

  $("#confirm").on('click', () => {
    let startID = getID(
      $("#startday").val(),
      $("#starthour").val(),
      $("#startminute").val(),
      $("#ampmstart").val()
    )
    let endID = getID(
      $("#endday").val(),
      $("#endhour").val(),
      $("#endminute").val(),
      $("#ampmend").val()
    )
    startIndex = allCells.index($(`#${startID}`));
    endIndex = allCells.index($(`#${endID}`));
    selectBoxes(startIndex, endIndex);
    hideTouchMenu();
  });

//helper functions

  function showTouchMenu() {
    touchmenu.css("display", "block");
  };

  function hideTouchMenu() {
    touchmenu.css("display", "none");
  }

  function setStartTime(fields) {
    $("#startday").val(fields.day);
    $("#starthour").val(fields.hour);
    $("#startminute").val(fields.minute);
    $("#ampmstart").val(fields.ampm);
  }

  function resetEndTime() {
    $("#endday").val("sun");
    $("#endhour").val(12);
    $("#endminute").val("00");
    $("#ampmend").val("am");
  }

  function selectBoxes(start, end) {
    if(start > end) {
      let temp = start;
      start = end;
      end = temp;
    };
    for(let i=start; i<=end; i++) {
      allCells[i].checked = true;
    }
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
    let parsedHour = String(hour);
    let parsedMinute;
    minute === "00" ? parsedMinute = "" : parsedMinute = minute;
    return day + parsedHour + parsedMinute + ampm
  }

});
