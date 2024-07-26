const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
 e.preventDefault()
  
 const height = parseInt(document.querySelector('#Height').value)
 const weight = parseInt(document.querySelector('#Weight').value)
 const results = document.querySelector('#results')

 if(height === "" || height < 0 || isNaN(height)){
    results.innerHTML = `please Eneter valid Height`
 } else if(weight === "" || weight < 0 || isNaN(weight)){
    results.innerHTML = `please Eneter valid Weight`
 } else {
    const bmi = (weight/((height*height)/10000)).toFixed(2)
    results.innerHTML= `<span>${bmi}</span>`
 }

})
