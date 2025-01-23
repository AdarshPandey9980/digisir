import { app, db } from "@/config/firebase.config";
import { collection, addDoc } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
const auth = getAuth(app);


export const POST = async (request: NextRequest) => {
    try {
        const reqBody = await request.json()
        const { name, email, password } = reqBody;

        if (!email || !password || !name ) {
            return NextResponse.json({ error: "All fields are required " }, { status: 400 });
        }

        const userCredential = await createUserWithEmailAndPassword(auth, email, password);

        const user = userCredential.user;

        const usersCollectionRef = collection(db, 'user');

        const hashedPassword = await bcrypt.hash(password, 10);

        const docRef = await addDoc(usersCollectionRef, {
            userId:user.uid,
            name,
            email,
            password:hashedPassword,
        });

        return NextResponse.json({message:"user create and added to db",user,docRef}, { status: 200 });
    } catch (error: any) {
        return new Response(JSON.stringify({ error: error.message }), { status: 400 });
    }
}