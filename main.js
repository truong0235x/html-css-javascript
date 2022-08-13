// slider 1
const angleLeft = document.getElementsByClassName("angle-left")[0]
const angleRight = document.getElementsByClassName("angle-right")[0]
const slider = document.getElementsByClassName("slider")[0]
const sliderItem = document.getElementsByClassName("slider-item")
const itemContent = document.getElementsByClassName("slider-item-content-wrap")
const dot = document.getElementsByClassName("slider-dot-item")

const arrSliderItem = [...sliderItem]
const arrItemContent = [...itemContent]
const arrDot = [...dot]


let translateX = 0
let index = 0

function handleAngleLeft() {
    clearInterval(sliderMove)
    sliderMove = setInterval(handleMoveSlider, 6000);
    arrItemContent[index].className = "slider-item-content-wrap text-out"
    arrSliderItem[index].className = "slider-item slider-out"
    index--
    translateX = translateX + slider.offsetWidth
    if (index === -1) {
        translateX = -1 * slider.offsetWidth * 6
        index = 6
    }
    slider.style = `transform: translateX(${translateX}px);`

    arrDot.forEach(a => a.style = "width: 10px; background-color: hsla(0,0%,100%,.6);")
    arrDot[index].style = "width: 24px; background-color: white;"
    arrSliderItem.forEach((item, b) => {
        if (b === index) {
            item.className = "slider-item slider-in"
        } else {
            setTimeout(() => {
                item.className = "slider-item"
            }, 200);
        }
    })
    arrItemContent.forEach((item, b) => {
        if (b === index) {
            item.className = "slider-item-content-wrap text-in"
        } else {
            setTimeout(() => {
                item.className = "slider-item-content-wrap"
            }, 200);
        }
    })
    angleLeft.removeEventListener('click', handleAngleLeft)
    setTimeout(() => {
        angleLeft.addEventListener('click', handleAngleLeft)
    },1300)
}
function handleAngleRight() {
    clearInterval(sliderMove)
    sliderMove = setInterval(handleMoveSlider, 6000);
    arrItemContent[index].className = "slider-item-content-wrap text-out"
    arrSliderItem[index].className = "slider-item slider-out"

    index++
    translateX = translateX - slider.offsetWidth
    if (index === sliderItem.length) {
        translateX = 0
        index = 0
    }
    slider.style = `transform: translateX(${translateX}px);`;

    arrDot.forEach(a => a.style = "width: 10px; background-color: hsla(0,0%,100%,.6);")
    arrDot[index].style = "width: 24px; background-color: white;"
    arrSliderItem.forEach((item, b) => {
        if (b === index) {
            item.className = "slider-item slider-in"
        } else {
            setTimeout(() => {
                item.className = "slider-item"
            }, 200);
        }
    })
    arrItemContent.forEach((item, b) => {
        if (b === index) {
            item.className = "slider-item-content-wrap text-in"
        } else {
            setTimeout(() => {
                item.className = "slider-item-content-wrap"
            }, 200);
        }
    })
    angleRight.removeEventListener('click', handleAngleRight)
    setTimeout(() => {
        angleRight.addEventListener('click', handleAngleRight)
    },1300)
}

angleLeft.addEventListener('click', handleAngleLeft)
angleRight.addEventListener('click', handleAngleRight)

function handleDot(ind) {
    clearInterval(sliderMove)
    sliderMove = setInterval(handleMoveSlider, 6000);
    arrItemContent[index].className = "slider-item-content-wrap text-out"
    arrSliderItem[index].className = "slider-item slider-out"

    arrDot.forEach(a => a.style = "width: 10px; background-color: hsla(0,0%,100%,.6);")

    index = ind

    arrDot[ind].style = "width: 24px; background-color: white;"

    translateX = -1 * slider.offsetWidth * index

    slider.style = `transform: translateX(${translateX}px);`
    arrSliderItem.forEach((a, b) => {
        if (b === index) {
            a.className = "slider-item slider-in"
        } else {
            setTimeout(() => {
                a.className = "slider-item"
            }, 200);
        }
    })
    arrItemContent.forEach((a, b) => {
        if (b === index) {
            a.className = "slider-item-content-wrap text-in"
        } else {
            setTimeout(() => {
                a.className = "slider-item-content-wrap"
            }, 200);
        }
    })

    arrDot.forEach(a => {
        a.onclick = ""
    })
    setTimeout(()=>{
        arrDot.forEach((item, b) => {
            item.onclick = () => handleDot(b)
        })
        arrDot[ind].onclick = ""
    },1300)
}

arrDot.forEach((item, ind) => {
    item.onclick = () => handleDot(ind)
})

function handleMoveSlider() {
    angleLeft.removeEventListener('click', handleAngleLeft)
    angleRight.removeEventListener('click', handleAngleRight)

    setTimeout(()=> {
        angleLeft.addEventListener('click', handleAngleLeft)
        angleRight.addEventListener('click', handleAngleRight)
    },1300)

    arrItemContent[index].className = "slider-item-content-wrap text-out"
    arrSliderItem[index].className = "slider-item slider-out"

    arrDot.forEach(a => a.style = "width: 10px; background-color: hsla(0,0%,100%,.6);")

    index++

    if (index === sliderItem.length) {
        translateX = 0
        index = 0
    }

    arrDot[index].style = "width: 24px; background-color: white;"

    translateX = -1 * slider.offsetWidth * index
    slider.style = `transform: translateX(${translateX}px);`

    arrSliderItem.forEach((a, b) => {
        if (b === index) {
            a.className = "slider-item slider-in"
        } else {
            setTimeout(() => {
                a.className = "slider-item"
            }, 200);
        }
    })
    arrItemContent.forEach((a, b) => {
        if (b === index) {
            a.className = "slider-item-content-wrap text-in"
        } else {
            setTimeout(() => {
                a.className = "slider-item-content-wrap"
            }, 200);
        }
    })
}

let sliderMove = setInterval(handleMoveSlider, 6000);

// slider 2 
const gameNew = document.getElementsByClassName('game-new')[0]
const anglePrev = document.getElementsByClassName('angle-prev')[0]
const angleNext = document.getElementsByClassName('angle-next')[0]
const sliderGame = document.getElementsByClassName('game-new-slider-item')
const dotSliderGame = document.getElementsByClassName('dot-slider-game-item')

const arrDotSliderGame = [...dotSliderGame]
const arrSliderGame = [...sliderGame]

let indexSlider = 0
let left = 0
let right = 0

function handleAnglePrev() {
    clearInterval(sliderMoveGame)
    sliderMoveGame = setInterval(handleMoveSliderGame, 6000)
    indexSlider--
    if(indexSlider === -1) {
        indexSlider = 4
    }
    left = indexSlider - 1
    if (left === -1) {
        left = 4
    }
    right = indexSlider + 1
    if(right === 5) {
        right = 0
    }
    if(right === -1) {
        right = 4
    }

    arrDotSliderGame.forEach(item => item.style = "background-color: hsla(0,0%,100%,.6); width: 10px;")
    arrSliderGame.forEach(item => item.className = "game-new-slider-item")

    gameNew.style = `background-image: linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4)),url("./anh/img-${indexSlider}.jpg");`
    arrDotSliderGame[indexSlider].style = "background-color: white; width: 24px;"

    arrSliderGame[left].className = "game-new-slider-item slider-left prev-animation-left"
    arrSliderGame[indexSlider].className = "game-new-slider-item slider-mid prev-animation-mid"
    arrSliderGame[right].className = "game-new-slider-item slider-right prev-animation-right"

    anglePrev.removeEventListener('click', handleAnglePrev)
    setTimeout(() => {
        anglePrev.addEventListener('click', handleAnglePrev)
    }, 500);
}
function handleAngleNext() {
    clearInterval(sliderMoveGame)
    sliderMoveGame = setInterval(handleMoveSliderGame, 6000)
    indexSlider++
    if(indexSlider === 5) {
        indexSlider = 0
    }
    left = indexSlider - 1
    if (left === -1) {
        left = 4
    }
    right = indexSlider + 1
    if(right === 5) {
        right = 0
    }
    if(right === -1) {
        right = 4
    }

    arrDotSliderGame.forEach(item => item.style = "background-color: hsla(0,0%,100%,.6); width: 10px;")
    arrSliderGame.forEach(item => item.className = "game-new-slider-item")

    gameNew.style = `background-image: linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4)),url("./anh/img-${indexSlider}.jpg");`
    arrDotSliderGame[indexSlider].style = "background-color: white; width: 24px;"

    arrSliderGame[left].className = "game-new-slider-item slider-left next-animation-left"
    arrSliderGame[indexSlider].className = "game-new-slider-item slider-mid next-animation-mid"
    arrSliderGame[right].className = "game-new-slider-item slider-right next-animation-right"

    angleNext.removeEventListener('click', handleAngleNext)
    setTimeout(() => {
        angleNext.addEventListener('click', handleAngleNext)
    }, 500);
}

function handleMoveSliderGame() {  
    anglePrev.removeEventListener('click', handleAnglePrev)
    angleNext.removeEventListener('click', handleAngleNext)

    setTimeout(()=> {
        anglePrev.addEventListener('click', handleAnglePrev)
        angleNext.addEventListener('click', handleAngleNext)
    },500)

    indexSlider++

    if(indexSlider === 5) {
        indexSlider = 0
    }
    left = indexSlider - 1
    if (left === -1) {
        left = 4
    }
    right = indexSlider + 1
    if(right === 5) {
        right = 0
    }
    if(right === -1) {
        right = 4
    }

    arrDotSliderGame.forEach(item => item.style = "background-color: hsla(0,0%,100%,.6); width: 10px;")
    arrSliderGame.forEach(item => item.className = "game-new-slider-item")

    gameNew.style = `background-image: linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)),url("./anh/img-${indexSlider}.jpg");`
    arrDotSliderGame[indexSlider].style = "background-color: white; width: 24px;"

    arrSliderGame[left].className = "game-new-slider-item slider-left next-animation-left"
    arrSliderGame[indexSlider].className = "game-new-slider-item slider-mid next-animation-mid"
    arrSliderGame[right].className = "game-new-slider-item slider-right next-animation-right"
}

let sliderMoveGame = setInterval(handleMoveSliderGame, 6000)
anglePrev.addEventListener('click', handleAnglePrev)
angleNext.addEventListener('click', handleAngleNext)

// play video
const urlVideo = [
    "https://www.youtube.com/embed/iWlPG3OD3dQ",
    "https://www.youtube.com/embed/RAsLeNPXedQ",
    "https://www.youtube.com/embed/A5FKktZ1iI0",
    "https://www.youtube.com/embed/9U64fi24U6Y",
    "https://www.youtube.com/embed/mDb5b2NwyvI"
]

const iframe = document.getElementById('iframe')
const gameNewVideo = document.getElementsByClassName("game-new-video")[0]
const closeVideo = document.getElementsByClassName("game-new-video-close")[0]
const body = document.getElementsByTagName('body')[0]

function handlePlayVideo(index) {
    iframe.src = urlVideo[index]
    body.style = "overflow-y: hidden;"
    gameNewVideo.style = "display: flex;"
}
closeVideo.addEventListener('click', function () {
    gameNewVideo.style = "display: none;"
    body.style = "overflow-y: scroll;"
    iframe.src = `${urlVideo[index]}?rel=0`
})
gameNewVideo.addEventListener('click', function () {
    gameNewVideo.style = "display: none;"
    body.style = "overflow-y: scroll;"
    iframe.src = `${urlVideo[index]}?rel=0`
})

// lên đầu trang
const scr = document.getElementsByClassName('scroll')[0]

body.onscroll = function () {
    if (window.scrollY > 300) {
        scr.style = "visibility: visible;"
    } else {
        scr.style = "visibility: hidden;"
    }
}

scr.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' })
})

// Nền sáng tối Nền tảng Garena
const nenSang = document.getElementsByClassName('nentang-mobile-icon-sang')[0]
const nenToi = document.getElementsByClassName('nentang-mobile-icon-toi')[0]

const iconNenSang = document.getElementsByClassName('icon-nensang')[0]
const iconNenToi = document.getElementsByClassName('icon-nentoi')[0]

const textNenSang = document.getElementsByClassName('text-nensang')[0]
const textNenToi = document.getElementsByClassName('text-nentoi')[0]

const imageNenSang = document.getElementsByClassName('nentang-mobile-img-sang')[0]
const imageNenToi = document.getElementsByClassName('nentang-mobile-img-toi')[0]

textNenSang.style = "color: #f94646"
iconNenSang.style = "color: white; background-color: #f94646"

function handleClickIconSun() {
    clearInterval(setIntervalChuyenMan)
    setIntervalChuyenMan = setInterval(chuyenManSangToi,8000)

    textNenSang.style = "color: #f94646"
    iconNenSang.style = "color: white; background-color: #f94646"

    textNenToi.style = "color: #b4b9c0;"
    iconNenToi.style = "color: #b4b9c0; background-color: white"

    imageNenSang.style = "opacity: 1"
    imageNenToi.style = "opacity: 0"
}
function handleClickIconMun() {
    clearInterval(setIntervalChuyenMan)
    setIntervalChuyenMan = setInterval(chuyenManSangToi,8000)

    textNenToi.style = "color: #f94646"
    iconNenToi.style = "color: white; background-color: #f94646"

    textNenSang.style = "color: #b4b9c0;"
    iconNenSang.style = "color: #b4b9c0; background-color: white"

    imageNenSang.style = "opacity: 0"
    imageNenToi.style = "opacity: 1"
}

function chuyenManSangToi() {
    if(textNenSang.style.color == "rgb(249, 70, 70)"){
        handleClickIconMun()
    } else {
        handleClickIconSun()
    }
}

let setIntervalChuyenMan = setInterval(chuyenManSangToi,8000)
nenSang.addEventListener("click",handleClickIconSun)
nenToi.addEventListener("click",handleClickIconMun)

// nen tang pc

const nenTangPcIconGame = document.getElementsByClassName('nentang-pc-icon-game')[0]
const nenTangPcIconMic = document.getElementsByClassName('nentang-mobile-icon-toi')[0]

const iconGame = document.getElementsByClassName('icon-game')[0]
const iconMic = document.getElementsByClassName('icon-mic')[0]

const textGame = document.getElementsByClassName('text-game')[0]
const textMic = document.getElementsByClassName('text-mic')[0]

const nenTangSlider = document.getElementsByClassName('nentang-pc-slider')[0]
const sliderGamePC = document.getElementsByClassName('nentang-pc-slider-wrap')[0]

const imgGame = document.getElementsByClassName('nentang-pc-slider-wrap-img')

textGame.style = "color: #f94646"
iconGame.style = "color: white; background-color: #f94646"
let translateNenTang = 0

function handleClickIconGame() {
    if(textGame.style.color == "rgb(249, 70, 70)") {
        return;
    }

    clearInterval(setIntervalGamePC)
    setIntervalGamePC = setInterval(gamePC,8000)

    iconMic.removeEventListener("click", handleClickIconMic)
    iconGame.removeEventListener("click", handleClickIconGame)

    textGame.style = "color: #f94646"
    iconGame.style = "color: white; background-color: #f94646"

    textMic.style = "color: #b4b9c0;"
    iconMic.style = "color: #b4b9c0; background-color: white"

    imgGame[0].className = "nentang-pc-slider-wrap-img presently"
    imgGame[0].style = "width: 840px; flex: 1 0 100%"
    
    imgGame[1].className = "nentang-pc-slider-wrap-img"
    setTimeout(() =>{
        imgGame[1].style = "width: 0px; flex: 0"
        iconMic.addEventListener("click", handleClickIconMic)
        iconGame.addEventListener("click", handleClickIconGame)
    },1000)
}
function handleClickIconMic() {
    if(textMic.style.color == "rgb(249, 70, 70)") {
        return;
    }

    clearInterval(setIntervalGamePC)
    setIntervalGamePC = setInterval(gamePC,8000)

    iconGame.removeEventListener("click", handleClickIconGame)
    iconMic.removeEventListener("click", handleClickIconMic)

    textMic.style = "color: #f94646"
    iconMic.style = "color: white; background-color: #f94646"

    textGame.style = "color: #b4b9c0;"
    iconGame.style = "color: #b4b9c0; background-color: white"

    imgGame[1].className = "nentang-pc-slider-wrap-img"
    imgGame[1].style = "width: 840px; flex: 1 0 100%"

    imgGame[0].className = "nentang-pc-slider-wrap-img hide"
    setTimeout(() =>{
        imgGame[0].style = "width: 0px; flex: 0"
        iconGame.addEventListener("click", handleClickIconGame)
        iconMic.addEventListener("click", handleClickIconMic)
    },1000)
}

iconGame.addEventListener("click", handleClickIconGame)
iconMic.addEventListener("click", handleClickIconMic)

function gamePC() {
    if(textGame.style.color == "rgb(249, 70, 70)"){
        handleClickIconMic()
    } else {
        handleClickIconGame()
    }
}
let setIntervalGamePC = setInterval(gamePC,8000)
// select Quốc gia
const quocGia = document.getElementsByClassName('quocgia')[0]
const selectItem = document.getElementsByClassName('select-item')[0]
const selectItemChild = document.getElementsByClassName('select-item-child')
const selectValueIcon = document.getElementsByClassName('select-value-icon')[0]
const selectValueText = document.getElementsByClassName('select-value-text')[0]


function handleOpenSelectItem() {
    if(!selectItem.style.visibility || selectItem.style.visibility == "hidden") {
        selectItem.style = "visibility: visible;"
        selectValueIcon.style = "transform: rotate(180deg);"

    } else {
        selectItem.style = "visibility: hidden"
        selectValueIcon.style = "transform: rotate(0deg);"
    }
}

function handleChooseValue(e) {
    selectValueText.innerHTML=e.target.innerHTML
}

[...selectItemChild].forEach(item=> item.addEventListener("click", handleChooseValue))

quocGia.addEventListener("click",handleOpenSelectItem)

