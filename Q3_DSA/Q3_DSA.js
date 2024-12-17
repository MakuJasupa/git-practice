// Define the categories and items
let categories = {
    "Pasta": [
      { name: "Spaghetti", price: 10.99 },
      { name: "Fettuccine", price: 12.99 },
      { name: "Lasagna", price: 14.99 }
    ],
    "Desserts": [
      { name: "Tiramisu", price: 6.99 },
      { name: "Cheesecake", price: 7.99 },
      { name: "Cannoli", price: 8.99 }
    ],
    "Drinks": [
      { name: "Soda", price: 2.99 },
      { name: "Juice", price: 3.99 },
      { name: "Coffee", price: 1.99 }
    ]
  };
  
  // Define the users
  let users = [
    { username: "seller", password: "password" }
  ];
  
  // Cart for customers
  let cart = [];
  
  // Function to authenticate users
  function authenticateUser(username, password) {
    return users.some(user => user.username === username && user.password === password);
  }
  
  // Function to add an item
  function addItem(category, name, price) {
    if (categories[category]) {
      categories[category].push({ name, price });
      console.log(`Item "${name}" added to "${category}".`);
    } else {
      console.log(`Category "${category}" does not exist.`);
    }
  }
  
  // Function to remove an item
  function removeItem(category, name) {
    if (categories[category]) {
      const initialLength = categories[category].length;
      categories[category] = categories[category].filter(item => item.name !== name);
      if (categories[category].length < initialLength) {
        console.log(`Item "${name}" removed from "${category}".`);
      } else {
        console.log(`Item "${name}" not found in "${category}".`);
      }
    } else {
      console.log(`Category "${category}" does not exist.`);
    }
  }
  
  // Function to display items in a category
  function displayItems(category) {
    if (categories[category]) {
      console.log(`\nItems in ${category}:`);
      for (let item of categories[category]) {
        console.log(`${item.name} - $${item.price.toFixed(2)}`);
      }
    } else {
      console.log(`Category "${category}" does not exist.`);
    }
  }
  
  // Function to add an item to the cart
  function addToCart(category, itemName, quantity) {
    if (categories[category]) {
      let item = categories[category].find(i => i.name === itemName);
      if (item) {
        cart.push({ name: item.name, price: item.price, quantity });
        console.log(`${quantity} x ${item.name} added to cart.`);
      } else {
        console.log(`Item "${itemName}" not found in "${category}".`);
      }
    } else {
      console.log(`Category "${category}" does not exist.`);
    }
  }
  
  // Function to view the cart
  function viewCart() {
    console.log("\nCart Contents:");
    if (cart.length === 0) {
      console.log("Your cart is empty.");
    } else {
      let total = 0;
      for (let i = 0; i < cart.length; i++) {
        let item = cart[i];
        console.log(
          `${i + 1}. ${item.quantity} x ${item.name} - $${(item.price * item.quantity).toFixed(2)}`
        );
        total += item.price * item.quantity;
      }
      console.log(`Total: $${total.toFixed(2)}`);
    }
  }
  
  // Function to remove an item from the cart
  function removeFromCart(itemName) {
    const initialLength = cart.length;
    cart = cart.filter(item => item.name !== itemName);
    if (cart.length < initialLength) {
      console.log(`Item "${itemName}" removed from cart.`);
    } else {
      console.log(`Item "${itemName}" not found in cart.`);
    }
  }
  
  // Main Program
  while (true) {
    console.log("\n1. Seller");
    console.log("2. Customer");
    console.log("3. Exit");
    let choice = parseInt(prompt("Enter your choice: "));
  
    if (choice === 1) {
      // Seller Login
      let username = prompt("Enter username: ");
      let password = prompt("Enter password: ");
      if (authenticateUser(username, password)) {
        console.log("\nLogin Successful! Welcome, Seller.");
        while (true) {
          console.log("\n1. Logout");
          console.log("2. Add Item");
          console.log("3. Remove Item");
          console.log("4. View Category Items");
          let sellerChoice = parseInt(prompt("Enter your choice: "));
  
          if (sellerChoice === 1) {
            console.log("Logged out successfully.");
            break;
          } else if (sellerChoice === 2) {
            let category = prompt("Enter category: ");
            let name = prompt("Enter item name: ");
            let price = parseFloat(prompt("Enter item price: "));
            addItem(category, name, price);
          } else if (sellerChoice === 3) {
            let category = prompt("Enter category: ");
            let name = prompt("Enter item name: ");
            removeItem(category, name);
          } else if (sellerChoice === 4) {
            let category = prompt("Enter category: ");
            displayItems(category);
          }
        }
      } else {
        console.log("Incorrect username or password.");
      }
    } else if (choice === 2) {
      // Customer Menu
      while (true) {
        console.log("\n1. View Category Items");
        console.log("2. Add to Cart");
        console.log("3. View Cart");
        console.log("4. Remove Item from Cart");
        console.log("5. Back");
        let customerChoice = parseInt(prompt("Enter your choice: "));
  
        if (customerChoice === 1) {
          let category = prompt("Enter category: ");
          displayItems(category);
        } else if (customerChoice === 2) {
          let category = prompt("Enter category: ");
          let itemName = prompt("Enter item name: ");
          let quantity = parseInt(prompt("Enter quantity: "));
          if (!isNaN(quantity) && quantity > 0) {
            addToCart(category, itemName, quantity);
          } else {
            console.log("Incorrect quantity. Please enter a positive number.");
          }
        } else if (customerChoice === 3) {
          viewCart();
        } else if (customerChoice === 4) {
          let itemName = prompt("Enter item name to remove: ");
          removeFromCart(itemName);
        } else if (customerChoice === 5) {
          break;
        }
      }
    } else if (choice === 3) {
      console.log("Thank you for using the system. Goodbye!");
      break;
    } else {
      console.log("The option selected is incorrect. Please give it another try.");
    }
  }
  