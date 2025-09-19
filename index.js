// Add your code here
function submitData(name, email){
    const userData = {
        name: name,
        email:email,
    };

    return fetch("http://localhost:3000/users",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(userData),
    })

    .then((response) => response.json())
    .then((data) => {
        document.body.innerHTML +=  `<p>User ID: ${data.id}</p>`
    })
    .catch((error) => {
        document.body.innerHTML +=  `<p> Error: ${error.message}</p>`
    });
}
