import bcrypt from "bcryptjs";

export interface User {
    id: string;
    username: string;
    password: string;
    role: "admin" | "user";
}

const users: User[] = [
    {
        id: "u1",
        username: "admin",
        password: bcrypt.hashSync("admin123", 10),
        role: "admin"
    },
    {
        id: "u2",
        username: "user",
        password: bcrypt.hashSync("user123", 10),
        role: "user"
    }
];

export default users;