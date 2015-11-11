var obj = document.getElementById('resourceobject');
if (obj) {
  var type = obj.getAttribute('type');
  if (type === 'application/pdf') {
    location.replace(document.getElementById('resourceobject').getAttribute('data'));
  }
}
