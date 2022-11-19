'use strict'

const btnOpen = document.getElementById('open')
const btnClose = document.getElementById('close')
const container = document.querySelector('.container')

btnOpen.addEventListener('click', () => container.classList.add('show-nav'))

btnClose.addEventListener('click', () => container.classList.remove('show-nav'))
