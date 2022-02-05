import './styles.css';
const btn    = document.querySelector('.color__button');
const color  = document.querySelector('.color');



const generateHexColor = () => {
    const letters = ["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"];
    let color = "";
    let number;
    for ( let i = 0; i < 6; i++ ) {
        number = Math.trunc( Math.random()*15 );
        color += letters[ number ];
    }

    return `#${ color }`
}




btn.addEventListener('click', () => {
    const colorBG = generateHexColor();
    console.log( colorBG );
    document.body.style.backgroundColor = colorBG;
    color.textContent = colorBG;
})