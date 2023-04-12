let image = document.querySelector('#image')
let txt = document.querySelector('#txt')
let btn = document.querySelector('#btn')

let firstStart = false

let quotes = [
    'Hравится - скажи. ',
    'Не понятно - спроси.',
    'Хочешь что-то - Попроси.',
    'Хочешь быть понятым - Объясни.',
    'Простые истины понять сложнее. А ещё они легко забываются.',
]

const check = () =>{
    firstStart = true
    image.style.display = 'none'
    txt.style.display = 'block'
}

btn.addEventListener('click', ()=>{
    if(firstStart == false) check()

    let randFloat = Math.random()
    let randFormat = randFloat * quotes.length
    let randInt = Math.floor(randFormat)

    let randArray = quotes[randInt]

    txt.innerText = randArray
})
