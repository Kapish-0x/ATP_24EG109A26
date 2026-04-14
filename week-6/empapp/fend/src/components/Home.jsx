function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-5xl font-bold text-blue-600 mb-6">
        Welcome to Employee App
      </h1>
      <p className="text-lg text-gray-700 max-w-xl mb-8">
        Manage your workforce with ease. You can create new employees, edit existing records,
        view detailed profiles, and maintain a clean list of all employees in one place.
      </p>
    </div>
  );
}

export default Home;
