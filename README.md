# Shop Ease - E-Commerce Fashion Store

## Overview
Shop Ease is a modern, responsive e-commerce website specializing in fashion and lifestyle products. This single-page application features product filtering by category, a functional shopping cart, and Indian rupee pricing.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
## Features

### 🛒 Shopping Features
- **Category Filtering**: Browse products by 4 main categories
- **Product Catalog**: 20+ products with realistic Indian pricing
- **Shopping Cart**:
  - Add/remove items
  - Adjust quantities
  - Real-time total calculation
- **Responsive Design**: Works on all device sizes

### 💰 Pricing
- All prices displayed in Indian Rupees (₹)
- Realistic Indian market pricing
- Discount/sale pricing shown with original price strikethrough

### 🖥️ Technical Features
- Pure HTML/CSS/JS (no frameworks)
- Self-contained in one file
- Modern CSS Grid layout
- Smooth animations and transitions

## How to Use

1. **Browse Products**:
   - Click category cards or filter buttons to view specific products
   - Use "All Products" button to reset filters

2. **Add to Cart**:
   - Click "Add to Cart" on any product
   - Cart icon shows item count
   - Click cart icon to view/modify cart

3. **Checkout**:
   - Proceed to checkout from cart modal
   - (Note: This is a frontend demo - no actual payment processing)

## File Structure
- `index.html` - Contains all HTML, CSS, and JavaScript
- `favicon.ico` - Website icon (replace with your own)

## Customization

### To Add More Products:
1. Duplicate a product card div
2. Update:
   - `data-id` (unique number)
   - `data-name`
   - `data-price` (in ₹)
   - `data-image` (URL)
   - `data-category` (must match existing categories)

### To Change Categories:
1. Update category cards in HTML
2. Add corresponding filter button
3. Ensure products have matching `data-category` values

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Edge (latest)
- Safari (latest)

## License
Free to use for personal and commercial projects

---

**Note**: This is a frontend demo only. For a production site, you would need to:
- Add backend functionality
- Implement actual payment processing
- Set up product database
- Add user accounts system
