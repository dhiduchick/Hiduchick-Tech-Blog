const loginFormHandler = async (event) => {
    event.preventDefult();

    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (username && password) {
        const respone = await fetch('/api/uers.login', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Typer': 'application/json'},
        });
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    } else {
        alert ('Something has gone missing please try again!');
    }
};