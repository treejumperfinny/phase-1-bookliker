document.addEventListener("DOMContentLoaded", () => {
    fetch('http://localhost:3000/books')
        .then((response) => response.json())
        .then((books) => {
            listBooks(books)
        })
})

function listBooks(books) {
    books.forEach(litBk => {
        let ul = document.getElementById("list")
        let bookLi = document.createElement('li')
        bookLi.innerText = litBk.title
        ul.append(bookLi)
        bookLi.addEventListener('click', () => {
            showBook(litBk)
        })
    });
}

function showBook(litBk) {
    
    let bkTitle = document.createElement('h3')
    let bkSub = document.createElement('h3')
    let bkAuth = document.createElement('h4')
    let bkDes = document.createElement('p')
    let bkImage = document.createElement('img')
    let bkUsers = document.createElement('ul')

    bkTitle.innerText = litBk.title
    bkSub.innerText = litBk.subtitle
    bkAuth.innerText = litBk.author
    bkDes.innerText = litBk.description
    bkImage.src = litBk.img_url
    
    litBk.users.forEach(deezUser => {
        let userLi = document.createElement('li')
        userLi.innerText = deezUser.username
        bkUsers.append(userLi)

    })

    let likeBook = document.createElement('button')
    likeBook.innerText = 'LIKE!'
    likeBook.addEventListener('click', () => {
            likeBook.innerText = '...unlike :('
            let likeUser = document.createElement('li')
            likeUser.innerText = "pouros"
            bkUsers.append(likeUser)
     })

    let deetsPanel = document.getElementById("show-panel")
    deetsPanel.replaceChildren()
    deetsPanel.append(bkImage, bkTitle, bkSub, bkAuth, bkDes, bkUsers, likeBook)
   

}
//when title of book (bookLi) is clicked show shit about book
//upon clicking like button changes to unlike & user is added to ul 
// function likeBook() {
//     document.createElement('button')
//     btn.innerText = 'like'
//     btn.addEventListener('click', () => {
//         books.users.push(user);
//     })
