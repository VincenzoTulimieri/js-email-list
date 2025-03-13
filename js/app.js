
const emailApi = 'https://flynn.boolean.careers/exercises/api/random/mail'


const emailList = [];
for (let i = 0; i < 10; i++) {
    axios.get(emailApi)
    .then(response => {
        const email = response.data
        emailList.push(email)
        console.log(emailList[i].response)
        
    })
    
}

