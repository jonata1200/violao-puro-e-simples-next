import { NextResponse } from 'next/server';

/**
 * Health check endpoint para Docker healthcheck
 * Retorna status 200 se a aplicação está rodando corretamente
 */
export async function GET() {
  return NextResponse.json(
    { 
      status: 'ok',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
    },
    { status: 200 }
  );
}
