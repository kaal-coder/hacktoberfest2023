// Define menu items
const menuItems = [
    {
        name: "Delicious Burger",
        description: "A mouthwatering burger made with the finest ingredients, topped with fresh vegetables and our special sauce."
    },
    {
        name: "Italian Pasta",
        description: "Al dente pasta served with a rich and savory tomato sauce, garnished with parmesan cheese and fresh basil leaves."
    },
    {
        name: "Sushi Platter",
        description: "A delectable assortment of sushi rolls and sashimi, served with pickled ginger and wasabi."
    },
    {
        name: "Margherita Pizza",
        description: "A classic pizza with tomato sauce, mozzarella cheese, and fresh basil leaves on a thin crust."
    },
    {
        name: "DBC Icecream",
        description: "Creamy and indulgent ice cream with a delightful special blend of chocolate, vanilla, and brownies."
    },
    {
        name: "Dragon Roll",
        description: "A special sushi roll with eel, avocado, and cucumber, topped with eel sauce and tobiko."
    },
    {
        name: "Caesar Salad",
        description: "Crunchy romaine lettuce, croutons, and parmesan cheese, tossed in Caesar dressing."
    },
    {
        name: "Blueberry Pancakes",
        description: "Fluffy pancakes filled with fresh blueberries and drizzled with maple syrup."
    },
    {
        name: "Chicken Noodle Soup",
        description: "Homemade chicken noodle soup with tender chicken, vegetables, and noodles."
    },
    {
        name: "Taco Platter",
        description: "A platter of delicious tacos with your choice of fillings, served with salsa and guacamole."
    },
    {
        name: "Chicken Curry",
        description: "Spicy and flavorful chicken curry served with rice and naan bread."
    },
    {
        name: "Ice Cream Sundae",
        description: "A delightful ice cream sundae with your choice of flavors, toppings, and whipped cream."
    },
];

// Function to display menu items
function displayMenu() {
    const menu = document.getElementById('menuItems');
    menu.innerHTML = '';
    menuItems.forEach((item, index) => {
        const menuItem = document.createElement('article');
        menuItem.className = 'menu-item';
        menuItem.innerHTML = `
            <img src="food${index + 1}.jpg" alt="${item.name}">
            <h2>${item.name}</h2>
            <p>${item.description}</p>
        `;
        menu.appendChild(menuItem);
    });
}

// Initialize the menu
displayMenu();


// Initialize the menu
displayMenu();
