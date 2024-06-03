    "use strict"

// DOM Declarations 

const openMenuButtonEl = document.getElementById("open-menu");
const closeMenuButtonEl = document.getElementById("close-menu");


    // Progress bar

    document.addEventListener('DOMContentLoaded', function () {
        const progressBar = document.getElementById("progress-bar");

        function updateProgressBar() {
            const scrollPosition = window.scrollY;
            const documentHeight = document.documentElement.scrollHeight;
            const windowHeight = window.innerHeight;
            const scrollPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100;

            progressBar.style.width = `${scrollPercentage}%`;
        }

        window.addEventListener('scroll', updateProgressBar);
    });



    // Slideshow

    $(document).ready(function(){
        let slideIndex = 1;
        showSlides(slideIndex);
    
        function showSlides(n) {
            const slides = $(".mySlides");
            const dots = $(".numbertext");
            let i;
            
            if (n > slides.length) {slideIndex = 1}    
            if (n < 1) {slideIndex = slides.length}
            
            slides.hide();
            dots.hide();
            slides.eq(slideIndex-1).show();
            dots.eq(slideIndex-1).show();
        }
    
        function plusSlides(n) {
            showSlides(slideIndex += n);
        }
    
        $(".prev").click(function(){
            plusSlides(-1);
        });
    
        $(".next").click(function(){
            plusSlides(1);
        });
    });

    // Store functionality 
    document.addEventListener('DOMContentLoaded', () => {
        // Select the container for cart items and the total element
        const cartItemsContainer = document.querySelector('.cart-items');
        const totalElement = document.querySelector('.total');
    
        // Define the products available in the store
        const products = [
            { id: 1, name: "Naturally Nate's Organic Walnuts", price: 10.00 },
            { id: 2, name: "Naturally Nate's Organic Oats", price: 6.00 },
            { id: 3, name: "Naturally Nate's Paleo Muesli", price: 12.00 },
            { id: 4, name: "Naturally Nate's Organic Sunflower Seeds", price: 6.00 },
            { id: 5, name: "Naturally Nate essentials: Organic Almonds", price: 12.00 }
        ];
    
        // Function to load the cart from localStorage
        function loadCart() {
            const storedCart = localStorage.getItem('cart'); // Get the cart from localStorage
            return storedCart ? JSON.parse(storedCart) : []; // Parse the cart or return an empty array if null
        }
    
        // Function to save the cart to localStorage
        function saveCart(cart) {
            localStorage.setItem('cart', JSON.stringify(cart)); // Convert the cart to a JSON string and save it
        }
    
        // Function to add a product to the cart
        function addToCart(productId) {
            const cart = loadCart(); // Load the current cart
            const product = products.find(p => p.id === productId); // Find the product by id
            if (product) {
                cart.push(product); // Add the product to the cart
                saveCart(cart); // Save the updated cart to localStorage
                renderCartItems(cart); // Render the updated cart items
            }
        }
    
        // Function to clear the cart
        function clearCart() {
            const cart = []; // Create an empty cart array
            saveCart(cart); // Save the empty cart to localStorage
            renderCartItems(cart); // Render the updated (empty) cart items
        }
    
        // Function to render cart items on the page
        function renderCartItems(cart) {
            cartItemsContainer.innerHTML = ''; // Clear the current cart items
            let total = 0; // Initialize total price
            cart.forEach(item => {
                const itemElement = document.createElement('div'); // Create a div for each cart item
                itemElement.classList.add('cart-item'); // Add a class to the div
                itemElement.innerHTML = `<p>${item.name}</p><p>€${item.price.toFixed(2)}</p>`; // Set the item content
                cartItemsContainer.appendChild(itemElement); // Append the item to the cart items container
                total += item.price; // Add the item price to the total
            });
            totalElement.textContent = `Total: €${total.toFixed(2)}`; // Update the total price displayed
        }
    
        // Add event listeners to the "Add to Cart" buttons
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', (e) => {
                const productId = parseInt(e.target.getAttribute('data-product-id'), 10); // Get the product id from the button's data attribute
                addToCart(productId); // Add the product to the cart
            });
        });
    
        // Add event listener to the "Checkout" button
        document.getElementById('checkout-button').addEventListener('click', () => {
            alert('Checkout functionality not implemented.'); // Alert a message for checkout
        });
    
        // Add event listener to the "Clear Cart" button
        document.getElementById('clear-cart-button').addEventListener('click', () => {
            clearCart(); // Clear the cart
        });
    
        // Initial render of the cart items from localStorage
        const cart = loadCart(); // Load the cart from localStorage
        renderCartItems(cart); // Render the cart items
    });
    
   
    // Event Listener for Menu toggle 
openMenuButtonEl.addEventListener('click', ToggleMenu);
closeMenuButtonEl.addEventListener('click', ToggleMenu);

function ToggleMenu () {
    let navMenuEl = document.getElementById("nav-menu");
    let style = window.getComputedStyle(navMenuEl);
    
    if(style.display === "none" ) {
        navMenuEl.style.display = 'block';

    } else {
        navMenuEl.style.display ='none';
    }
 };


/*
Event Listener for Return to Top button
document.addEventListener("DOMContentLoaded", function() {
    const returnToTopButton = document.getElementById('return-to-top');

    // Show or hide the button based on the scroll position
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const documentHeight = document.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;
        const scrollPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100;

        if (scrollPercentage >= 90) {
            returnToTopButton.style.display = 'block';
        } else {
            returnToTopButton.style.display = 'none';
        }
    });

   
}); 

const addToCartButtons = document.querySelectorAll('.add-to-cart');
const overlays = document.querySelectorAll('.overlay');

addToCartButtons.forEach((button, index) => {
  button.addEventListener('click', function() {
    overlays[index].style.display = 'flex';
    setTimeout(function() {
      overlays[index].style.display = 'none';
    }, 2000); // Hide the overlay after 2 seconds
  });
});

*/
