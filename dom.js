

document.addEventListener('click', function(){


    let r = Math.floor(Math.random() * 255).toString(16)
    let g = Math.floor(Math.random() * 255).toString(16)
    let b = Math.floor(Math.random() * 255).toString(16)
    let value = document.querySelector("#")
   

    let rbg = `#${r}${g}${b}`
    console.log(rbg)

    document.body.style.backgroundColor = rbg
    




})