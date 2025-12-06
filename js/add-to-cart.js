// Add to Cart Functionality
// This file handles adding items to the shopping cart

document.addEventListener('DOMContentLoaded', function() {
  // Get all "Add to Cart" buttons
  const addToCartButtons = document.querySelectorAll('.cartbtn, button:has(.fa-cart-shopping)');
  
  // Initialize cart from localStorage or create empty array
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  // Update cart count in the UI
  function updateCartCount() {
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    const cartBadges = document.querySelectorAll('.cart span, .cartbtn span');
    cartBadges.forEach(badge => {
      if (badge) badge.textContent = cartCount;
    });
  }
  
  // Add item to cart
  function addToCart(bookData) {
    // Check if item already exists in cart
    const existingItem = cart.find(item => item.id === bookData.id);
    
    if (existingItem) {
      // Increment quantity if item exists
      existingItem.quantity += 1;
    } else {
      // Add new item to cart
      cart.push({
        id: bookData.id || Date.now().toString(),
        name: bookData.name || 'Book',
        price: bookData.price || 0,
        image: bookData.image || '',
        quantity: 1
      });
    }
    
    // Save to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update UI
    updateCartCount();
    
    // Show notification (optional)
    showNotification('Item added to cart!');
  }
  
  // Show notification
  function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: #6c5dd4;
      color: white;
      padding: 15px 20px;
      border-radius: 5px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      z-index: 10000;
      animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
      notification.style.animation = 'slideOut 0.3s ease';
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }
  
  // Extract book data from button's parent element
  function getBookData(button) {
    const card = button.closest('.offer, .card, .book-card, .featured-book-card');
    if (!card) return null;
    
    return {
      id: card.dataset.bookId || Date.now().toString(),
      name: card.querySelector('h5')?.textContent.trim() || 'Book',
      price: parseFloat(card.querySelector('.price strong, .price span')?.textContent.replace(/[^0-9.]/g, '') || '0'),
      image: card.querySelector('img')?.src || ''
    };
  }
  
  // Add event listeners to all cart buttons
  addToCartButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const bookData = getBookData(button);
      
      if (bookData) {
        addToCart(bookData);
      } else {
        console.warn('Could not extract book data');
      }
    });
  });
  
  // Initialize cart count on page load
  updateCartCount();
  
  // Export functions for use in other scripts
  window.cartFunctions = {
    addToCart,
    updateCartCount,
    getCart: () => cart,
    clearCart: () => {
      cart = [];
      localStorage.setItem('cart', JSON.stringify(cart));
      updateCartCount();
    }
  };
});

// Add CSS animations for notification
if (!document.querySelector('#cart-notification-styles')) {
  const style = document.createElement('style');
  style.id = 'cart-notification-styles';
  style.textContent = `
    @keyframes slideIn {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
    @keyframes slideOut {
      from {
        transform: translateX(0);
        opacity: 1;
      }
      to {
        transform: translateX(100%);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
}

