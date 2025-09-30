# Airways System

## Overview
The Airways System is a comprehensive flight management application built using NestJS and PostgreSQL. It allows users to register, log in, search for flights, and manage their bookings. The application also includes an admin panel for managing users, flights, and other resources.

## Features
- **User Authentication**: Users can register and log in to their accounts.
- **Flight Search**: Users can search for flights based on various parameters such as departure and arrival locations, class, and seat selection.
- **Booking Management**: Users can purchase tickets and manage their bookings.
- **Reviews**: Users can leave ratings and comments on flights.
- **Loyalty Program**: Users can participate in a loyalty program to earn rewards.
- **News Section**: Stay updated with the latest news related to air travel.

## Roles
- **USER**: Regular users who can book flights and manage their accounts.
- **ADMIN**: Administrators who can manage users and flights.
- **SUPER-ADMIN**: Super administrators who can manage other admins and perform CRUD operations on all resources.

## Admin Panel Features
- **User Management**: Create, read, update, and delete user accounts.
- **Flight Management**: Create, cancel, and manage flights.
- **Ticket Management**: Manage ticket bookings, including cancellations and seat changes.
- **Review Management**: View and manage user reviews.
- **News Management**: Create and manage news articles.

## Database Structure
The application uses PostgreSQL with the following main tables:
- **Users**: Stores user information and roles.
- **Planes**: Stores information about different planes.
- **Seats**: Stores seat information for each flight.
- **Companies**: Stores airline company information.
- **Flights**: Stores flight details.
- **Classes**: Stores information about flight classes (e.g., VIP, Economy).
- **News**: Stores news articles related to air travel.
- **Countries**: Stores country information.
- **Cities**: Stores city information.
- **Airports**: Stores airport information.

## Getting Started
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd airways-system
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Create a `.env` file in the root directory and configure your database connection settings.
5. Run the application:
   ```
   npm run start
   ```

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.