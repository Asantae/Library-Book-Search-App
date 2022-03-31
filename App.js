
const API_KEY = 'https://language.googleapis.com/v1/documents:analyzeEntities?key=AIzaSyCdEMmaKOke-OQ3TmC-rMGMdoXS0wATjrQ';
fetch('https://www.googleapis.com/books/v1/users/userId/bookshelves', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        }
})
    .then(res => {
        if(res.ok) {
            console.log('SUCCESS')
        } else {
            console.log('NOT SUCCESSFUL')
        }
        res.json()
    })
    .then(data => console.log(data))
    .catch(error => console.log('ERROR'))