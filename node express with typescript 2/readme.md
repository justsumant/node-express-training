# npm init -y

# tsc --init

# update tsconfig.json to have

    "target": "ES6",
    "moduleResolution": "node",

# update packa.json to have

    // scripts
    "scripts": {
    "start": "nodemon src/app.ts",
    "test": "echo \"Error: no test specified\" && exit 1"

}

    // dependencies
    "dependencies": {
    "@prisma/client": "^4.15.0",
    "@types/bcrypt": "^5.0.0",
    "@types/jsonwebtoken": "^9.0.2",
    "bcrypt": "^5.1.0",
    "dot-env": "^0.0.1",
    "dotenv": "^16.1.4",
    "express": "^4.18.2",
    "jsonwebtoken": "^9.0.0",
    "ts-node": "^10.9.1",
    "ts-node-dev": "^2.0.0"
    },

    // dev dependencies
    "devDependencies": {
    "@types/express": "^4.17.17",
    "@types/node": "^20.3.0",
    "prisma": "^4.15.0"
    }

# do npm install

# set up src/app.ts file

    enable only session one piece of code
    do npm start

<!-- end of first part -->
<!-- user route to controller -->

# set up user route, create files, include codes

    src/routes/user.routes.ts
    src/routes/index.ts
    src/controllers/user.controller.ts

<!-- using error handler-->

# set up error handeling middle ware and router error handler - add files

    src/errors/index.ts
    - update app.ts
       (now the catch clause form controller will direct to error handler)

<!-- user prisma -->

# validate for mysql database

# install prisma

    npx prisma init
    update .env file for database url
    update schema.prisma file with user model

        model User {
            id    Int     @id @default(autoincrement())
            email String  @unique
            fullname  String?
            address String
            password String
        }

# run migration

    npx prisma migrate dev --name first_migration

# generate prisma client

    npx prisma generate

# add prisma util method

    add file src/utils/prisma.util.ts
        import { PrismaClient } from "@prisma/client";
        export const prismaClient = new PrismaClient();

# update user controller to get user from db

    const users = await prismaClient.user.findMany();
    res.status(200).json(users);

# adding auth middle ware,

    create file
    middlewares/auth.middleware.ts
    update user controller for login signup setup
    update routes file for all other routes
