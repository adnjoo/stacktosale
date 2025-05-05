export default function Footer() {
  return (
    <footer className="my-20 text-md text-gray-400 text-center w-full">
      <div className="max-w-screen-lg mx-auto px-4">
        © {new Date().getFullYear()} StackToSale. Built with focus.
      </div>
    </footer>
  );
}
