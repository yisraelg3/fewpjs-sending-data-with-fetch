// Add your code here
function submitData (name, email) {
    return fetch ('http://localhost:3000/users',
    {
        method : 'POST',
        headers : {
            "Content-Type" : "application/json",
            "Accept" : "application/json"
        },
        body : JSON.stringify({
            name : "Steve",
            email : "steve@steve.com"
        })
    })
    .then(res => res.json())
    .then((userObj) => {
        const body = document.querySelector('body')
        //console.log(usersArray)
            const p = document.createElement('p')
            p.textContent = userObj.id
            body.append(p)
    })
    .catch((errorObj) => {
        const body = document.querySelector('body')
        const h3 = document.createElement('h3')
        h3.textContent = errorObj.message
        body.append(h3)
    })
}



// fetch('http://localhost:3000/dogs',
//     {
//         method:'POST', 
//         headers : {
//             "Content-Type" : "application/json",
//             "Accept" : "appliaction/json"
//         },
//         body : JSON.stringify({
//             dogName : 'byron',
//             dogBreed : "poodle"
//         })
//     }
// )
// .catch(function(error) {
//     alert("Bad things! Ragnarők!");
//     console.log(error.message);
//   }); 

//   const h1 = document.createElement('h1')
//   h1.innerText= 'hi'
//   const body = document.querySelector('body')
//   console.log(h1)
//   body.append(h1)