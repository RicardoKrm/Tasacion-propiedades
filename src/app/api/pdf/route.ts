import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Aquí en la Fase 2 implementaremos Puppeteer para generar el PDF real.
    // Por ahora retornamos un mock indicando éxito.
    
    return NextResponse.json({ 
      success: true, 
      message: 'PDF generado correctamente',
      url: '/informe-tasacion-mock.pdf',
      data: data
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Error generando PDF' }, { status: 500 });
  }
}
