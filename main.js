var obj = document.getElementById('resourceobject');
if (obj) {
  var type = obj.getAttribute('type');
  if (type === 'application/pdf') {
    location.replace(obj.getAttribute('data'));
  }
}
