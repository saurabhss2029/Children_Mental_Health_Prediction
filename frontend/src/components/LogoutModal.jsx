export default function LogoutModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl w-80 text-center">

        <h2 className="text-xl font-bold mb-4">Confirm Logout?</h2>

        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/login";
            }}
            className="px-4 py-2 bg-red-500 text-white rounded-lg"
          >
            Logout
          </button>

          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 dark:bg-gray-600 rounded-lg"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
