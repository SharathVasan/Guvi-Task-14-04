// Create a request instance
var req = new XMLHttpRequest();
// Initiate a Connection or create a connection
req.open('GET', 'https://restcountries.eu/rest/v2/all/' , true);
//Sending the Request
req.send();
//Load the Function
req.onload = function () { // This function will be only triggered when the data has been received successfully
var data = JSON.parse(this.response) ;
for (var i in data){
    console.log(data[i].name);
}
console.log(data);
}