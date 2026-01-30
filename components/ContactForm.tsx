'use client'

import { useActionState } from 'react'
import { submitContactForm, type ContactFormState } from '@/app/actions/contact'

const services = [
  { value: '', label: 'Selecteer een dienst (optioneel)' },
  { value: 'nationaal', label: 'Nationaal transport' },
  { value: 'internationaal', label: 'Internationaal transport' },
  { value: 'distributie', label: 'Distributie & logistiek' },
  { value: 'koerier', label: 'Koeriersdiensten' },
  { value: 'spoed', label: 'Spoedtransport' },
  { value: 'maatwerk', label: 'Zakelijk maatwerk' },
  { value: 'anders', label: 'Anders' },
]

const initialState: ContactFormState = {
  success: false,
  message: '',
}

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState)

  return (
    <form action={formAction} className="space-y-6">
      {/* Honeypot field - hidden from users, catches bots */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          type="text"
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Status Message */}
      {state.message && (
        <div
          className={`p-4 rounded-lg ${
            state.success
              ? 'bg-green-50 text-green-800 border border-green-200'
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}
          role="alert"
        >
          {state.message}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-secondary-700 mb-2"
          >
            Naam <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            autoComplete="name"
            className={`w-full px-4 py-3 rounded-lg border ${
              state.errors?.name
                ? 'border-red-500 focus:ring-red-500'
                : 'border-secondary-300 focus:ring-primary-500'
            } focus:outline-none focus:ring-2 focus:border-transparent transition-colors`}
            placeholder="Uw volledige naam"
            aria-describedby={state.errors?.name ? 'name-error' : undefined}
          />
          {state.errors?.name && (
            <p id="name-error" className="mt-1 text-sm text-red-600">
              {state.errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-secondary-700 mb-2"
          >
            E-mailadres <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            autoComplete="email"
            className={`w-full px-4 py-3 rounded-lg border ${
              state.errors?.email
                ? 'border-red-500 focus:ring-red-500'
                : 'border-secondary-300 focus:ring-primary-500'
            } focus:outline-none focus:ring-2 focus:border-transparent transition-colors`}
            placeholder="uw@email.nl"
            aria-describedby={state.errors?.email ? 'email-error' : undefined}
          />
          {state.errors?.email && (
            <p id="email-error" className="mt-1 text-sm text-red-600">
              {state.errors.email}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-secondary-700 mb-2"
          >
            Telefoonnummer
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            autoComplete="tel"
            className={`w-full px-4 py-3 rounded-lg border ${
              state.errors?.phone
                ? 'border-red-500 focus:ring-red-500'
                : 'border-secondary-300 focus:ring-primary-500'
            } focus:outline-none focus:ring-2 focus:border-transparent transition-colors`}
            placeholder="06 - 12345678"
            aria-describedby={state.errors?.phone ? 'phone-error' : undefined}
          />
          {state.errors?.phone && (
            <p id="phone-error" className="mt-1 text-sm text-red-600">
              {state.errors.phone}
            </p>
          )}
        </div>

        {/* Company */}
        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium text-secondary-700 mb-2"
          >
            Bedrijfsnaam
          </label>
          <input
            type="text"
            id="company"
            name="company"
            autoComplete="organization"
            className="w-full px-4 py-3 rounded-lg border border-secondary-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
            placeholder="Uw bedrijfsnaam"
          />
        </div>
      </div>

      {/* Service */}
      <div>
        <label
          htmlFor="service"
          className="block text-sm font-medium text-secondary-700 mb-2"
        >
          Dienst
        </label>
        <select
          id="service"
          name="service"
          className="w-full px-4 py-3 rounded-lg border border-secondary-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors bg-white"
        >
          {services.map((service) => (
            <option key={service.value} value={service.value}>
              {service.label}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-secondary-700 mb-2"
        >
          Bericht <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={`w-full px-4 py-3 rounded-lg border ${
            state.errors?.message
              ? 'border-red-500 focus:ring-red-500'
              : 'border-secondary-300 focus:ring-primary-500'
          } focus:outline-none focus:ring-2 focus:border-transparent transition-colors resize-vertical`}
          placeholder="Beschrijf uw vraag of transportbehoefte..."
          aria-describedby={state.errors?.message ? 'message-error' : undefined}
        />
        {state.errors?.message && (
          <p id="message-error" className="mt-1 text-sm text-red-600">
            {state.errors.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          disabled={isPending}
          className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isPending ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Verzenden...
            </>
          ) : (
            'Verstuur bericht'
          )}
        </button>
      </div>

      <p className="text-sm text-secondary-500">
        <span className="text-red-500">*</span> Verplichte velden
      </p>
    </form>
  )
}
