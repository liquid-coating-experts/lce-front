import { useForm, ValidationError } from "@formspree/react"

function ContactForm() {
  const [state, handleSubmit] = useForm("mbjvjrbe")
  if (state.succeeded) {
    return <p>Thanks for your message!</p>
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlfor="full-name" style={{ fontSize: 16 }}>
        Full Name
      </label>

      <input
        type="text"
        id="full-name"
        name="name"
        className="border rounded-md w-full border-gray-600 mb-3 px-2 py-1"
        required
      />
      <ValidationError prefix="Name" field="name" errors={state.errors} />

      <label htmlfor="email-address" style={{ fontSize: 16 }}>
        Email Address
      </label>
      <input
        id="email-address"
        type="email"
        name="_replyto"
        className="border rounded-md w-full border-gray-600 mb-3 px-2 py-1"
        required
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <label htmlfor="message" style={{ fontSize: 16 }}>
        Message
      </label>

      <textarea
        id="message"
        name="message"
        rows="5"
        className="border rounded-md w-full border-gray-600 mb-3 px-2 py-1"
        required
      />

      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <button
        type="submit"
        disabled={state.submitting}
        className="py-2 px-10 border border-gray-900 hover:bg-white bg-theme_yellow-900 rounded-md"
      >
        Submit
      </button>
    </form>
  )
}

export default ContactForm
