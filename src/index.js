import './less/index.less'

// Your code goes here!
console.log('hello world');


//load event
window.onload = function (evt) {
    console.log(`event ${evt.type} fired! Ready to go!`)
const heading = document.querySelector("h1")
heading.textContent = "Maybe not so fun after all. "


//copy
window.addEventListener('copy', () => {
    navigator.clipboard.readText()
        .then(text => {
        heading.textContent += text
        })
    })

    document.body.addEventListener('click', evt => {
        evt.target.classList.toggle('mirror')
    })
}



