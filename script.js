let countDown = 10;
let colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#33FFF5', '#FFA533', '#A533FF', '#FF5733', '#57FF33', '#3357FF'];

let setCounter = setInterval(() => {
    countDown--;
    document.body.style.backgroundColor = colors[countDown % colors.length];
    document.body.style.fontSize = "x-large"; 
    document.body.innerHTML = countDown;
    console.log("counter dowin is: " + countDown);
    
    if(countDown === 0) {
        clearInterval(setCounter);
        console.log("finished")
        document.body.innerHTML = "finished";
        setTimeout(() => {
            document.body.style.backgroundColor = "white";
            document.body.innerHTML = "finished";
        }, 2000);
    }
}, 1000);