const profileimg = document.getElementById('contactimg').addEventListener('click', displayContacts);

function displayContacts(){
   document.querySelector('footer .container .row .col-sm  p').style.right = 0;
   document.querySelector('footer .container .row .col-sm  p').style.background = 'rgb(83, 188, 227)';

}

var windows =document. getElementById('contactimg').addEventListener('click', hideContacts);
function hideContacts(){
    document.querySelector('footer .container .row .col-sm  p').style.left = 40;
    // document.querySelector('footer .container .row .col-sm  p').style.background = 'none';
}