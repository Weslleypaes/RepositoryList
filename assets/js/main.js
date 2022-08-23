const ul = document.querySelector('ul')

function exibeRespositorio() {
    fetch('https://api.github.com/users/weslleypaes/repos')
        .then(async result => {

            if (!result.ok) {
                throw new Error(result.status)
            }

            var date = await result.json()

            date.map(value => {
                let li = document.createElement('li')

                li.innerHTML = `<strong>Name :</strong> ${value.name}</br>
                            <strong>Url :</strong> ${value.html_url}</br>
                            <strong>Creation date:</strong> ${Intl.DateTimeFormat('pt-BR').format(new Date(value.created_at))}</br>
                            <strong>Last update:</strong> ${Intl.DateTimeFormat('pt-BR').format(new Date(value.updated_at))}`;

                ul.appendChild(li)                          //insert li inside ul 
            })

        })

        .catch(e => console.warn(e))
}

exibeRespositorio()
