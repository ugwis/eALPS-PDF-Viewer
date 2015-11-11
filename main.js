var obj = document.getElementById('resourceobject');
if (obj) {
  var type = obj.getAttribute('type');
  if (type === 'application/pdf') {
    location.href = document.getElementById('resourceobject').getAttribute('data');
  }
}
