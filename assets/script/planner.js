


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








  



