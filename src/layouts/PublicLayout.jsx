import Navbar from "../components/navigation/Navbar";
import Footer from "../components/navigation/Footer";

export default function PublicLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-bg text-white">
      <Navbar />
      <main className="flex-1 px-6 py-8 max-w-7xl mx-auto w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
}
