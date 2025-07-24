import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(request: Request) {
    try {
        // Get the file from the request
        const formData = await request.formData();
        const file = formData.get('file') as File;
        
        if (!file) {
            return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
        }

        // For Edge Runtime, we'll return file info without saving to filesystem
        // In production, you'd store this in Cloudflare R2 or similar
        const timestamp = Date.now();
        const originalName = file.name.replace(/[^a-zA-Z0-9.]/g, '-');
        const filename = `${timestamp}-${originalName}`;

        // Return success response (file not actually saved in Edge Runtime)
        return NextResponse.json({
            success: true,
            filename: filename,
            originalName: file.name,
            size: file.size,
            type: file.type,
            message: 'File received successfully (Edge Runtime - not saved to disk)'
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