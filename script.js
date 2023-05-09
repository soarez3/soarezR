const hourHand = document.querySelector(`.hour-hand`);
const minuteHand = document.querySelector(`.minute-hand`);
const secondHand = document.querySelector(`.secund-hand`);

const getTime = () =>{
    const date = new Date();
    return {
        
        hours : date.getHours(),
        minutos : date.getMinutes(),
        segundos : date.getSeconds()
    };
}
setInterval(()=>{

    const {segundos,minutos, hours } =getTime();

secondHand.style.transform = `translate(0,-50%) rotate(${segundos *6}deg)`;
minuteHand.style.transform =  `translate(0,-50%) rotate(${minutos *6}deg)`;
hourHand.style.transform =  `translate(0,-50%) rotate(${hours *30}deg)`;


},1000);
