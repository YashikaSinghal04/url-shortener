export default function AboutPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
            <div className="max-w-2xl bg-white shadow-lg rounded-lg p-6 space-y-6">
                <h1 className="text-3xl font-bold text-purple-600">About Our URL Shortener</h1>
                <p className="text-gray-700">
                    Welcome to our URL Shortener service! Our tool helps you convert long, cumbersome URLs into short, 
                    shareable links that are easy to remember and use.
                </p>
                
                <h2 className="text-2xl font-semibold">Why Use Our Shortener?</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Free and easy to use.</li>
                    <li>Customizable short URLs to fit your brand.</li>
                    <li>Track click analytics (coming soon).</li>
                    <li>Perfect for sharing on social media and messaging apps.</li>
                </ul>

                <h2 className="text-2xl font-semibold">How It Works</h2>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                    <li>Paste your long URL into the input field.</li>
                    <li>Optionally, enter a custom short URL slug.</li>
                    <li>Click "Generate" to get your short link.</li>
                    <li>Copy and share your new short link!</li>
                </ol>

                <h2 className="text-2xl font-semibold">About Our Mission</h2>
                <p className="text-gray-700">
                    Our mission is to make sharing links easy and seamless, whether you are a business, content creator, 
                    or just someone who wants to share cool stuff with friends. We believe in simplicity and user-friendliness.
                </p>

                <h2 className="text-2xl font-semibold">Contact Us</h2>
                <p className="text-gray-700">
                    Have questions or feedback? Reach out to us at 
                    <a href="mailto:support@shortly.com" className="text-purple-600 font-semibold"> support@shortly.com</a>.
                </p>
            </div>
        </div>
    )
}
