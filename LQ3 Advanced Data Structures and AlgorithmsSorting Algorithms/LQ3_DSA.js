// Bus Seat Reservation System

// Define the buses and their destinations
let buses = [
    { name: "Cubao", destination: "Cubao", passengers: new Array(30).fill(null) },
    { name: "Baguio", destination: "Baguio", passengers: new Array(30).fill(null) },
    { name: "Pasay", destination: "Pasay", passengers: new Array(30).fill(null) }
];

// Define the users
let users = [
    { username: "admin", password: "password" },
    { username: "Jaspergwapo", password: "reel" },
    { username: "Jesterpangit", password: "6969" }
];

// Function to authenticate users
function authenticateUser(username, password) {
    return users.some(user => user.username === username && user.password === password);
}

// Function to display the list of buses
function displayBuses() {
    console.log("\nAvailable Buses:");
    buses.forEach((bus, index) => {
        console.log(`${index + 1}. ${bus.name} - Destination: ${bus.destination}`);
    });
}

// Function to display the list of passengers in a bus
function displayPassengers(busName) {
    let bus = buses.find(b => b.name.toLowerCase() === busName.toLowerCase());
    if (bus) {
        console.log(`\nPassengers in ${bus.name}:`);
        bus.passengers.forEach((passenger, index) => {
            console.log(`${index + 1}. ${passenger || "AVAILABLE"}`);
        });
    } else {
        console.log(`\nBus "${busName}" not found.`);
    }
}

// Function to reserve a seat
function reserveSeat(busName, seatNumber, customerName) {
    let bus = buses.find(b => b.name.toLowerCase() === busName.toLowerCase());
    if (!bus) {
        console.log(`\nBus "${busName}" not found.`);
        return;
    }
    if (seatNumber < 1 || seatNumber > 30) {
        console.log("\nPlease select a valid seat number. Choose a seat between 1 and 30.");
        return;
    }
    if (bus.passengers[seatNumber - 1] === null) {
        bus.passengers[seatNumber - 1] = customerName;
        console.log(`\nSeat ${seatNumber} reserved for ${customerName} in ${bus.name}.`);
    } else {
        console.log(`\nSeat ${seatNumber} in ${bus.name} is already taken.`);
    }
}

// Function to cancel a reservation
function cancelReservation(busName, customerName) {
    let bus = buses.find(b => b.name.toLowerCase() === busName.toLowerCase());
    if (bus) {
        let seatIndex = bus.passengers.findIndex(passenger => passenger === customerName);
        if (seatIndex !== -1) {
            bus.passengers[seatIndex] = null;
            console.log(`\nReservation cancelled for ${customerName} in ${bus.name}.`);
        } else {
            console.log(`\nNo reservation found for ${customerName} in ${bus.name}.`);
        }
    } else {
        console.log(`\nBus "${busName}" not found.`);
    }
}

// Function to sort the passengers in a bus
function sortPassengers(busName) {
    let bus = buses.find(b => b.name.toLowerCase() === busName.toLowerCase());
    if (bus) {
        let passengers = bus.passengers.filter(passenger => passenger !== null);
        passengers.sort((a, b) => a.localeCompare(b));
        bus.passengers = new Array(30).fill(null);
        passengers.forEach((passenger, index) => {
            bus.passengers[index] = passenger;
        });
        console.log(`\nPassengers in ${bus.name} sorted alphabetically.`);
    } else {
        console.log(`\nBus "${busName}" not found.`);
    }
}

// Main program
while (true) {
    console.log("\nWelcome to Partas Bus Seat Reservation!");
    console.log("\n1. Ticket Person");
    console.log("2. Customer");
    console.log("3. Exit");
    let mainChoice = parseInt(prompt("Enter your choice: "));

    if (mainChoice === 1) {
        // Ticket Person Login
        let username = prompt("Enter username: ");
        let password = prompt("Enter password: ");
        if (authenticateUser(username, password)) {
            console.log("\nLogin Successful!");
            while (true) {
                console.log("\n1. Logout");
                console.log("2. View Buses and Passengers");
                console.log("3. Manage Bus Reservations");
                let ticketChoice = parseInt(prompt("Enter your choice: "));

                if (ticketChoice === 1) {
                    console.log("\nLogged out successfully.");
                    break;
                } else if (ticketChoice === 2) {
                    displayBuses();
                    buses.forEach(bus => displayPassengers(bus.name));
                } else if (ticketChoice === 3) {
                    console.log("\n1. Add Reservation");
                    console.log("2. Cancel Reservation");
                    console.log("3. Sort Passengers");
                    let manageChoice = parseInt(prompt("Enter your choice: "));

                    if (manageChoice === 1) {
                        let busName = prompt("Enter bus name: ");
                        let seatNumber = parseInt(prompt("Enter seat number: "));
                        let customerName = prompt("Enter customer name: ");
                        reserveSeat(busName, seatNumber, customerName);
                    } else if (manageChoice === 2) {
                        let busName = prompt("Enter bus name: ");
                        let customerName = prompt("Enter customer name: ");
                        cancelReservation(busName, customerName);
                    } else if (manageChoice === 3) {
                        let busName = prompt("Enter bus name: ");
                        sortPassengers(busName);
                    }
                }
            }
        } else {
            console.log("\nIncorrect username or password.");
        }
    } else if (mainChoice === 2) {
        // Customer Options
        while (true) {
            console.log("\n1. View Buses");
            console.log("2. Reserve a Seat");
            console.log("3. Cancel a Reservation");
            console.log("4. Back");
            let customerChoice = parseInt(prompt("Enter your choice: "));

            if (customerChoice === 1) {
                displayBuses();
            } else if (customerChoice === 2) {
                let busName = prompt("Enter bus name: ");
                let seatNumber = parseInt(prompt("Enter seat number: "));
                let customerName = prompt("Enter your name: ");
                reserveSeat(busName, seatNumber, customerName);
            } else if (customerChoice === 3) {
                let busName = prompt("Enter bus name: ");
                let customerName = prompt("Enter your name: ");
                cancelReservation(busName, customerName);
            } else if (customerChoice === 4) {
                break;
            }
        }
    } else if (mainChoice === 3) {
        console.log("\nThank you for using the Bus Seat Reservation System!");
        break;
    } else {
        console.log("\nThe option selected was incorrect. Please try again.");
    }
}
