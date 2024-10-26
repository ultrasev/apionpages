import Link from 'next/link'
export const runtime = 'edge';

export default function CheckEmail() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-50">
      <div className="max-w-2xl w-full space-y-8 p-12 bg-white rounded-xl shadow-md">
        <h1 className="text-4xl font-extrabold text-center text-gray-900">Check Your Email</h1>
        <p className="mt-4 text-xl text-center text-gray-600">
          We&apos;ve sent a confirmation email to your inbox. Please check your email and click the confirmation link to complete your registration.
        </p>
        <div className="mt-10 space-y-6">
          <p className="text-base text-center text-gray-500">
            If you don&apos;t see the email, please check your spam folder.
          </p>
          <Link
            href="/auth/login"
            className="w-full flex justify-center py-3 px-6 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
          >
            Return to Login
          </Link>
        </div>
      </div>
    </div>
  )
}