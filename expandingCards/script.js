'use strict'
const panels = document.querySelectorAll('.panel')

const removeActiveClass = function () {
  panels.forEach(panel => panel.classList.remove('active'))
}

panels.forEach(panel =>
  panel.addEventListener('click', function () {
    removeActiveClass()
    panel.classList.add('active')
  })
)
