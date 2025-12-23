// src/pages/public/Login.jsx
import { useAuth } from "../../components/auth/authContext";

export default function Login() {
  const { login } = useAuth();

  return (
    <section className="max-w-xl space-y-8">
      <h1 className="text-3xl font-semibold">Login</h1>

      <div className="space-y-3">
        <button
          onClick={() => login("buyer")}
          className="w-full px-4 py-3 rounded-md border border-white/20"
        >
          Login as Buyer
        </button>

        <button
          onClick={() => login("seller")}
          className="w-full px-4 py-3 rounded-md bg-green-500 text-black"
        >
          Login as Seller
        </button>

        <button
          onClick={() => login("admin")}
          className="w-full px-4 py-3 rounded-md border border-white/20"
        >
          Login as Admin
        </button>
      </div>
    </section>
  );
}
