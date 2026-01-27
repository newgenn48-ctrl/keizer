import { submitContactForm, type ContactFormState } from '@/app/actions/contact'

describe('Contact Form Validation', () => {
  const initialState: ContactFormState = {
    success: false,
    message: '',
  }

  const createFormData = (data: Record<string, string>): FormData => {
    const formData = new FormData()
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value)
    })
    return formData
  }

  describe('Name validation', () => {
    it('should reject empty name', async () => {
      const formData = createFormData({
        name: '',
        email: 'test@example.com',
        phone: '',
        company: '',
        service: '',
        message: 'Dit is een test bericht met voldoende karakters.',
      })

      const result = await submitContactForm(initialState, formData)

      expect(result.success).toBe(false)
      expect(result.errors?.name).toBeDefined()
    })

    it('should reject name with less than 2 characters', async () => {
      const formData = createFormData({
        name: 'A',
        email: 'test@example.com',
        phone: '',
        company: '',
        service: '',
        message: 'Dit is een test bericht met voldoende karakters.',
      })

      const result = await submitContactForm(initialState, formData)

      expect(result.success).toBe(false)
      expect(result.errors?.name).toBeDefined()
    })

    it('should accept valid name', async () => {
      const formData = createFormData({
        name: 'Jan Jansen',
        email: 'test@example.com',
        phone: '',
        company: '',
        service: '',
        message: 'Dit is een test bericht met voldoende karakters.',
      })

      const result = await submitContactForm(initialState, formData)

      expect(result.errors?.name).toBeUndefined()
    })
  })

  describe('Email validation', () => {
    it('should reject empty email', async () => {
      const formData = createFormData({
        name: 'Jan Jansen',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: 'Dit is een test bericht met voldoende karakters.',
      })

      const result = await submitContactForm(initialState, formData)

      expect(result.success).toBe(false)
      expect(result.errors?.email).toBeDefined()
    })

    it('should reject invalid email format', async () => {
      const formData = createFormData({
        name: 'Jan Jansen',
        email: 'invalid-email',
        phone: '',
        company: '',
        service: '',
        message: 'Dit is een test bericht met voldoende karakters.',
      })

      const result = await submitContactForm(initialState, formData)

      expect(result.success).toBe(false)
      expect(result.errors?.email).toBeDefined()
    })

    it('should reject email without domain', async () => {
      const formData = createFormData({
        name: 'Jan Jansen',
        email: 'test@',
        phone: '',
        company: '',
        service: '',
        message: 'Dit is een test bericht met voldoende karakters.',
      })

      const result = await submitContactForm(initialState, formData)

      expect(result.success).toBe(false)
      expect(result.errors?.email).toBeDefined()
    })

    it('should accept valid email', async () => {
      const formData = createFormData({
        name: 'Jan Jansen',
        email: 'test@example.com',
        phone: '',
        company: '',
        service: '',
        message: 'Dit is een test bericht met voldoende karakters.',
      })

      const result = await submitContactForm(initialState, formData)

      expect(result.errors?.email).toBeUndefined()
    })
  })

  describe('Phone validation', () => {
    it('should accept empty phone', async () => {
      const formData = createFormData({
        name: 'Jan Jansen',
        email: 'test@example.com',
        phone: '',
        company: '',
        service: '',
        message: 'Dit is een test bericht met voldoende karakters.',
      })

      const result = await submitContactForm(initialState, formData)

      expect(result.errors?.phone).toBeUndefined()
    })

    it('should accept valid Dutch phone number', async () => {
      const formData = createFormData({
        name: 'Jan Jansen',
        email: 'test@example.com',
        phone: '06-12345678',
        company: '',
        service: '',
        message: 'Dit is een test bericht met voldoende karakters.',
      })

      const result = await submitContactForm(initialState, formData)

      expect(result.errors?.phone).toBeUndefined()
    })

    it('should accept international phone format', async () => {
      const formData = createFormData({
        name: 'Jan Jansen',
        email: 'test@example.com',
        phone: '+31 6 12345678',
        company: '',
        service: '',
        message: 'Dit is een test bericht met voldoende karakters.',
      })

      const result = await submitContactForm(initialState, formData)

      expect(result.errors?.phone).toBeUndefined()
    })

    it('should reject invalid phone format', async () => {
      const formData = createFormData({
        name: 'Jan Jansen',
        email: 'test@example.com',
        phone: 'invalid-phone',
        company: '',
        service: '',
        message: 'Dit is een test bericht met voldoende karakters.',
      })

      const result = await submitContactForm(initialState, formData)

      expect(result.success).toBe(false)
      expect(result.errors?.phone).toBeDefined()
    })
  })

  describe('Message validation', () => {
    it('should reject empty message', async () => {
      const formData = createFormData({
        name: 'Jan Jansen',
        email: 'test@example.com',
        phone: '',
        company: '',
        service: '',
        message: '',
      })

      const result = await submitContactForm(initialState, formData)

      expect(result.success).toBe(false)
      expect(result.errors?.message).toBeDefined()
    })

    it('should reject message with less than 10 characters', async () => {
      const formData = createFormData({
        name: 'Jan Jansen',
        email: 'test@example.com',
        phone: '',
        company: '',
        service: '',
        message: 'Kort',
      })

      const result = await submitContactForm(initialState, formData)

      expect(result.success).toBe(false)
      expect(result.errors?.message).toBeDefined()
    })

    it('should accept valid message', async () => {
      const formData = createFormData({
        name: 'Jan Jansen',
        email: 'test@example.com',
        phone: '',
        company: '',
        service: '',
        message: 'Dit is een geldige berichtinhoud voor het contactformulier.',
      })

      const result = await submitContactForm(initialState, formData)

      expect(result.errors?.message).toBeUndefined()
    })
  })

  describe('Successful submission', () => {
    it('should return success for valid form data', async () => {
      const formData = createFormData({
        name: 'Jan Jansen',
        email: 'test@example.com',
        phone: '06-12345678',
        company: 'Test Bedrijf BV',
        service: 'nationaal',
        message: 'Dit is een complete en geldige aanvraag voor transport diensten.',
      })

      const result = await submitContactForm(initialState, formData)

      expect(result.success).toBe(true)
      expect(result.message).toContain('Bedankt')
    })

    it('should accept form without optional fields', async () => {
      const formData = createFormData({
        name: 'Jan Jansen',
        email: 'test@example.com',
        phone: '',
        company: '',
        service: '',
        message: 'Dit is een aanvraag zonder optionele velden ingevuld.',
      })

      const result = await submitContactForm(initialState, formData)

      expect(result.success).toBe(true)
    })
  })
})
