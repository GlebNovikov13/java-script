console.log('Hello from myscript.js')

const c = "abc"
let a = 5
var t = true

function myfunction() {
    console.log(t)
    console.log(a)
    for (let i = 0; i < 10; i++) {
        console.log(i)
    }
    try{
        console.log(i)
    } catch(e){
        //console.log(e)
        console.log('КАКАЯ-ТО ОШИБКА')
    }
    console.log(123213)
    while (true) {
        //alert(1+1)
        break;
    }
    const a1 = 1
    if (a1=='1') {
        console.log('true')
    } else {
        console.log('false')
    }
    const element = document.getElementById('main-container')    
    console.log(element.innerHTML)
    element.innerHTML = "230942890239085"
    document.getElementsByTagName('div')[0].innerHTML = "Hello"
    let increment = '123'
    console.log(parseInt(increment)+(1).toString())

    switch (a1){
        case 1:
            alert('1')
            break;
        case 2:
            alert('2')
            break;
        default:
            alert('default')
            break;
    }
}

myfunction()
