document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript has loaded');

  // 1. grab the element
const button = document.querySelector('#button')

// 2. Add event listener (type / click / sumbeit)
button.addEventListener('click', handleButtonClick)

const textInput = document.querySelector('#input')
textInput.addEventListener('input', handleInput)

const select = document.querySelector('#select')
select.addEventListener('change', handleSelectChange)

const form = document.querySelector('#form')
form.addEventListener('submit' , handlelFormSubmit)

});
// 3. function called when event (click) happens
const handleButtonClick = function(){
  const resulteParagraph = document.querySelector('#button-result')
  resulteParagraph.textContent = "The button has definitely been clicked!"
}

const handleInput = function(event){
  const resulteParagraph = document.querySelector('#input-result')
  resulteParagraph.textContent = event.target.value
}

const handleSelectChange = function(event){
  const resulteParagraph = document.querySelector('#select-result')
  resulteParagraph.textContent = "You selected " + event.target.value
}

const handlelFormSubmit = function(event){
  event.preventDefault()
  const resulteParagraph = document.querySelector('#form-result')
  resulteParagraph.textContent = "Your name: " + event.target.first_name.value + " " + event.target.last_name.value
}