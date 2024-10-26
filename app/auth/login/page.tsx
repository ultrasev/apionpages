import { login, signup } from "./actions";
export const runtime = "edge";

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <form className="p-8 rounded-xl shadow-2xl w-full max-w-md bg-white dark:bg-gray-800 transition-all duration-300">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">
          Sign In
        </h2>

        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 dark:text-gray-300 dark:bg-gray-700 dark:border-gray-600 transition-colors duration-300"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-8">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 dark:text-gray-300 dark:bg-gray-700 dark:border-gray-600 transition-colors duration-300"
            placeholder="Enter your password"
          />
        </div>

        <button
          formAction={login}
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300 ease-in-out font-medium"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
