import { app } from "@/config/firebase.config";
import { getAuth, signInWithEmailAndPassword,deleteUser } from "firebase/auth";
import { NextRequest, NextResponse } from "next/server";
const auth = getAuth(app);

export const POST = async (request: NextRequest,response: NextResponse) => {
    try {
        const reqBody = await request.json()
        const { email, password } = reqBody;

        if (!email || !password) {
            return NextResponse.json({ error: "All fields are required " }, { status: 400 });
        }

        const userCredential = await signInWithEmailAndPassword(auth, email, password);

        const user = userCredential.user;

        return NextResponse.json({message:"user login",user}, { status: 200 });

    } catch (error:any) {
        return new Response(JSON.stringify({ error: error.message }), { status: 400 });
    }
}