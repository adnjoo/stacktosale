export default function ContactPage() {
  return (
    <div className="max-w-xl mx-auto px-6 py-16 text-black dark:text-white">
      <h1 className="text-4xl font-bold mb-6">Let’s Work Together</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-10">
        Whether you need a funnel fix, PPC help, or just want to say hi — drop
        us a note. We’ll get back within 1 business day.
      </p>

      <form
        action="https://formsubmit.co/hello@stacktosale.com" // replace with your email or use Tally/Formspree if preferred
        method="POST"
        className="space-y-6"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full rounded-lg border border-gray-300 dark:border-gray-700 p-3 bg-white dark:bg-black text-black dark:text-white"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full rounded-lg border border-gray-300 dark:border-gray-700 p-3 bg-white dark:bg-black text-black dark:text-white"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full rounded-lg border border-gray-300 dark:border-gray-700 p-3 bg-white dark:bg-black text-black dark:text-white"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-full text-sm font-medium hover:opacity-90"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
