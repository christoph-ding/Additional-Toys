// program to display the current day and time in the following format. Go to the editor
// Sample Output : Today is : Friday. 
// Current time is : 4 PM : 50 : 22

var formattedTime = function () {
  var date = new Date();
  var day = date.getDay();
  var hour = date.getHours();
  var minute = date.getMinutes();



  return day + ' ' + hour + ' ' + minute;
}

console.log(formattedTime())


