

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(process.env.DARK_SKY_TOKEN)
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    fetch('/weather?address=' + search.value).then(response => {
        response.json().then(data => {
            if (data.error) {
                console.log(data.error)
                messageOne.textContent = 'Invalid Address'
                messageTwo.textContent = ''
            }
            else {
                console.log(data.location)
                console.log(data.forecast)
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast


            }
        })
    })
})