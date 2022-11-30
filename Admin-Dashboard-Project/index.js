const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector('.theme-toggler');

// Show Side Menu
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})

// Close Side Menu
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})

// Change Theme Light and Dark
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:first-child').classList.toggle('active');
    themeToggler.querySelector('span:last-child').classList.toggle('active');
})

// Fill Orders in Table
Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
                        <td>${order.productName}</td>
                        <td>${order.productNumber}</td>
                        <td>${order.paymentStatus}</td>
                        <td class="${order.shippingStatus === 'Declined' ? 'danger' 
                        : order.shippingStatus === 'Pending' ? 'warning'
                        : 'primary'}">${order.shippingStatus}</td>
                        <td class="primary">Details</td>
                        `;

    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
})

