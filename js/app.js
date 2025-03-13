
const emailApi = 'https://flynn.boolean.careers/exercises/api/random/mail'

const containerElement = document.querySelector('.container')
console.log(containerElement)

const emailList = [];
let items='';
for (let i = 0; i < 10; i++) {
    axios.get(emailApi)
    .then(response => {
        const email = response.data
        emailList.push(email)
        console.log(emailList[i].response)
        items+=`<div><ul><li>${emailList[i].response}</li></ul></div>` 
        containerElement.innerHTML = items;
        
    }).catch(error => {
        console.log(error)
    })
    
}

