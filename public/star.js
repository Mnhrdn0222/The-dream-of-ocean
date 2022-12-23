

let $button = document.querySelector('#button')
let $arilah = document.querySelector('.text')
let $slider = document.querySelector('.slider')
let arhiv = ['Монголоос зайлмаар байна', 'Сугалаанд ялуулж өгөөч баян болмоор байна', 'Би шинэ жилээр дугуй авмаар байна', 'Би гөлөгтэй болмоор байна', 'Дэлхийн шилдэг компануудын нэгэнд ажилд орноо хэзээ нэг өдөр', 'Утсаа нэг соличих юмсан', 'IELTS-ийн өндөр оноо аваад гайгүй сургуульд орчхийнсон', 'Хүн шиг л амьдарчих юмсандаа', 'Зөв хүнтэй учираад энгийн л амьдармаар байна', 'Маргааш шалгалтаа сайн өгчээсэй', 'Байр машинтай болчуул л болоодоо', 'Megan-fox той нэг болзоод үзчих юмсан']
let $unshih = document.querySelector('.unshih')
let husel = ''
let $open = document.querySelector('.open')


const submit = () => {
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
    swal({
        title: (arhiv[random]),
        text: "Good Luck",

    });;
}


