"use server"
import prisma from "@/lib/db/db"

export async function NewUser(){
    const user = await prisma.user.create({
        data: {
            name: "Alice",
            email: "
        }
    })

}