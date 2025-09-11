"use client";
import React, { useState } from "react";

export default function CreatePasswordForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        {/* Title */}
        <h2 className="text-2xl font-semibold text-center mb-6">
          Create New Password
        </h2>

        <form className="space-y-6">
          {/* New Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              New Password:
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter new password"
                className="w-full px-4 py-3 pr-12 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-200"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500"
              >
                👁
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Confirm Password:
            </label>
            <div className="relative">
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm new password"
                className="w-full px-4 py-3 pr-12 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-200"
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500"
              >
                👁
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-between gap-4 pt-4">
            <button
              type="button"
              className="w-1/2 px-6 py-3 border border-red-400 text-red-500 rounded-lg hover:bg-red-50 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-1/2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
