title = document.querySelector('h1')
// title.textContent = 'Hello'
// title.innerHTML = '<strong style="color:red">Hello</strong'
// title.innerText = 'this is shawon'

document.write(title.innerHTML)
document.write("<br>")
document.write(title.innerText)
document.write(title.textContent)

// let a = title.getAttribute('class')
// document.write(a)

title.setAttribute('class', 'heading')
// let a = title.getAttribute('class')
// document.write(a)

link = title.classList.add('heading1')
let a = title.getAttribute('class')
document.write(a)

title.setAttribute('title','highlight')

let image = document.querySelector('img')
console.log(image)


let btn1 = document.querySelector('.tamim')
let btn2 = document.querySelector('.liton')

btn1.addEventListener('click', function(){
  
    image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqElcdFxTkKvVx1gGyiPG7TYgOoVUM02jeag&s"
    
})

btn2.addEventListener("click",()=>{
    image.src = "https://www.biography.com/scientist/albert-einstein/images/albert-einstein-1889-1955-1100x625.jpg"
})
