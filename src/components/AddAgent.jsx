import { FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const AddAgent = () => {
  const navigate = useNavigate();
  const manager = JSON.parse(localStorage.getItem("user"));
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      contact: "",
      address: "",
      password: "",
      gender: "",
      managerId: manager?._id || "",
    },
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/agent`, data);
      alert("Agent added successfully ✅");
      navigate(-1);
    } catch (error) {
      console.error("Error adding agent:", error);
      alert("Failed to add agent ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      {/* Header */}
      <div className="flex items-center justify-between bg-[#fefaf5] p-4 rounded mb-6 shadow-sm">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="text-black p-2 border-2 rounded-full hover:bg-gray-200 transition"
            aria-label="Go back"
          >
            <FaArrowLeft />
          </button>
          <h2 className="text-xl font-semibold">Add Agent</h2>
        </div>
        <button
          type="submit"
          form="add-agent-form"
          disabled={loading || isSubmitting}
          className={`bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-6 py-2 rounded transition disabled:opacity-60`}
        >
          {loading ? "Saving..." : "Save"}
        </button>
      </div>

      {/* Form */}
      <form
        id="add-agent-form"
        onSubmit={handleSubmit(onSubmit)}
        className="bg-yellow-50 p-6 rounded shadow-sm space-y-6"
        noValidate
      >
        {/* Name */}
        <div className="flex flex-col sm:flex-row sm:items-center">
          <label
            htmlFor="name"
            className="sm:w-40 font-medium text-sm mb-1 sm:mb-0"
          >
            Agent Name<span className="text-red-600">*</span>
          </label>
          <input
            id="name"
            type="text"
            {...register("name", {
              required: "Agent name is required",
              minLength: { value: 2, message: "Name must be at least 2 characters" },
            })}
            className={`flex-1 border px-3 py-2 rounded bg-white transition focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby="name-error"
          />
        </div>
        {errors.name && (
          <p id="name-error" className="text-red-600 text-sm mt-1 sm:ml-40">
            {errors.name.message}
          </p>
        )}

        {/* Email */}
        <div className="flex flex-col sm:flex-row sm:items-center">
          <label
            htmlFor="email"
            className="sm:w-40 font-medium text-sm mb-1 sm:mb-0"
          >
            Email Address<span className="text-red-600">*</span>
          </label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Email is invalid",
              },
            })}
            className={`flex-1 border px-3 py-2 rounded bg-white transition focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby="email-error"
          />
        </div>
        {errors.email && (
          <p id="email-error" className="text-red-600 text-sm mt-1 sm:ml-40">
            {errors.email.message}
          </p>
        )}

        {/* Contact */}
        <div className="flex flex-col sm:flex-row sm:items-center">
          <label
            htmlFor="contact"
            className="sm:w-40 font-medium text-sm mb-1 sm:mb-0"
          >
            Contact No.<span className="text-red-600">*</span>
          </label>
          <input
            id="contact"
            type="tel"
            {...register("contact", {
              required: "Contact number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Contact number must be 10 digits",
              },
            })}
            className={`flex-1 border px-3 py-2 rounded bg-white transition focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
              errors.contact ? "border-red-500" : "border-gray-300"
            }`}
            aria-invalid={errors.contact ? "true" : "false"}
            aria-describedby="contact-error"
          />
        </div>
        {errors.contact && (
          <p id="contact-error" className="text-red-600 text-sm mt-1 sm:ml-40">
            {errors.contact.message}
          </p>
        )}

        {/* Address */}
        <div className="flex flex-col sm:flex-row sm:items-center">
          <label
            htmlFor="address"
            className="sm:w-40 font-medium text-sm mb-1 sm:mb-0"
          >
            Address
          </label>
          <input
            id="address"
            type="text"
            {...register("address")}
            className="flex-1 border px-3 py-2 rounded bg-white transition focus:outline-none focus:ring-2 focus:ring-yellow-400 border-gray-300"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col sm:flex-row sm:items-center relative">
          <label
            htmlFor="password"
            className="sm:w-40 font-medium text-sm mb-1 sm:mb-0"
          >
            Password<span className="text-red-600">*</span>
          </label>
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "Password must be at least 6 characters" },
            })}
            className={`flex-1 border px-3 py-2 rounded pr-10 bg-white transition focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
            aria-invalid={errors.password ? "true" : "false"}
            aria-describedby="password-error"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-2 text-gray-500 hover:text-gray-700 focus:outline-none"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        {errors.password && (
          <p id="password-error" className="text-red-600 text-sm mt-1 sm:ml-40">
            {errors.password.message}
          </p>
        )}

        {/* Gender */}
        <div className="flex flex-col sm:flex-row sm:items-center">
          <label
            htmlFor="gender"
            className="sm:w-40 font-medium text-sm mb-1 sm:mb-0"
          >
            Gender<span className="text-red-600">*</span>
          </label>
          <select
            id="gender"
            {...register("gender", { required: "Gender is required" })}
            className={`flex-1 border px-3 py-2 rounded bg-white transition focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
              errors.gender ? "border-red-500" : "border-gray-300"
            }`}
            aria-invalid={errors.gender ? "true" : "false"}
            aria-describedby="gender-error"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        {errors.gender && (
          <p id="gender-error" className="text-red-600 text-sm mt-1 sm:ml-40">
            {errors.gender.message}
          </p>
        )}
      </form>
    </div>
  );
};

export default AddAgent;
