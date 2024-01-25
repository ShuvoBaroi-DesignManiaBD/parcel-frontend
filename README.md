# Restho (Restaurant Management App)

## Live Site

Check out the live site [here](https://restho.netlify.app/).

## Project Overview

1. **User Authentication:** 
   Implemented user authentication to allow users to create accounts, log in, and manage their profiles.
   - Applied advance password strength checker
   - Used firebase to let users login with social media accounts like Google etc.
   - Added account registration functionality with email, password and imageURL

2. **Search functionality for Foods:** 
   - Implemented a search system where users can search for different food categories including Beef, Mutton, Chicken, Shrimps, and Noodles, and place orders.
   - Added pagination for better navigation experiences through the foods

3. **Unique Design and Theme:**
   - The website boasts a unique design and theme specifically tailored to highlight foods with categories, offeres & services.
   - Emphasis on a clean and user-friendly interface to enhance the user experience.

4. **Order History:** 
   Provided a feature for users to view their order history, allowing them to track their previous orders.
   - Users can delete running orders
   - Added a tabular system to show the order history with pagination

5. **Private/Protected Routes and User Authentication:**
   - Implemented private/protected routes for sensitive functionalities like adding foods, viewing the added foods & order-history, and updating product details.
   - Users are required to log in to access certain features, ensuring data security.

6. **Functionality to add new food:**
   - Users can add new foods through a form that include details such as image, name, food-category, country, price etc.
   - foods are categorized based on the selected food-category, providing a structured display.

7. **Functionality to update a food item:**
   - Users can update their added foods details from added-foods page.

8. **Cart calculation & update cart:**
   - In the order/purchase page user's order prices will be calculated and will show the total.
   - User can remove an item from the cart. Cart will be automatically updated upon removing an item.

9. **Top selling products:**
   - On the home page depending on the the number of orders top foods have shown

10. **Secure authorization with JWT:**
   - Added JWT to make the APIs secure & secure the authorization.

11. **Responsive Design:**
    - Ensured the website's responsiveness across various devices, providing a seamless experience on desktop and mobile.

12. **404 Page and Loading Spinner:**
    - Included a visually appealing 404 page for not found results.
    - Implemented a beautiful loading spinner for a better visual experience during page loads.


## License

This project is for learning and practice purposes only.

---