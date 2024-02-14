let counterUp = document.querySelectorAll('.CounterUp');

let myArray=Array.from(counterUp)

myArray.map((item)=>{
    let counter=0;

    function count(){
        counter++;
        item.innerHTML=counter;
        if (counter==item.dataset.number) {
            clearInterval(end);            
        }
    }
    
    let end = setInterval(count,1000/item.dataset.speed);
})