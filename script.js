const count = document.querySelector('.count');
const plusbtn = document.querySelector('.plus-btn');
const minusbtn = document.querySelector('.minus-btn');
const changeBy=document.querySelector('.changeBy')
const resetbtn = document.querySelector('.reset-btn')

plusbtn.addEventListener('click' , () => {
    const countValue=parseInt(count.innerText)
    const changeByValue = parseInt(changeBy.value)
    count.innerText = countValue+changeByValue
    

})

minusbtn.addEventListener('click' , () =>{
    const countValue=parseInt(count.innerText)
    const changeByValue = parseInt (changeBy.value)
    count.innerText = countValue-changeByValue;
    
})
resetbtn.addEventListener('click', () => {
    count.innerText=0
})




