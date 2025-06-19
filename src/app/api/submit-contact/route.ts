import { NextRequest, NextResponse } from 'next/server'

interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  message: string
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json() as ContactFormData
    
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ success: false, error: 'Email service not configured' }, { status: 500 })
    }

    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev',
        to: ['wren@thekeptkitchen.com'],
        subject: `New Contact Message from ${formData.firstName} ${formData.lastName}`,
        html: `
          <h2>New Contact Message from Kept Kitchen Website</h2>
          
          <h3>Contact Information</h3>
          <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          
          <h3>Message</h3>
          <p>${formData.message.replace(/\n/g, '<br>')}</p>
          
          <hr>
          <p><em>This message was sent from the Kept Kitchen contact form.</em></p>
        `
      })
    })

    if (!emailResponse.ok) {
      const errorText = await emailResponse.text()
      console.error('Email sending failed:', errorText)
      return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 })
  }
}