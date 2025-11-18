export default function NotificationsDropdown() {
  const notifications = [
    "New prediction added",
    "AI model updated",
    "User registered",
    "Stress level analysis complete",
  ];

  return (
    <div className="absolute right-0 mt-3 bg-white dark:bg-gray-700 shadow-xl p-4 rounded-xl w-64 border dark:border-gray-600">
      <h3 className="font-bold mb-2 text-gray-800 dark:text-gray-200">Notifications</h3>

      {notifications.map((msg, idx) => (
        <div key={idx} className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-sm mb-2">
          {msg}
        </div>
      ))}
    </div>
  );
}
