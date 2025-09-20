import { FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";

const EditAgent = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
    control,
  } = useForm({
    defaultValues: {
      name: "",
      contact: "",
      email: "",
      gender: "",
      address: "",
      password: "",
      managerId: "",
    },
  });

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    axios
      .get(`${import.meta.env.VITE_API_URL}/agent/${id}`)
      .then((res) => {
        const agent = res.data.data || res.data;
        reset({
          name: agent.name || "",
          email: agent.email || "",
          contact: agent.contact || "",
          address: agent.address || "",
          gender: agent.gender || "",
          managerId: agent.managerId?._id || "",
          password: "", // password left blank for optional change
        });
      })
      .catch((err) => {
        console.error("Error fetching agent:", err);
        alert("Failed to load agent data ❌");
      })
      .finally(() => setLoading(false));
  }, [id, reset]);

  const onSubmit = async (data) => {
    try {
      const payload = {
        name: data.name,
        email: data.email,
        contact: data.contact,
        address: data.address,
        gender: data.gender,
        managerId: data.managerId,
      };
      if (data.password && data.password.trim() !== "") {
        payload.password = data.password;
      }

      await axios.put(`${import.meta.env.VITE_API_URL}/agent/${id}`, payload);
      alert("Agent updated successfully ✅");
      navigate(-1);
    } catch (error) {
      console.error("Update Error:", error.response?.data || error.message);
      alert("Failed to update agent ❌");
    }
  };

  if (loading)
    return (
      <p className="text-center text-gray-500 py-10">Loading agent data...</p>
    );

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
          <h2 className="text-xl font-semibold">Edit Agent</h2>
        </div>
        <button
          type="submit"
          form="edit-agent-form"
          disabled={isSubmitting}
          className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-6 py-2 rounded transition disabled:opacity-60"
        >
          {isSubmitting ? "Updating..." : "Update"}
        </button>
      </div>

      {/* Form */}
      <form
        id="edit-agent-form"
        onSubmit={handleSubmit(onSubmit)}
        className="bg-yellow-50 p-6 rounded shadow-sm space-y-6"
        noValidate
      >
        {/* Agent Name */}
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
            type="text"
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

        {/* Gender */}
        <div className="flex flex-col sm:flex-row sm:items-center">
          <label
            htmlFor="gender"
            className="sm:w-40 font-medium text-sm mb-1 sm:mb-0"
          >
            Gender
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

        {/* Password with eye toggle (optional, no validation) */}
        <div className="flex flex-col sm:flex-row sm:items-center relative">
          <label
            htmlFor="password"
            className="sm:w-40 font-medium text-sm mb-1 sm:mb-0"
          >
            Password
          </label>
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <>
                <input
                  {...field}
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter new password (optional)"
                  className="flex-1 border px-3 py-2 rounded pr-10 bg-white transition focus:outline-none focus:ring-2 focus:ring-yellow-400 border-gray-300"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </>
            )}
          />
        </div>
      </form>
    </div>
  );
};

export default EditAgent;
