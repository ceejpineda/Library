let library = [];


function Book(name) {
    this.name = name;
}

function addBookToLibrary(name) {
    let book = new Book(name);
    library.push(book);
}

function display(){
    const books = document.querySelector(".books")

    while (books.lastChild){
        books.removeChild(books.lastChild);
    }

    library.forEach(library => {
        const card = document.createElement("div");
        card.classList.add("card");
        books.appendChild(card);
        for (let key in library){
            const para = document.createElement("p");
            para.textContent = (`${library[key]}`);
            card.appendChild(para);
        }
    })
}

const btn = document.querySelector("#btn");
btn.addEventListener('click', ()=>{
    newbook = document.querySelector("#book");
    addBookToLibrary(newbook.value);
    console.log("hello")
    display();
})
