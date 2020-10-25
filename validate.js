function checkLength(event) {
  var elements = event.currentTarget;
  var wName = elements[0].value;


  var w_characters = document.getElementById("w_characters");
  w_characters.innerHTML = "";

  var lengthOfWatchlist = wName.length;

  lengthOfWatchlist = 15 - wName.length;

  if (lengthOfWatchlist < 0) {
    lengthOfWatchlist = 0;

  }

  var textNode = "";
  textNode = document.createTextNode(lengthOfWatchlist + " Characters left");
  w_characters.appendChild(textNode);
  w_characters.setAttribute("style", "color: green");
}

function Signup(event) {




  var elements = event.currentTarget;
  var fName = elements[0].value;
  var lName = elements[1].value;
  var userid = elements[2].value;
  var img = elements[3].value;
  var email = elements[4].value;
  var password = elements[5].value;
  var pass_con = elements[6].value;


  var regex_email = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  var regex_pswd = /^(?=\S*[a-zA-Z])(?=\S*\d)(?=\S*[^\w\s])\S{8,}$/;





  var msgemail = document.getElementById("msgemail");
  var msgpass = document.getElementById("msgpass");
  var msgcon = document.getElementById("msgcon");

  msgemail.innerHTML = "";
  msgpass.innerHTML = "";
  msgcon.innerHTML = "";

  for (var i = 0; i < 7; i++) {
    elements[i].classList.remove("errMsg");

  }



  var result = true;
  var empty = true;

  var textNode;


  if (fName == null || fName == "") {
    elements[0].classList.add("errMsg");
    result = false;
    empty = false;
  }

  if (lName == null || lName == "") {
    elements[1].classList.add("errMsg");
    result = false;
    empty = false;

  }



  if (userid == null || userid == "") {
    elements[2].classList.add("errMsg");
    result = false;
    empty = false;

  }

  if (img == null || img == "") {
    elements[3].classList.add("errMsg");
    result = false;
    empty = false;

  }

  if (email == null || email == "") {
    elements[4].classList.add("errMsg");
    result = false;
    empty = false;

  } else if (regex_email.test(email) == false) {
    elements[4].classList.add("errMsg");
    textNode = document.createTextNode(" Email address wrong format.");
    msgemail.appendChild(textNode);
    msgemail.setAttribute("style", "color: red");

    result = false;
  }


  if (password == null || password == "") {
    elements[5].classList.add("errMsg");
    elements[6].classList.add("errMsg");

    result = false;
    empty = false;


  } else if (password.length < 8) {
    elements[5].classList.add("errMsg");
    elements[6].classList.add("errMsg");

    textNode = document.createTextNode(" Min is 8 characters.");
    msgpass.appendChild(textNode);
    msgpass.setAttribute("style", "color: red");

    result = false;
  }

  if (regex_pswd.test(password) == false) {
    textNode = document.createTextNode(" Atleast one number and special character.");
    msgpass.appendChild(textNode);
    msgpass.setAttribute("style", "color: red");

    result = false;
  }



  if (password != pass_con) {
    elements[6].classList.add("errMsg");

    textNode = document.createTextNode(" Passwords donot match");
    msgcon.appendChild(textNode);
    msgcon.setAttribute("style", "color: red");
    result = false;
  }


  var comment = document.getElementById("comment_info");
  comment.innerHTML = "";
  if (result === true) {

  } else {
    event.preventDefault();

    if (empty == false) {
      textNode = document.createTextNode("Required Fields");
      comment.appendChild(textNode);

      comment.setAttribute("style", "color: red");
    }
  }

}







//---------------login--------------------------------


function loginform(event) {


  var elements = event.currentTarget;

  var email = elements[0].value;
  var password = elements[1].value;

  var regex_email = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  var regex_pswd = /^(?=\S*[a-zA-Z])(?=\S*\d)(?=\S*[^\w\s])\S{8,}$/;




  var l_emailmsg = document.getElementById("l_emailmsg");
  var l_passmsg = document.getElementById("l_passmsg");

  l_emailmsg.innerHTML = "";
  l_passmsg.innerHTML = "";


  for (var i = 0; i < 2; i++) {
    elements[i].classList.remove("errMsg");

  }

  var result = true;
  var empty = true;


  var textNode;




  if (email == null || email == "") {
    elements[0].classList.add("errMsg");
    result = false;
    empty = false;

  } else if (regex_email.test(email) == false) {
    elements[0].classList.add("errMsg");
    textNode = document.createTextNode("Email address wrong format.");
    l_emailmsg.appendChild(textNode);
    l_emailmsg.setAttribute("style", "color: red");

    result = false;
  }


  if (password == null || password == "") {
    elements[1].classList.add("errMsg");
    empty = false;

    result = false;

  } else if (password.length < 8) {
    elements[1].classList.add("errMsg");

    textNode = document.createTextNode(" Min. is 8 characters.");
    l_passmsg.appendChild(textNode);
    l_passmsg.setAttribute("style", "color: red");

    result = false;
  }

  if (regex_pswd.test(password) == false) {
    textNode = document.createTextNode(" Atleast one number and special character.");
    l_passmsg.appendChild(textNode);
    l_passmsg.setAttribute("style", "color: red");

    result = false;
  }









  var l_comment = document.getElementById("l_comment");
  l_comment.innerHTML = "";


  if (result == true) {

  } else {
    event.preventDefault();

    if (empty == false) {
      textNode = document.createTextNode("Required Fields");
      l_comment.appendChild(textNode);

      l_comment.setAttribute("style", "color: red");
    }
  }

}



//-------------watchlist----------------------------------------------------

function watchlistform(event) {



  var elements = event.currentTarget;

  var wName = elements[0].value;


  var w_comment = document.getElementById("w_comment");


  w_comment.innerHTML = "";


  for (var i = 0; i < 1; i++) {
    elements[i].classList.remove("errMsg");

  }




  var result = true;
  var empty = true;


  var textNode;







  if (wName == null || wName == "") {
    elements[0].classList.add("errMsg");
    result = false;
    empty = false;
  }


  if (wName.length > 15) {
    elements[1].classList.add("errMsg");

    textNode = document.createTextNode("Max. is 15 characters.");
    w_comment.appendChild(textNode);
    w_comment.setAttribute("style", "color: red");
    result = false;
  }


  if (result == true) {

  } else {
    event.preventDefault();
    if (empty == false) {
      textNode = document.createTextNode("  Required Fields");
      w_comment.appendChild(textNode);

      w_comment.setAttribute("style", "color: red");
    }

  }


}


//----------------------homepage---------------------------------------------------


function Searchfun(event) {




  var elements = event.currentTarget;

  var searchdata = elements[0].value;


  var msgsearch = document.getElementById("msgsearch");

  msgsearch.innerHTML = "";

  for (var i = 0; i < 1; i++) {
    elements[i].classList.remove("errMsg");

  }



  var result = true;


  var textNode;




  if (searchdata == null || searchdata == "") {
    elements[0].classList.add("errMsg");


    textNode = document.createTextNode("Required field");
    msgsearch.appendChild(textNode);
    msgsearch.setAttribute("style", "color: red");

    result = false;
  }




  if (result == true) {

  } else {
    event.preventDefault();
  }


}
