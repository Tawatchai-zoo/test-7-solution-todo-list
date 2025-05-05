/* eslint-disable @typescript-eslint/no-explicit-any */
import { userClient } from "@/lib/grpc-client";

export async function GET() {
  try {
    const response = await new Promise((resolve, reject) => {
      userClient.TransformUsers({}, (err: any, res: any) => {
        if (err) reject(new Error(err.message));
        else resolve(res);
      });
    });

    return new Response(JSON.stringify(response), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
