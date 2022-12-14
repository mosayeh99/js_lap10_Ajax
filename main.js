let myRequest = new XMLHttpRequest();
myRequest.open('GET', 'https://reqres.in/api/users?page=2', true);
myRequest.send();
myRequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let usersData = JSON.parse(this.responseText).data;
        let table = "";
        usersData.forEach((e) => {
            table += `
                <div class="user">
                    <img src="${e.avatar}" alt="">
                    <div class="info">
                        <h2>${e.first_name} ${e.last_name}</h2>
                        <p>${e.email}</p>
                    </div>
                </div>
            `
        });
        document.querySelector('.all-users').innerHTML = table;
    }
}