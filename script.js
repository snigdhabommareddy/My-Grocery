(function () {
    'use strict'
    var forms = document.querySelectorAll('.needs-validation')
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

function test(){
    document.getElementById('coupon-content').style.visibility="visible"
}

function closeDiv(){
    document.getElementById('coupon-content').style.visibility="hidden"
}

function mode(){
  var bodychange=document.body;
  bodychange.classList.toggle('mybody');
}