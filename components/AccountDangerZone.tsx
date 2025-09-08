"use client";

import { useState } from "react";
import { Trash2, AlertCircle, Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/stores/userStore";
import axios from "axios";

export default function AccountDangerZone() {
  const router = useRouter();
  const user = useUserStore((state) => state.user);
  const clearUser = useUserStore((state) => state.setUser);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const handleDeleteAccount = async () => {
    if (!user?.id) return;

    setDeleting(true);
    try {
      await axios.post("/api/delete-user", { userId: user.id });
      clearUser(null);
      router.push("/sign-in");
    } catch (err) {
      console.error("Failed to delete account", err);
      alert("Failed to delete account. Please try again.");
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg">
          <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
        </div>
        <h2 className="text-xl font-semibold text-red-700 dark:text-red-300">
          Danger Zone
        </h2>
      </div>

      <div className="bg-red-50/80 dark:bg-red-950/20 border border-red-300/70 dark:border-red-700/50 p-6 rounded-xl backdrop-blur-sm">
        <h3 className="font-semibold text-red-700 dark:text-red-300 mb-2 flex items-center gap-2">
          <Trash2 className="w-4 h-4" />
          Delete Account
        </h3>
        <p className="text-sm text-red-600/90 dark:text-red-400/90 mb-5">
          Deleting your account is permanent and cannot be undone. All data will
          be lost.
        </p>
        <button
          onClick={() => setShowConfirmModal(true)}
          className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-lg flex items-center gap-2 transition-all duration-200 shadow-md hover:shadow-lg"
        >
          <Trash2 className="w-4 h-4" />
          Delete Account
        </button>
      </div>

      {/* Confirmation Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-xl max-w-sm w-full">
            <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              Confirm Deletion
            </h2>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-6">
              Are you sure you want to permanently delete your account? This
              action cannot be undone.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowConfirmModal(false)}
                disabled={deleting}
                className="px-4 py-1.5 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-400 dark:hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteAccount}
                disabled={deleting}
                className="px-4 py-1.5 bg-red-600 text-white rounded-lg hover:bg-red-700 flex items-center gap-2"
              >
                {deleting ? (
                  <div className="flex items-center justify-center gap-2">
                    <Loader className="w-4 h-4 animate-spin" />
                    Deleting...
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <Trash2 className="w-4 h-4" />
                    Delete
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
