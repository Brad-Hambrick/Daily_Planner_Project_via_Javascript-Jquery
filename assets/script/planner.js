


$( document ).ready(function() {
    console.log( "ready!" );
});

let days = moment().format("dddd, " + "LL");

$("#currentDay").text(days);




function makeCalendar() {
  for (let i =6; i < 21; i++) {
    let event = $("<div></div>");
    let time = $("<div></div>");
    let timeBlock = $("<aside></aside>");
    let save = $("<button>💾</button>");
    let textArea = $("<textarea></textarea>");
    // let appointment = $("<input></input>");
    let currentTime = moment().hour()

    if (i <= 11) {
      $("div.container").append(event);
      $(event).append(textArea);
      $(textArea).addClass("textArea");
      // $(textArea).append(appointment);
      // $(appointment).addClass("appointment");
      $(event).append(save);
      $(save).addClass("saveBtn");
      $(event).append(timeBlock);
      $(timeBlock).addClass("time-block");
      $(timeBlock).append(time);
      $(time).addClass("hour")
      time.text(i + "AM") 
     
    }else if (i == 12) {
      $("div.container").append(event);
      $(event).append(textArea);
      $(textArea).addClass("textArea");
      // $(textArea).append(appointment);
      // $(appointment).addClass("appointment");
      $(event).append(save);
      $(save).addClass("saveBtn");
      $(event).append(timeBlock);
      $(timeBlock).addClass("time-block");
      $(timeBlock).append(time);
      $(time).addClass("hour")
      time.text(i + "PM")
      
    }else {
      $("div.container").append(event);
      $(event).append(textArea);
      $(textArea).addClass("textArea");
      // $(textArea).append(appointment);
      // $(appointment).addClass("appointment");
      $(event).append(save);
      $(save).addClass("saveBtn");
      $(event).append(timeBlock);
      $(timeBlock).addClass("time-block");
      $(timeBlock).append(time);
      $(time).addClass("hour")
      time.text(i - 12 + "PM")
    }

    // function amOrPm () {
    //   if (i => 13) {
    //     i - 12;
    //   }
    // }

    textArea.each(function () {
      if (i < currentTime) {
        textArea.removeClass("future")
        textArea.removeClass("present")
        textArea.addClass("past")
      } else if (i == currentTime) {
        textArea.removeClass("future")
        textArea.removeClass("past")
        textArea.addClass("present")
      } else {
        textArea.removeClass("present")
        textArea.removeClass("past")
        textArea.addClass("future")
    }
  });

      $("saveBtn").click(function(e) {
        var timeVal = $(this).data("time-block")
        var inputText = $(this).parent().siblings().find("input").val()
        localStorage.setItem(id,inputText)
   })
      

}};

makeCalendar();





// let row = "";
// function makeCalendar() {
//   for (let i = 9; i < 18, i++) {
//     row = $("<div class='row'")
//     let column1 = $(`<div class= 'col-lg-2 hour'>${amOrPm(i)}</div>`);
//     let column2 = $(`<div class ="col-lg-8 inputcontent"><input data-input="${i}" id="inputText${i}" class="form-control inputText" type="text" name="userInput"></div>`)
//     let column3 = $(<div class = "col-lg-2"><button data-id = "${i}" id = "saveBtn" class = "btn btn-success btn-block"><i class = "fas fa-save"></i>Lock</button></div>);

//     row.append(column1);
//     row.append(column2);
//     row.append(column3);
//     $("#display-planner").append(row);
//     getLocalStorage(i);



//     }
//     $("button.btn.btn-success").click(function() {
//       let id = $(this).data("id");
//       let inputText = $(this).parent().sibling().find("input").val();
//       localStorage.setItem(id,inputText);
//     })
//     // Display Am or PM
//     function amOrPm(hour) {
//       let h = "";
//       if (hour <= 12) {
//         h = "AM"
//       } else {
//         h = "PM"
//       }
//       hour = hour % 12;
//       hour = hour ? hour : 12;
//       return hour + " " + h;
//     }


  



