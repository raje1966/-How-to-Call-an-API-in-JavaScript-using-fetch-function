window.onload = () => {
    document.querySelector('button').onclick = getData;
}

async function getData(){
    const API_URI = "https://jsonplaceholder.typicode.com/users";
    const response = await fetch(API_URI)
    const data = await response.json();
    console.log(data);

    let out = '<h2>Data of Users</h2>'

    data.forEach(user => {
        out += `
            <ul class="list-group">
                <li class="list-group-item">${user.name}</li>
                <li class="list-group-item">${user.email}</li>
                <li class="list-group-item">${user.website}</li>
            <ul>
        `

    })

    document.querySelector('#result').innerHTML = out;
    
}