const cookie = document.getElementById('cookie');
let temp = document.getElementsByClassName('temp');
console.log(temp);

function removeCookie() {
    console.log('Remove cookie activated');
    cookie.remove();
}

function tempConversion(element) {
   for(let i = 0; i < temp.length; i++) {
    if (element.value === 'F') {
        temp[i].innerText = Math.round((temp[i].innerText * 1.8) + 32);
        console.log('Temperature changed to C')
       } else if (element.value === 'C') {
        temp[i].innerText = Math.round((temp[i].innerText - 32) * .55);
        console.log('Temperature changed to F')
       } else {
        console.log('Something went wrong')
       };
   }
   return temp;
}