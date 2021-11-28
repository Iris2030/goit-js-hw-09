import Notiflix from 'notiflix'

const form = document.querySelector('.form')
const inputDelay = document.querySelector('[name = delay]')
const step = document.querySelector('[name = step]')
const amount = document.querySelector('[name = amount]')

let   DELAY = 0
let stepDelay = 0
let amountNumber = 0
let intervalId = null
 form.addEventListener('submit', onFormSubmit)

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {

    delay = DELAY
    position = 0

    for (let i = 0; i < amountNumber; i += 1){
      
      delay += stepDelay
      position += 1

      console.log('position', position);
      console.log('iterator', i);
      console.log('delay', delay);
      }
     
  const shouldResolve = Math.random() > 0.3;
 
  
    setTimeout(() => {
 
  if (shouldResolve) {
resolve({position, delay})
  } else {
  reject({position, delay})
  }
                
        }, DELAY)
  })
}




function onFormSubmit(event) {
  event.preventDefault()  
  
  
  intervalId = setInterval(() => {

    for (let i = 0; i < amountNumber; i += 1) {
 
    createPromise()
  .then(({ position, delay }) => {
   Notiflix.Notify.warning(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.warning(`❌ Rejected promise ${position} in ${delay}ms`);
  })
         if (amountNumber) {
clearInterval(intervalId)
}
     }
    }, stepDelay)
  


DELAY = Number(inputDelay.value)
amountNumber = Number(amount.value)
stepDelay = Number(step.value)
  

  // console.log(DELAY);
  // console.log(stepDelay);
  // console.log(amountNumber);
}



