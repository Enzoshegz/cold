
const menuItems = [
    { name: 'Signature Creations', price: '$5.99' },
    { name: 'Create Your Own', price: '$4.99' },
    { name: 'Ice Cream Cakes', price: '$24.99' },
    { name: 'Shakes & Smoothies', price: '$3.99' }
];

const menuContainer = document.querySelector('.menu-items');

menuItems.forEach(item => {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');
    menuItem.innerHTML = `<h3>${item.name}</h3><p>${item.price}</p>`;
    menuContainer.appendChild(menuItem);
});
