import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const name = formData.get('name')
    const phone = formData.get('phone')
    const email = formData.get('email')
    const service = formData.get('service')
    const location = formData.get('location')
    const message = formData.get('message')

    // Log inquiry cleanly in Vercel server logs / observability dashboard
    console.log('[NEW ENQUIRY - VERCEL API]', {
      name,
      phone,
      email,
      service,
      location,
      message,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json({ success: true, message: 'Enquiry received cleanly' })
  } catch (error) {
    console.error('[ENQUIRY API ERROR]', error)
    return NextResponse.json({ success: false, error: 'Failed to process enquiry' }, { status: 500 })
  }
}
