// filter

$('.modalFilterbtn').click(function () {
  $('.filterModal').toggle()
})

$('.accentVButton').click(function () {
  $('.accentModal').toggle()
})

$('.modalFilterbtn').click(function () {
  $('#mymodal2').modal({ show: true })
})

$('.accentVButton').click(function () {
  $('#mymodal3').modal({ show: true })
})

$('#il2, #il3, #il4').click(function () {
  $('#mymodal4').modal({ show: true })
})

$('.modalFilterbtn,#modalclose2').click(function () {
  // $(".fabricModal").addClass("bd-example-modal-lg");
  $('.modalpull').toggleClass('modalpullRight')
  // $(".modal-dialog").addClass("modal-lg");
  // $(".modal-dialog").toggleClass("modal-lg");
})

$('#modalclose1').click(function () {
  $('#mymodal2').modal('hide')
  $('.modalpull').removeClass('modalpullRight')
})

var allCheckboxes = document.querySelectorAll('input[type=checkbox]')
var allRadio = document.querySelectorAll('input[type=radio]')
var allfilter = Array.from(document.querySelectorAll('.filter'))
var checked = {}

getChecked('type')
getChecked('color')
getChecked('material')
getChecked('pattern')
getChecked('season')

Array.prototype.forEach.call(allCheckboxes, function (el) {
  el.addEventListener('change', toggleCheckbox)
})
Array.prototype.forEach.call(allRadio, function (el) {
  el.addEventListener('change', toggleCheckbox)
})
function toggleCheckbox(e) {
  getChecked(e.target.name)
  setVisibility()
}

function getChecked(name) {
  checked[name] = Array.from(
    document.querySelectorAll('input[name=' + name + ']:checked')
  ).map(function (el) {
    return el.value
  })
}

function setVisibility() {
  allfilter.map(function (el) {
    var type = checked.type.length
      ? _.intersection(Array.from(el.classList), checked.type).length
      : true
    var color = checked.color.length
      ? _.intersection(Array.from(el.classList), checked.color).length
      : true
    var material = checked.material.length
      ? _.intersection(Array.from(el.classList), checked.material).length
      : true
    var pattern = checked.pattern.length
      ? _.intersection(Array.from(el.classList), checked.pattern).length
      : true
    var season = checked.season.length
      ? _.intersection(Array.from(el.classList), checked.season).length
      : true
    if (type && color && material && pattern && season) {
      el.style.display = 'block'
    } else {
      el.style.display = 'none'
    }
  })
}

function filterreset(el) {
  var items = document.getElementsByClassName('checkitem')
  var imgitems = document.getElementsByClassName('filter')
  for (var i = 0; i < items.length; i++) {
    if (items[i].type == 'checkbox' || items[i].type == 'radio')
      items[i].checked = false
  }
  for (var j = 0; j < imgitems.length; j++) {
    imgitems[j].style.display = 'block'
  }
}
