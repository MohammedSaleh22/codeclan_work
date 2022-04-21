document.addEventListener('DOMContentLoaded', () => {
    console.log("JS Loaded")

    const newItemForm = document.querySelector('#new-item-form')
    newItemForm.addEventListener('submit', handelFormSubmit)
})

const handelFormSubmit = function(event){
    event.preventDefault()
    
    const readinglistItem = createReadingListItem(event.target)
    const readingList = document.querySelector('#reading-list')
    readingList.appendChild(readinglistItem)
}

const createReadingListItem = function(formData){
    const readinglistItem = document.createElement('li')
    readinglistItem.classList.add('reading-list-item')

    const car = document.createElement('h2')
    car.textContent = formData.car.value
    readinglistItem.appendChild(car)

    const year = document.createElement('h3')
    year.textContent = formData.year.value
    readinglistItem.appendChild(year)

    const colour = document.createElement('h4')
    colour.textContent = formData.colour.value
    readinglistItem.appendChild(colour)

    const category = document.createElement('h4')
    category.textContent = formData.category.value
    readinglistItem.appendChild(category)

    return readinglistItem

}