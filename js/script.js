const profileimg = document.getElementById('contactimg').addEventListener('click', displayContacts);
// var id = setInterval(frame, 30);
function displayContacts(){
   document.querySelector('footer .container .row .col-sm  p').style.right = 0;
   document.querySelector('footer .container .row .col-sm  p').style.background = 'rgb(83, 188, 227)';

}

var windows =document.getElementById('callimg').addEventListener('click', hideContacts);
function hideContacts(){
    document.querySelector('footer .container .row .col-sm  p').style.right = '-165px';
    document.querySelector('footer .container .row .col-sm  p').style.background = 'transparent';
}

//     myVar = setInterval(hideContacts, 3000);
// clearInterval(myVar);
// }
