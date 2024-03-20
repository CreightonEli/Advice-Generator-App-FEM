const resID = document.querySelector('#adviceID')
const resAdv = document.querySelector('#results')
const resBtn = document.querySelector('#getData')



resBtn.addEventListener('click', () => {
    getAdvice();
})

window.onload = () => {
    getAdvice();
}

function getAdvice(){

    fetch("https://api.adviceslip.com/advice")
        .then(response => {
            return response.json();
        })
        .then(adviceData => {
            console.log(adviceData);
            const adviceObj = adviceData.slip;
            resID.innerHTML = adviceObj.id;
            resAdv.innerHTML = adviceObj.advice;
        })
        .catch(error => {
            console.log(error);
        });

}