var action = false,
  clicked = false
var Owl = {
  init: function () {
    Owl.carousel()
  },

  carousel: function () {
    var owl
    var el = document.getElementsByClassName('owl-item')
    var elBtn = document.getElementsByClassName('owlPrev')
    $(document).ready(function () {
      owl = $('.owlCarousel').owlCarousel({
        items: 1,
        center: true,
        nav: false,
        dots: true,
        margin: 10,
        mouseDrag: false,
        touchDrag: false,
        dotsContainer: '.test',
        navText: ['prev', 'next'],
      })

      $('.owlNext').on('click', function () {
        owl.trigger('next.owl.carousel', 500)
      })

      $('.owlPrev').on('click', function () {
        owl.trigger('prev.owl.carousel', 500)
      })

      $('.progress-reports-bar').on('click', 'li', function (e) {
        owl.trigger('to.owl.carousel', [$(this).index(), 300])
      })

      function hasClass(elem, className) {
        return new RegExp(' ' + className + ' ').test(
          ' ' + elem.className + ' '
        )
      }

      $('.owlNext , .progress-reports-bar , .owlPrev').click(function () {
        app.modalFunction()
        if (hasClass(el[0], 'active')) {
          // $('.backCarousel').hide().removeClass('activeC')
          // $('.frontCarousel').show().addClass('activeC')
          $('.bar1').addClass('active')
          $('.bar2 , .bar3 , .bar4 , .bar5 , .bar6, .bar7, .bar8').removeClass(
            'active'
          )
        } else if (hasClass(el[1], 'active')) {
          $('.bar1 , .bar2').addClass('active')
          $('.bar3 , .bar4 , .bar5 , .bar6, .bar7, .bar8, .bar9').removeClass(
            'active'
          )
        } else if (hasClass(el[2], 'active')) {
          $('.bar1 , .bar2 , .bar3 ').addClass('active')
          $('.bar4 , .bar5 , .bar6, .bar7, .bar8, .bar9').removeClass('active')
        } else if (hasClass(el[3], 'active')) {
          $('.bar1 , .bar2 , .bar3 , .bar4').addClass('active')
          $('.bar5 , .bar6, .bar7, .bar8, .bar9').removeClass('active')
        } else if (hasClass(el[4], 'active')) {
          $('.bar1 , .bar2 , .bar3 , .bar4 , .bar5').addClass('active')
          $('.bar6, .bar7, .bar8, .bar9').removeClass('active')
        } else if (hasClass(el[5], 'active')) {
          $('.bar1 , .bar2 , .bar3 , .bar4, .bar5, .bar6').addClass('active')
          $('.bar7, .bar8, .bar9').removeClass('active')
        } else if (hasClass(el[6], 'active')) {
          $('.bar1 , .bar2 , .bar3 , .bar4, .bar5, .bar6, .bar7').addClass(
            'active'
          )
          $('.bar8, .bar9').removeClass('active')
        } else if (hasClass(el[7], 'active')) {
          if (document.getElementById('sv2').checked) {
            $(
              '.bar1 , .bar2 , .bar3 , .bar4 , .bar5 , .bar6, .bar7, .bar8 , .bar9'
            ).addClass('active')

            $('.owlNext').hide()
            $('#owlSubmit').show()

            $(function () {
              $('.updateF').click(function () {
                if ($(this).is(':checked')) {
                  $('#owlSubmit').hide()
                  $('#owlUpdate').show()
                }
              })
            })
          } else if (document.getElementById('sv1').checked) {
            $(
              '.bar1 , .bar2 , .bar3 , .bar4 ,.bar5, .bar6, .bar7, .bar8'
            ).addClass('active')
            $('.bar9').removeClass('active')
          }
        } else if (hasClass(el[8], 'active')) {
          $(
            '.bar1 , .bar2 , .bar3 , .bar4 , .bar5 , .bar6, .bar7, .bar8, .bar9'
          ).addClass('active')
          $('.owlNext').hide()
          $('#owlSubmit').show()
          $(function () {
            $('.updateF').click(function () {
              if ($(this).is(':checked')) {
                $('#owlSubmit').hide()
                $('#owlUpdate').show()
              }
            })
          })
        }
      })

      $('#sv2').click(function () {
        $('.owl-item:nth-child(8)').hide()
        $('.progressType8').hide()
        $('.finalSelection:nth-child(9)').hide()
        $('.finalSelection:nth-child(10)').hide()
        $('.cuffstyle').hide()
        $('.progress-reports-bar').on('click', 'li', function (e) {
          owl.trigger('to.owl.carousel', [70])
        })
      })
      $(document).ready(function () {
        $('#sv1').click(function () {
          $('.owl-item:nth-child(8)').show()
          $('.progressType8').show()
          $('.finalSelection:nth-child(9)').show()
          $('.finalSelection:nth-child(10)').show()
          $('.cuffstyle').show()
          $('.progress-reports-bar').on('click', 'li', function (e) {
            $('.progress-reports-bar').on('click', 'li', function (e) {
              owl.trigger('to.owl.carousel', [$(this).index(), 300])
            })
          })
        })
      })

      $('.owlSubmit').click(function () {
        app.modalFunction()
        $('#Mymodal').modal('show')
      })

      $(document).ready(function () {
        $('.progressType').click(function () {
          $('.owlPrev').show()
          $('.owlNext').show()

          $('.owlSubmit').hide()
          $('.updateC').hide()
          app.modalFunction()
          $('.updateF').prop('checked', false)
          if (document.getElementById('sv2').checked) {
            $('#myCarousel').trigger('to.owl.carousel', 7)
          } else {
            $('#myCarousel').trigger('to.owl.carousel', 8)
          }
          $('#owlUpdate').hide()
        })

        $('.updateC').click(function () {
          $('.backCarousel').hide().removeClass('activeC')
          $('.sideCarousel').hide().removeClass('activeC')
          $('.frontCarousel').show().addClass('activeC')
          $('.owlPrev').show()
          $('.owlNext').hide()

          $('.owlSubmit').show()
          $('.updateC').hide()
          app.modalFunction()
          $('.updateF').prop('checked', false)
          if (document.getElementById('sv2').checked) {
            $('#myCarousel').trigger('to.owl.carousel', 7)
          } else {
            $('#myCarousel').trigger('to.owl.carousel', 8)
          }
          $('#owlUpdate').hide()
        })
      })

      $('.model-preview').click(function () {
        if ($('#backPreview').is(':checked')) {
          $('.frontCarousel').hide().removeClass('activeC')
          $('.backCarousel').show().addClass('activeC')
          $('.sideCarousel').hide().removeClass('activeC')
          $('.cuff_multiple:nth-child(1)').show()
          $('.cuff_multiple:nth-child(3)').show()
          $('.cuff_multiple:nth-child(5)').show()
          $('.cuff_multiple:nth-child(6)').show()
          $('.cuff_multiple:nth-child(7)').show()
          $('.cuff_multiple:nth-child(9)').show()
        } else if ($('#frontPreview').is(':checked')) {
          $('.backCarousel').hide().removeClass('activeC')
          $('.frontCarousel').show().addClass('activeC')
          $('.sideCarousel').hide().removeClass('activeC')

          $('.cuff_multiple:nth-child(1)').show()
          $('.cuff_multiple:nth-child(3)').show()
          $('.cuff_multiple:nth-child(5)').show()
          $('.cuff_multiple:nth-child(6)').show()
          $('.cuff_multiple:nth-child(7)').show()
          $('.cuff_multiple:nth-child(9)').show()
        } else if ($('#sidePreview').is(':checked')) {
          $('.backCarousel').hide().removeClass('activeC')
          $('.frontCarousel').hide().removeClass('activeC')
          $('.sideCarousel').show().addClass('activeC')
          $('.cuff_multiple:nth-child(1)').hide()
          $('.cuff_multiple:nth-child(3)').hide()
          $('.cuff_multiple:nth-child(5)').hide()
          $('.cuff_multiple:nth-child(6)').hide()
          $('.cuff_multiple:nth-child(7)').hide()
          $('.cuff_multiple:nth-child(9)').hide()
          document.getElementById('cf2').checked = true
        }
      })

      $('#owlUpdate').click(function () {
        $('.owlPrev').hide()
        $('#owlUpdate').hide()
        $('.owlNext').hide()
        $('#updateC').show()

        if (document.getElementById('collarF').checked) {
          $('#myCarousel').trigger('to.owl.carousel', 1)
        }
        if (document.getElementById('fitF').checked) {
          $('#myCarousel').trigger('to.owl.carousel', 0)
        }
        if (document.getElementById('customcollarF').checked) {
          $('#myCarousel').trigger('to.owl.carousel', 1)
        }

        if (document.getElementById('sleeveF').checked) {
          $('#myCarousel').trigger('to.owl.carousel', 6)
        }

        if (document.getElementById('cuffF').checked) {
          $('#myCarousel').trigger('to.owl.carousel', 7)
        }
        if (document.getElementById('customcuffF').checked) {
          $('#myCarousel').trigger('to.owl.carousel', 7)
        }

        if (document.getElementById('tuckF').checked) {
          $('#myCarousel').trigger('to.owl.carousel', 5)
        }

        if (document.getElementById('chestpocketF').checked) {
          $('#myCarousel').trigger('to.owl.carousel', 2)
        }
        if (document.getElementById('placketF').checked) {
          $('#myCarousel').trigger('to.owl.carousel', 3)
        }
        if (document.getElementById('backpleatF').checked) {
          $('#myCarousel').trigger('to.owl.carousel', 4)
        }
      })

      $('input[type="radio"]').click(function () {
        $('.owlUpdate').hide()
      })
    })

    // if (document.getElementById('frontPreview').checked) {
    //   $('.backCarousel').hide().removeClass('activeC')
    //   $('.frontCarousel').show().addClass('activeC')
    // } else if (document.getElementById('backPreview').checked) {
    //   $('.frontCarousel').hide().removeClass('activeC')
    //   $('.backCarousel').show().addClass('activeC')
    // }
  },
}

//

//owl

$(document).ready(function () {
  Owl.init()
})

//default check

function check() {
  document.getElementById('jfit').firstChild.checked = true
  document.getElementById('jcollar').firstChild.checked = true
  document.getElementById('jcustomcollar').firstChild.checked = true
  document.getElementById('jsleeve').firstChild.checked = true
  document.getElementById('jelbowpatch').firstChild.checked = true
  document.getElementById('jcuff').firstChild.checked = true
  document.getElementById('jcustomcuff').firstChild.checked = true
  document.getElementById('jplacket').firstChild.checked = true
  document.getElementById('jbackpleat').firstChild.checked = true
  document.getElementById('jtuck').firstChild.checked = true
  document.getElementById('jpocket').firstChild.checked = true
}
