"use server"

import { prisma } from "../db"

export async function PostEntry(formData: FormData){
    "use server"

    const data = await prisma.guestbook.create({
        data: {
            message: formData.get("entry") as string,
            username: "hello",


        }
    })
}