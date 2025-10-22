export default function WhiteboardPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          Welcome to the Takeo Whiteboard
        </h1>
        <p className="mt-4 text-gray-600">
          You've successfully entered the Monkey Cage! 🐵
        </p>
        <a
          href="/"
          className="mt-8 inline-block px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          Back to Landing
        </a>
      </div>
    </main>
  );
}
