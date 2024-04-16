
let enviar = document.getElementById('botao').addEventListener('click', function() {
    let userId = document.getElementById('enviar').value;

    
    userId = parseInt(userId);
    if (isNaN(userId)) {
        off();
        return;
    }
    

    let url = `https://jsonplaceholder.typicode.com/users/${userId}`;



    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.querySelector('#user-name').textContent = data.name;
            document.querySelector('#user-email').textContent = data.email;
            document.querySelector('#user-street').textContent = data.address.street;
        }
        
    
    );
        

});
