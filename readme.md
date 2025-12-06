# Bookoe - Online Book Store Website

A modern, responsive e-commerce website for an online book store built with HTML, CSS, and JavaScript. This project features a complete shopping experience with book browsing, filtering, cart management, and checkout functionality.

## 📋 Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Pages Overview](#pages-overview)
- [Key Features](#key-features)
- [Browser Support](#browser-support)



## ✨ Features

### Core Functionality
- **Homepage** with hero section, featured books, and promotional offers
- **Book Catalog** with advanced filtering (category, price range, date)
- **Shopping Cart** with quantity management
- **Checkout** with billing and payment options
- **User Authentication** (Login/Registration pages)
- **Responsive Design** for all device sizes
- **Interactive Elements** including carousels, countdown timers, and animations

### User Experience
- Flash sale countdown timer
- Book carousel with drag-to-scroll functionality
- Back-to-top button
- Mobile-friendly hamburger navigation
- Animated counter statistics
- Book wishlist/favorites functionality
- Search functionality (UI ready)

## 🛠 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with animations
- **JavaScript (Vanilla)** - Core functionality
- **jQuery** - DOM manipulation and plugins
- **Font Awesome 6.4.0** - Icons
- **Google Fonts (Poppins)** - Typography
- **jQuery Plugins:**
  - Counter-Up (for animated counters)
  - Waypoints (for scroll triggers)

## 📁 Project Structure

```
BookStore/
│
├── Pages/                  # All page files
│   ├── book-detail.html    # Individual book detail page
│   ├── book-filter.html    # Book catalog with filters
│   ├── cart-item.html      # Shopping cart page
│   ├── checkout.html       # Checkout page
│   ├── contact.html        # Contact page
│   ├── login.html          # User login page
│   ├── registration.html   # User registration page
│   ├── service.html        # Services page
│   └── book-filter.css     # Additional styles for filter page
│
├── css/
│   └── style.css           # Main stylesheet
│
├── js/
│   ├── script.js           # Main JavaScript file
│   ├── add-to-cart.js     # Cart functionality (to be implemented)
│   ├── back-to-top.js     # Scroll to top functionality
│   ├── increment-decrement.js  # Quantity controls
│   ├── repeat-js.js       # Carousel/slider functionality
│   └── jquery.counterup.min.js  # Counter animation plugin
│
├── images/                 # Image assets
│   ├── book-*.jpg         # Book cover images
│   ├── logo.png           # Site logo
│   └── ...                 # Other images
│
├── index.html              # Homepage
└── README.md              # This file
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for development)

### Installation

1. **Clone or download the repository**
   ```bash
   git clone <repository-url>
   cd BookStore
   ```

2. **Open the project**
   - Simply open `index.html` in your web browser, or
   - Use a local development server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     
     # Using PHP
     php -S localhost:8000
     ```

3. **Access the website**
   - Navigate to `http://localhost:8000` (if using a server)
   - Or open `index.html` directly in your browser

## 📄 Pages Overview

### Homepage (`index.html`)
- Hero section with promotional offers
- Service highlights (Quick Delivery, Secure Payment, etc.)
- Recommended books section
- Popular books section
- Special offers showcase
- Flash sale countdown with featured books
- Books on sale carousel
- Featured books section
- Latest news/blog section
- Statistics counter section
- Newsletter subscription

### Book Filter Page (`Pages/book-filter.html`)
- Advanced filtering options:
  - Editor picks (Best Sales, Most Recommended, etc.)
  - Date selection
  - Category filters (Action, Fantasy, Adventure, etc.)
  - Price range slider
- Book grid display with pagination
- Responsive filter sidebar

### Shopping Cart (`Pages/cart-item.html`)
- Product table with images and details
- Quantity increment/decrement controls
- Discount coupon input
- Order summary with subtotal, shipping, and total
- Related books carousel

### Checkout Page (`Pages/checkout.html`)
- Billing and shipping address form
- Order summary table
- Payment method selection
- Card payment form
- Order placement functionality

### Authentication Pages
- **Login** (`Pages/login.html`) - User login form
- **Registration** (`Pages/registration.html`) - New user signup form

### Other Pages
- **Book Detail** (`Pages/book-detail.html`) - Individual book information
- **Contact** (`Pages/contact.html`) - Contact information and form
- **Service** (`Pages/service.html`) - Service offerings

## 🎯 Key Features

### Interactive Elements

1. **Responsive Navigation**
   - Hamburger menu for mobile devices
   - Smooth transitions and animations

2. **Book Carousel**
   - Infinite scroll functionality
   - Drag-to-scroll support
   - Auto-play feature
   - Navigation arrows

3. **Flash Sale Timer**
   - 24-hour countdown timer
   - Real-time updates

4. **Filter System**
   - Collapsible filter sections
   - Price range slider with dual handles
   - Category checkboxes
   - Date picker

5. **Cart Management**
   - Quantity controls
   - Item removal
   - Price calculations

6. **Animations**
   - Counter-up animations for statistics
   - Smooth scroll effects
   - Hover effects on interactive elements 

## 🔧 Code Improvements Made

1. **Fixed path inconsistencies** - Standardized all page references to use `Pages/` (uppercase)
2. **Improved code organization** - Better structure and comments
3. **Enhanced accessibility** - Better alt text for images (recommended)
4. **Performance** - Optimized script loading

## 📝 Notes

- This is a frontend-only project (no backend integration)
- Cart and user data are not persisted (would require backend)
- Payment processing is UI-only (not functional)
- Search functionality has UI but needs backend integration

**Note:** This is a Frontend project. For production use, you would need to:
- Integrate with a backend API
- Implement actual payment processing
- Add user authentication system
- Set up a database for products and orders
- Add proper error handling and validation
- Implement search functionality
- Add product management system

