import {animorphs} from "./data.js"
let results;
const form = document.getElementById('quiz-form');   
const button = document.getElementById('submit-button');
const clickAudio = document.getElementById('audio')
const animorphResult = document.getElementById("animorph-result")
const animorphImg = document.getElementById("animorph-img")
const animorphText = document.getElementById("animorph-text")
button.addEventListener('click', () => {
    clickAudio.play();
})

const handleSubmit = () => {
    event.preventDefault();
    const answer = Math.floor(Math.random() * 6)
   const animorph = animorphs[answer]   
   animorphResult.classList.remove("hidden")
   animorphImg.src = animorph.img    
   animorphText.innerText = animorph.text
}

form.addEventListener('submit', handleSubmit)