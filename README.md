# RBAC (Role-Based Access Control) with MongoDB

This project implements an authentication and authorization system with Role-Based Access Control (RBAC). The system allows you to create roles such as Admin, Moderator, and User, and assigns permissions based on these roles.

## Features

- Set up roles in MongoDB (Admin, Moderator, User).
- Easy-to-use script to create the roles.
- MongoDB integration for persistent storage.

## Installation

1. Clone this repository to your local machine.

    ```bash
    git clone https://github.com/your-username/rbac-project.git
    ```

2. Navigate into the project directory.

    ```bash
    cd rbac-project
    ```

3. Install dependencies.

    ```bash
    npm install
    ```

4. Create a `.env` file and add your MongoDB URI.

    ```env
    MONGO_URI=mongodb://localhost:27017/rbac_db
    ```

5. Run the role creation script.

    ```bash
    node createRoles.js
    ```

    This will insert the default roles (Admin, Moderator, User) into your MongoDB database.

## License

This project is licensed under the MIT License.
