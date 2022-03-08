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
    //click
        document.body.addEventListener('click', evt => {
            evt.target.classList.toggle('mirror')
        })
    //dblclick
    document.body.addEventListener('dblclick', evt => {
        evt.target.innerHTML = '';
    })
    
    //keydown 
    window.addEventListener('keydown', evt => {
       if(evt.key == 6) {
           document.body.innerHTML = '<h1>You destroyed this page!</h1>';
       }
    })

    //mousemove
    document.body.addEventListener('mousemove', evt => {
        const { clientX, clientY} = evt;
        console.log(`mouse is at ${clientX}, ${clientY}`);
    })
}



