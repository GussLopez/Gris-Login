import User from "../models/User";
import { hashPassword } from "./auth";

export async function initializeAdmin() {
    try {
        const adminExists = await User.findOne({where: {email: process.env.ADMIN_EMAIL}})

        if (!adminExists) {
            const adminPassword = process.env.ADMIN_PASSWORD
            const hashedPassword = await hashPassword(adminPassword)

            await User.create({
                name: 'Admin',
                email: process.env.ADMIN_EMAIL,
                password: hashedPassword,
                role: 'admin',
                confirmed: true
            })
            console.log('Admin created succesfully');
        } else {
            console.log('Admin already exists');
        }
    } catch (error) {
        console.log('Error initialazing admin', error);
    }
}