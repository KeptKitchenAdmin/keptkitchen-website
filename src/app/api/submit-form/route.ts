import { NextRequest, NextResponse } from 'next/server'

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
  kidFoodAddOn: boolean
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
    console.log('Route started')
    const formData: ServiceRequestForm = await request.json()
    console.log('JSON parsed successfully')
    
    console.log('API key exists:', !!process.env.RESEND_API_KEY)
    
    // Use raw fetch instead of Resend SDK
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev',
        to: ['wren@thekeptkitchen.com'],
        subject: `New Service Request from ${formData.firstName} ${formData.lastName}`,
        html: `
          <h2>New Service Request Form Submission</h2>
          <p><em>Submitted at: ${new Date().toLocaleString()}</em></p>
          <hr>
          
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
          <p><strong>Preferred Service Frequency:</strong> ${
            formData.serviceFrequency === 'once' ? 'Once per week (most common)' :
            formData.serviceFrequency === 'twice' ? 'Twice per week (split service – higher volume or freshness)' :
            formData.serviceFrequency === 'unsure' ? 'Not sure yet – I\'d like to discuss options' :
            formData.serviceFrequency || 'Not selected'
          }</p>
          <p><strong>When would you like to begin services?:</strong> ${
            formData.startDate === 'asap' ? 'As soon as possible' :
            formData.startDate === '1-2weeks' ? '1-2 weeks' :
            formData.startDate === '3-4weeks' ? '3-4 weeks' :
            formData.startDate === '1month' ? '1 month or more' :
            formData.startDate || 'Not selected'
          }</p>
          <p><strong>Household Info (How many people, ages):</strong> ${formData.householdInfo || 'Not provided'}</p>
          <p><strong>Ideal in-home cook or delivery day(s):</strong> ${formData.idealDays?.join(', ') || 'None selected'}</p>
          
          <h3>Weekly Meal Quantity</h3>
          <p><strong>How many entrees (2 portions each) per week?:</strong> ${
            formData.mealQuantity === '3entrees' ? '3 Entrees (6 portions)' :
            formData.mealQuantity === '4entrees' ? '4 Entrees (8 portions)' :
            formData.mealQuantity === '5entrees' ? '5 Entrees (10 portions)' :
            formData.mealQuantity === '6entrees' ? '6 Entrees (12 portions – available only for split service)' :
            formData.mealQuantity || 'Not selected'
          }</p>
          <p><strong>Breakfast Add-On (4 or 6 servings):</strong> ${formData.breakfastAddOn ? 'YES' : 'NO'}</p>
          <p><strong>Kid-Food Add-On (4 or 8 servings):</strong> ${formData.kidFoodAddOn ? 'YES' : 'NO'}</p>
          
          <h3>Dietary Information</h3>
          <p><strong>Specific diet preferences (Gluten Free, Paleo, Vegan, Vegetarian, etc.):</strong></p>
          <p style="margin-left: 20px;">${formData.dietPreferences || 'None specified'}</p>
          
          <p><strong>Food allergies, intolerances, or strong dislikes (Dairy, peanuts, brussel sprouts, etc.):</strong></p>
          <p style="margin-left: 20px;">${formData.allergies || 'None specified'}</p>
          
          <p><strong>Dishes, ingredients, or cuisines that you LOVE (Spicy food, Italian food, Soup, etc.):</strong></p>
          <p style="margin-left: 20px;">${formData.favorites || 'None specified'}</p>
          
          <p><strong>Grocery preference on conventional or organic items or produce:</strong></p>
          <p style="margin-left: 20px;">${formData.groceryPreference || 'No preference specified'}</p>
          
          <p><strong>Proteins you enjoy:</strong></p>
          <p style="margin-left: 20px;">${formData.proteins?.join(', ') || 'None selected'}</p>
          
          <p><strong>Spice level preference:</strong> ${
            formData.spiceLevel === 'none' ? 'No spice' :
            formData.spiceLevel === 'mild' ? 'Mild' :
            formData.spiceLevel === 'medium' ? 'Medium' :
            formData.spiceLevel === 'hot' ? 'Hot' :
            formData.spiceLevel === 'very-hot' ? 'Very Hot' :
            formData.spiceLevel || 'Not selected'
          }</p>
          
          <p><strong>Would you like any of your meals to be vegetarian?:</strong> ${
            formData.vegetarianPreference === 'all' ? 'Yes, all of them please' :
            formData.vegetarianPreference === 'some' ? 'Some of them is fine' :
            formData.vegetarianPreference === 'none' ? 'Nope, I\'d like some meat in all of them!' :
            formData.vegetarianPreference || 'Not selected'
          }</p>
          
          <h3>Additional Comments</h3>
          <p>${formData.additionalComments || 'None provided'}</p>
        `
      })
    })

    console.log('Email response status:', emailResponse.status)
    console.log('Email response ok:', emailResponse.ok)
    
    if (!emailResponse.ok) {
      const errorText = await emailResponse.text()
      console.error('Resend API error:', errorText)
      return NextResponse.json({ error: 'Email failed to send' }, { status: 400 })
    }

    const emailResult = await emailResponse.json()
    console.log('Email sent successfully:', emailResult)
    console.log('About to return success response')
    return NextResponse.json({ success: true })
    
  } catch (error) {
    console.error('ERROR:', error)
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 })
  }
}