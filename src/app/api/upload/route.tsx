import { NextResponse } from 'next/server';
import React from 'react';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
    try {
        // 1. Create uploads directory if it doesn't exist
        const uploadsDir = path.join(process.cwd(), 'public/uploads');
        if (!fs.existsSync(uploadsDir)) {
            fs.mkdirSync(uploadsDir, { recursive: true });
        }

        // 2. Get the file from the request
        const formData = await request.formData();
        const file = formData.get('file') as File;
        
        if (!file) {
            return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
        }

        // 3. Convert file to buffer
        const buffer = Buffer.from(await file.arrayBuffer());
        
        // 4. Create unique filename
        const timestamp = Date.now();
        const originalName = file.name.replace(/[^a-zA-Z0-9.]/g, '-');
        const filename = `${timestamp}-${originalName}`;
        const filepath = path.join(uploadsDir, filename);

        // 5. Write file to uploads directory
        
        await fs.promises.writeFile(filepath, buffer);

        // 6. Return success response
        return NextResponse.json({
            success: true,
            filename: filename,
            originalName: file.name,
            size: file.size,
            type: file.type
        });

    } catch (error) {
        console.error('Upload error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}

export const config = {
    api: {
        bodyParser: false, // Required for file uploads
    },
};