import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

interface ServiceRequestForm {
  firstName: string
  lastName: string
  email: string
  phone?: string
  country: string
  addressLine1: string
  addressLine2?: string
  city: string
  state: string
  zip: string
  serviceFrequency: string
  startDate: string
  householdInfo: string
  idealDays: string[]
  mealQuantity: string
  breakfastAddOn: boolean
  dietPreferences: string
  allergies: string
  favorites: string
  groceryPreference: string
  proteins: string[]
  spiceLevel: string
  vegetarianPreference: string
  additionalComments: string
}

export async function POST(request: NextRequest) {
  try {
    const formData: ServiceRequestForm = await request.json()

    // Initialize Resend
    const resend = new Resend(process.env.RESEND_API_KEY)

    // Format the email content
    const emailHtml = `
      <h2>New Service Request Form Submission</h2>
      
      <h3>Contact Information</h3>
      <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
      
      <h3>Address</h3>
      <p><strong>Country:</strong> ${formData.country}</p>
      <p><strong>Address Line 1:</strong> ${formData.addressLine1}</p>
      <p><strong>Address Line 2:</strong> ${formData.addressLine2 || 'Not provided'}</p>
      <p><strong>City:</strong> ${formData.city}</p>
      <p><strong>State:</strong> ${formData.state}</p>
      <p><strong>ZIP Code:</strong> ${formData.zip}</p>
      
      <h3>Service Preferences</h3>
      <p><strong>Service Frequency:</strong> ${formData.serviceFrequency}</p>
      <p><strong>Start Date:</strong> ${formData.startDate}</p>
      <p><strong>Household Info:</strong> ${formData.householdInfo}</p>
      <p><strong>Ideal Days:</strong> ${formData.idealDays?.join(', ') || 'None selected'}</p>
      <p><strong>Meal Quantity:</strong> ${formData.mealQuantity}</p>
      <p><strong>Breakfast Add-On:</strong> ${formData.breakfastAddOn ? 'Yes' : 'No'}</p>
      
      <h3>Dietary Information</h3>
      <p><strong>Diet Preferences:</strong> ${formData.dietPreferences || 'None specified'}</p>
      <p><strong>Allergies/Dislikes:</strong> ${formData.allergies || 'None specified'}</p>
      <p><strong>Favorites:</strong> ${formData.favorites || 'None specified'}</p>
      <p><strong>Grocery Preference:</strong> ${formData.groceryPreference || 'No preference'}</p>
      <p><strong>Proteins:</strong> ${formData.proteins?.join(', ') || 'None selected'}</p>
      <p><strong>Spice Level:</strong> ${formData.spiceLevel || 'Not specified'}</p>
      <p><strong>Vegetarian Preference:</strong> ${formData.vegetarianPreference || 'Not specified'}</p>
      
      <h3>Additional Comments</h3>
      <p>${formData.additionalComments || 'None provided'}</p>
      
      <hr>
      <p><em>Submitted at: ${new Date().toLocaleString()}</em></p>
    `

    // Send the email
    const data = await resend.emails.send({
      from: 'Service Request <noreply@thekeptkitchen.com>',
      to: ['wrem@thekeptkitchen.com'],
      subject: `New Service Request from ${formData.firstName} ${formData.lastName}`,
      html: emailHtml,
    })

    return NextResponse.json({ success: true, data: data })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to send email' },
      { status: 500 }
    )
  }
}