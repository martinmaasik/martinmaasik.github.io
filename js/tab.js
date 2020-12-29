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
