let text1 = document.querySelector(".list");
let text2 = document.querySelector(".btn");
let text3 = document.querySelector(".task");

// add button hover change

text1.addEventListener('keyup', ()=>{
    if(text1.value.trim() != 0)
    {
        text2.classList.add('active');
    }
    else
    {
        text2.classList.remove('active');
    }
});

// add new item to the list

text2.addEventListener('click', () => {
    if(text1.value.trim() != 0)
    {
        let data = document.createElement('div');
        data.classList.add('item');
        data.innerHTML = `
        <p> ${text1.value} </p>
        <div class="item-btn">
        <i class="fa-solid fa-pen-to-square"></i>
        <i class="fa-solid fa-xmark"></i>`;
        
        text3.appendChild(data);
        text1.value = '';
    }
    else
    {
        alert("Enter some valid text");
    }
});

// delete items from the list

text3.addEventListener('click', (e) => {
    if(e.target.classList.contains('fa-xmark'))
    {
        e.target.parentElement.parentElement.remove();
    }
})


// mark items to be completed

text3.addEventListener("click", (e) => {
    if(e.target.classList.contains("fa-pen-to-square"))
    {
        e.target.parentElement.parentElement.classList.toggle("completed");
    }
});
