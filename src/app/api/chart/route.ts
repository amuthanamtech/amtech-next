import { NextRequest, NextResponse } from "next/server";

interface RequestBody {
  prompt: string;
}

interface GroqResponse {
  choices?: Array<{
    message?: {
      content?: string;
    };
  }>;
}

export async function GET() {
  return NextResponse.json({ message: "Chart API is working!" });
}

export async function POST(request: NextRequest) {
  try {
    const { prompt }: RequestBody = await request.json();

    if (!prompt || prompt.trim() === "") {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    // Check if API key is configured
    if (!process.env.GROQ_API_KEY) {
      // For now, return a simple response if no API key is configured
      return NextResponse.json({
        text: `Echo: ${prompt} (GROQ_API_KEY not configured - this is a test response)`
      });
    }

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "meta-llama/llama-4-scout-17b-16e-instruct",
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          { role: "user", content: prompt }
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Groq API Error:", errorText);
      return NextResponse.json(
        { error: errorText },
        { status: response.status }
      );
    }

    const data: GroqResponse = await response.json();
    const reply = data?.choices?.[0]?.message?.content || "Sorry, no reply.";

    return NextResponse.json({ text: reply });
  } catch (error) {
    console.error("API Route Error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Internal Server Error" },
      { status: 500 }
    );
  }
}
