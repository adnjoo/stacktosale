export default function TermsPage() {
  return (
    <main className="max-w-screen-md mx-auto px-4 py-16 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

      <p className="mb-4">
        By accessing or using StackToSale, you agree to be bound by these Terms
        of Service. If you disagree with any part, please do not use our
        services.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Use of Services</h2>
      <p className="mb-4">
        You may use our services only as permitted by law. You agree not to
        misuse or attempt to access our systems without authorization.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        2. Intellectual Property
      </h2>
      <p className="mb-4">
        All content, tools, and materials on StackToSale are the property of
        StackToSale and may not be reused without permission.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        3. Limitation of Liability
      </h2>
      <p className="mb-4">
        StackToSale is provided “as is.” We are not liable for any direct,
        indirect, or incidental damages arising from use of our site or
        services.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Changes to Terms</h2>
      <p className="mb-4">
        We may update these Terms at any time. Continued use of the site means
        you accept the latest version.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Contact</h2>
      <p className="mb-4">
        For questions about these Terms, email us at{" "}
        <a
          href="mailto:hello@stacktosale.com"
          className="underline text-blue-600"
        >
          hello@stacktosale.com
        </a>
        .
      </p>

      <p className="text-sm text-gray-500 mt-8">Last updated: May 8, 2025</p>
    </main>
  );
}
