// import { NextRequest, NextResponse } from 'next/server'

// export async function POST(request: NextRequest) {
//   try {
//     const body = await request.formData()
//     const name = body.get('name') as string
//     const email = body.get('email') as string
//     const message = body.get('message') as string

//     // Here you would typically send an email or save to a database
//     // For now, we'll just log the form data
//     console.log('Contact form submission:', { name, email, message })

//     // In a real application, you might use a service like:
//     // - Resend, SendGrid, or Nodemailer for sending emails
//     // - A database to store the messages
//     // - A notification service


//     return NextResponse.json(
//       { message: 'Message sent successfully!' },
//       { status: 200 }
//     )
//   } catch (error) {
//     console.error('Error processing contact form:', error)
//     return NextResponse.json(
//       { error: 'Failed to send message. Please try again.' },
//       { status: 500 }
//     )
//   }
// }
