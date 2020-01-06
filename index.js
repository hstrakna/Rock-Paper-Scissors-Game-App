var choice;
var computerSelction;
var won;
var selectionClass;
var hasStarted = false;

        $(".scoreFont").text(localStorage.refresh);
if (hasStarted != true) {
      $(".buttons").add();
  $(".buttons").click(function() {
    selectionClass = this.className;
    choice = selectionClass.charAt(0);
    var random  = computerSelect();
    won = compare(random, choice);
    if (won === true) {
      if (choice === "r") {
        $(".p").remove();
      }
      else if (choice === "s") {
        $(".r").remove();
      }
      else if (choice === "p") {
        $(".s").remove();
      }

      $(".gameCol3").append('<h1>you win</h1>');
      displayButtons(choice, random);
      winnerBackground(choice);
      hasStarted = true;

      $(".btn-light").click(function() {


        localStorage.refresh=localStorage.refresh!=null ? localStorage.refresh : 0;
        localStorage.setItem("refresh", parseInt(localStorage.refresh)+1);
  
        // score = localStorage.refresh;

        location.reload();

      });
    } else if (won === false) {
      if (choice === "r") {
        $(".s").remove();
      }
      else if (choice === "s") {
        $(".p").remove();
      }
      else if (choice === "p") {
        $(".r").remove();
      }
      $(".gameCol3").append('<h1>you lost</h1>');
      displayButtons(choice, random);

      winnerBackground(random);


      $(".btn-light").click(function() {
        localStorage.clear();
        location.reload();
        hasStarted = false;
      });

    } else {
      if (choice === "r") {
        $(".p").remove();
        $(".s").remove();
      }
      else if (choice === "s") {
        $(".r").remove();
        $(".p").remove();
      }
      else if (choice === "p") {
        $(".s").remove();
        $(".r").remove();
      }

      $(".gameCol3").append('<h1>draw</h1>');
      displayButtons(choice, random);
      $( "." + choice).clone().appendTo( ".gameColBottom1" );
      $(".btn-light").click(function() {
        location.reload();
      });

    }

  });

}





function computerSelect() {
  var num = Math.floor(Math.random()*3) + 1;
  console.log(num);
  if (num === 1) {
    computerSelction = "r";
    return computerSelction;
  }
  else if (num === 2) {
    computerSelction = "p";
    return computerSelction;
  }
  else if (num === 3) {
    computerSelction = "s";
    return computerSelction;
  }
}

function compare(random, choice) {
  if ((random === "r" && choice === "p") || (random === "p" && choice === "s") || (random === "s" && choice === "r")) {
    won = true;
    return won;
  } else if ((random === "p" && choice === "r") || (random === "s" && choice === "p") || (random === "r" && choice === "s")) {
    won = false;
    return won;
  }
}

function displayButtons(choice, random) {

  $(".gameColBottom1").append('<h3>You picked</h3>');
  $("." + choice).detach().appendTo(".gameColBottom1");

  $(".gameCol3").append('<button class="btn btn-light">play again</button>');

  $(".gameColBottom2").append('<h3>The house picked</h3>');
  $("." + random).detach().appendTo(".gameColBottom2");

  $(".game").css({'width' : '100%',
'background' : 'none',});
  $(".buttons").css({
    'width' : '300px',
    'height' : '300px',
    'margin' : '0',
    'margin-top' : '50px',
  });
  $(".gameCol3").css({
    'margin-top' : '18%',
    'text-transform' : 'uppercase',
  });
  $(".gameColBottom1").css({
    'font-size' : '0.8rem',
    'letter-spacing': '2px',
    'margin-top' : '20px',
  });
  $(".gameColBottom2").css({
    'font-size' : '0.8rem',
    'letter-spacing': '2px',
    'margin-top' : '20px',
  });
}

function winnerBackground(choice) {
  $("." + choice).addClass("blur");
  $(".buttons").css("z-index", "-1");
}
