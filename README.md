# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![Desktop screenshot of the app](/images/screenshot.png)

### Links

- [Solution URL](https://www.frontendmentor.io/solutions/advice-generator-app-20dKbHBRSb)
- [Live Site URL](https://creightoneli.github.io/Advice-Generator-App-FEM/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties

### What I learned

I learned how to implement and utilize the Slip Advice API into a web app. Below you can see the end result of the JS used to get the desired information from the API with a button press:

```js
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
```

### Continued development

I might incorporate Sass later to better organize and minify my CSS files. I also may change other style aspects of the app just to customize it a bit.

### Useful resources

- [Oston Code Cypher](https://www.youtube.com/watch?v=2AfzKmgqWUE) - This video was instrumental in my understanding of how to properly utilize the API.

## Author

- Website - [Elijah Creighton](https://creightoneli.github.io/)
- Frontend Mentor - [@CreightonEli](https://www.frontendmentor.io/profile/CreightonEli)
- LinkedIn - [Creightone](www.linkedin.com/in/creightone)