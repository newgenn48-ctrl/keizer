'use server'

import nodemailer from 'nodemailer'

// HTML escape function to prevent XSS in emails
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  }
  return text.replace(/[&<>"']/g, (char) => map[char])
}

export interface ContactFormData {
  name: string
  email: string
  phone: string
  company: string
  service: string
  message: string
}

export interface ContactFormState {
  success: boolean
  message: string
  errors?: {
    name?: string
    email?: string
    phone?: string
    company?: string
    service?: string
    message?: string
  }
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function validatePhone(phone: string): boolean {
  if (!phone) return true
  const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/
  return phoneRegex.test(phone)
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const data: ContactFormData = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    phone: formData.get('phone') as string,
    company: formData.get('company') as string,
    service: formData.get('service') as string,
    message: formData.get('message') as string,
  }

  const errors: ContactFormState['errors'] = {}

  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Vul een geldige naam in (minimaal 2 karakters)'
  }

  if (!data.email || !validateEmail(data.email)) {
    errors.email = 'Vul een geldig e-mailadres in'
  }

  if (data.phone && !validatePhone(data.phone)) {
    errors.phone = 'Vul een geldig telefoonnummer in'
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.message = 'Vul een bericht in (minimaal 10 karakters)'
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: 'Er zijn fouten in het formulier. Controleer de velden.',
      errors,
    }
  }

  try {
    // Check if SMTP is configured
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      // Fallback: log to console if SMTP is not configured
      console.log('Contact form submission (SMTP not configured):', data)
      return {
        success: true,
        message:
          'Bedankt voor uw bericht! Wij nemen binnen 24 uur contact met u op.',
      }
    }

    // Send email to Keizer Logistics
    await transporter.sendMail({
      from: `"Keizer Logistics Website" <${process.env.SMTP_USER}>`,
      to: 'contact@keizer-logistics.nl',
      replyTo: data.email,
      subject: `Nieuw contactformulier: ${escapeHtml(data.service || 'Algemeen')} - ${escapeHtml(data.name)}`,
      html: `
        <h2>Nieuw bericht via de website</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Naam</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${escapeHtml(data.name)}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">E-mail</td>
            <td style="padding: 10px; border: 1px solid #ddd;"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Telefoon</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${escapeHtml(data.phone || '-')}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Bedrijf</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${escapeHtml(data.company || '-')}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Dienst</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${escapeHtml(data.service || '-')}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Bericht</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${escapeHtml(data.message).replace(/\n/g, '<br>')}</td>
          </tr>
        </table>
      `,
      text: `
Nieuw bericht via de website

Naam: ${data.name}
E-mail: ${data.email}
Telefoon: ${data.phone || '-'}
Bedrijf: ${data.company || '-'}
Dienst: ${data.service || '-'}

Bericht:
${data.message}
      `,
    })

    // Send confirmation email to the user
    await transporter.sendMail({
      from: `"Keizer Logistics" <${process.env.SMTP_USER}>`,
      to: data.email,
      subject: 'Bedankt voor uw bericht - Keizer Logistics',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #e8b95a;">Bedankt voor uw bericht!</h2>
          <p>Beste ${escapeHtml(data.name)},</p>
          <p>Wij hebben uw bericht ontvangen en nemen binnen 24 uur contact met u op.</p>
          <p>Hieronder vindt u een kopie van uw bericht:</p>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Dienst:</strong> ${escapeHtml(data.service || 'Algemeen')}</p>
            <p><strong>Bericht:</strong><br>${escapeHtml(data.message).replace(/\n/g, '<br>')}</p>
          </div>
          <p>Voor spoedtransport kunt u ons 24/7 bereiken op <a href="tel:+31684903364">06 84903364</a>.</p>
          <p>Met vriendelijke groet,<br><strong>Keizer Logistics BV</strong></p>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">
            Keizer Logistics BV<br>
            Schietlood 14 D, 2495AN 's-Gravenhage<br>
            Tel: 06 84903364 | E-mail: Info@keizer-logistics.nl
          </p>
        </div>
      `,
    })

    return {
      success: true,
      message:
        'Bedankt voor uw bericht! Wij nemen binnen 24 uur contact met u op.',
    }
  } catch (error) {
    console.error('Contact form error:', error)
    return {
      success: false,
      message:
        'Er is een fout opgetreden bij het verzenden. Probeer het later opnieuw of neem telefonisch contact op.',
    }
  }
}
