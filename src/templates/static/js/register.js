async function registerUser(event){
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm_password").value;

    // wait for a response from the server
    const response = await fetch ("http://127.0.0.1:8000/auth/register", {
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password, 
                confirmPassword: confirmPassword
            })

    });

    // set data 
    const data = await response.json();

    if(response.ok){
        alert("Registration successful! Please check email for activation link!");
    }else{
        alert('Error: ${data.error}');
    }
}

document.getElementById("register_form").addEventListener("submit", registerUser);