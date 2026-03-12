### Steps to create a backend with db
1. generate package.json (npm init -y)
2. create express server (npm install express)
3. install mongoose and connect to MongoDB server
      REST API - MongoDB native driver ->DB Serber
      REST API - Mongoose ODM tool ->DB Server
      ODM-> Object document mapping
127.0.0.1->local host IP address 
all database requests are block requests only. so every database operation is a promise 
to consume the promise we use async and await
4. Build User REST API 
      - create user 
      - read all user 
      - read a user by id
      - update a user by id 
      - delete a user by id 
5. Create schema and model of the resource[user]
6. Create User API and define the routes





q 
make the following routes protected 
          - read users and products
          - read user and products by id
          - update user and product
          - delete user and product