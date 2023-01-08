const formData = document.querySelector ('#form-data')
formData.addEventListener ('submit', (e)=> {
    e.preventDefault ()

    const inputName = document.querySelector ('#name-input').value
    const inputEmail = document.querySelector ('#email-input').value
    const inputPassport = document.querySelector ('#passport-input').value
    const inputNtsa = document.querySelector ('#ntsa-input').value

    fetch ('http://localhost:3000/userInfo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify ({
            name: inputName,
            email: inputEmail,
            ntsa_no: inputNtsa,
            passport: inputPassport
            
        })
    })
    .then ((response)=> response.json())
    .then ((data)=> console.log (data))
})