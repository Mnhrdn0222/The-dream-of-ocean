let $button = document.querySelector('#button')
let $arilah = document.querySelector('.text')
let $slider = document.querySelector('.slider')
let arhiv =['Би баян болмоор байна', 'Би шинэ машинтай болмоор байна', 'Би шинэ жилээр дугуй авмаар байна', 'Би гөлөгтэй болмоор байна', 'Би том болоод мундаг эмч болмоор байна', 'Би шинэ утастай болмоор байна', 'Би IELTS-ийн 8-н оноо авмаар байна']
let $unshih = document.querySelector('.unshih')
let husel =''


const submit =()=> {
    // if($arilah.style.display == 'flex') {
        $arilah.style.display = 'none'
        $slider.style.display = 'block'
    // }
}
$button.addEventListener('click', submit)
$button.addEventListener('click', nemeh)


function oorchlolt() {
    husel = document.querySelector("#text-area").value
}

function nemeh() {
     arhiv = [...arhiv, husel]
}

function haruulah() {
    const random = Math.floor(Math.random() * arhiv.length);
    alert(arhiv[random]);
    console.log(arhiv[random]);
}



