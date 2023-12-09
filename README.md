# Employee Management

This is the proposed Full Stack testing solution, using technologies:

- Node
- Express
- TypeScript
- Prisma

### Project configuration

The packages are required to be installed:

```sh
npm i  # npm
```

```sh
pnpm i  # pnpm
```

With the packages installed, all that remains is to run the project:

```sh
npm run dev  # npm
```

```sh
pnpm dev  # pnpm
```

### Project structure

All the main code of the project is located in the src folder, where there are two folders called user and assignament which are the project modules.

The database structure is located in the prism folder, which has the following models:

- UserRoles
- Users
- Employees
- AssignamentLeadToEmployee

The structure given is for the creation of a user, role assignment and assigning a leader to an employee. It was decided to create the AssignamentLeadToEmployee table where a leader is assigned to an employee, since at the time of creating the employee there is no Direct assignment is mandatory, nor does it require having an assigned leader.

### Endpoints:

To work with role users themes the available endpoints are the following:

- http://localhost:3000/api/v1/users/userRoles (GET)
- http://localhost:3000/api/v1/users/userRoles (POST)

To work with user themes the available endpoints are the following:

- http://localhost:3000/api/v1/users/1 (GET)
- http://localhost:3000/api/v1/users (GET)
- http://localhost:3000/api/v1/users (POST)

To work with assignment topics, the available endpoints are the following:

- http://localhost:3000/api/v1/assignaments (POST)
- http://localhost:3000/api/v1/assignaments (PUT)
- http://localhost:3000/api/v1/assignaments/employees (GET)
