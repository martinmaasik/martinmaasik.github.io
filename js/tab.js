var url = 'http://martinmaasik.github.io/system.json';
var j = [];
$.ajax({
  type: 'GET',
  url: url,
  dataType: 'json',
  success: function(data) { j = data;},
  async: false
});
alert(j.Users[0].Name);

// function change_myselect(sel) {
//   var obj, dbParam, xmlhttp, myObj, x, txt = "";
//   obj = { table: sel, limit: 20 };
//   dbParam = JSON.stringify(obj);
//   xmlhttp = new XMLHttpRequest();
//   xmlhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       myObj = JSON.parse(this.responseText);
//       txt += "<table border='1'>"
//       for (x in myObj) {
//         txt += "<tr><td>" + myObj[x].name + "</td></tr>";
//       }
//       txt += "</table>"
//       document.getElementById("demo").innerHTML = txt;
//       }
//     };
//   xmlhttp.open("POST", "json_demo_html_table.php", true);
//   xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//   xmlhttp.send("x=" + dbParam);
// }
