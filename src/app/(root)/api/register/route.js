import { NextResponse } from 'next/server';
import React from 'react'
import { json } from 'stream/consumers'

export const POST=async(req)=>{
    try {
        const{name,email,password}=await req.json();

        console.log("Name: ",name);
        console.log("Email: ",email);
        console.log("Password: ",password);

        return NextResponse.json({message:"user registered"},{status:201})

    } catch (error) {
        
    }
}
