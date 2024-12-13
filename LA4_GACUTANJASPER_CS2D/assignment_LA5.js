// Simple Queueing System for Customer Service with a Hash Function

const customers = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];

// Hash table to store customer names and their corresponding numbers
let hashedTable = {};

// Hash function to generate index
function hashFunction(name) {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash += name.charCodeAt(i) * (i + 1);
    }
    return hash % 100;
}

// Initialize the hashed table
function initializeHashTable() {
    customers.forEach((customer, index) => {
        hashedTable[index + 1] = customer;
    });
}

// Display the current state of the hashed table
function displayHashTable() {
    console.log("\nCurrent Queue:");
    if (Object.keys(hashedTable).length === 0) {
        console.log("No customers in the queue.");
    } else {
        for (const [key, value] of Object.entries(hashedTable)) {
            console.log(`${key}: ${value}`);
        }
    }
}

// Add a new customer to the hash table
function addCustomer() {
    const newCustomer = prompt("Enter the name of the new customer: ");
    if (!newCustomer) {
        alert("Please type the correct name and try again.");
        return;
    }

    // Generate a new unique number for the customer
    const newNumber = Object.keys(hashedTable).length + 1;
    hashedTable[newNumber] = newCustomer;

    alert(`Customer ${newCustomer} has been added with number ${newNumber}.`);
    displayHashTable();
}

function main() {
    // Initialize hash table
    initializeHashTable();

    // Display initial state of hash table
    displayHashTable();

    while (true) {
        const action = prompt("Choose an action: 'service' to service a customer, 'add' to add a new customer, or 'exit' to quit: ");

        if (action === "exit") {
            alert("Exiting the system. Goodbye!");
            break;
        } else if (action === "add") {
            addCustomer();
        } else if (action === "service") {
            if (Object.keys(hashedTable).length === 0) {
                alert("No customers to service.");
                continue;
            }

            const numberToService = prompt("Enter the number of the customer to service: ");

            const number = parseInt(numberToService);

            if (isNaN(number) || !hashedTable[number]) {
                alert("Please type the correct number and try again.");
                continue;
            }

            // Service the customer
            alert(`Servicing Customer: ${hashedTable[number]}`);
            delete hashedTable[number];

            // Display updated hashed table
            displayHashTable();
        } else {
            alert("Please type the correct action and try again.");
        }
    }

    if (Object.keys(hashedTable).length === 0) {
        alert("All customers have been serviced.");
    }
}

main();
