import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    jobCode: "",
    jobTitle: "",
    currency: "",
    amount: "",
    startDate: "",
    endDate: "",
  });

  const [errors, setErrors] = useState({});

  // handle change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // validation
  const validate = () => {
    let newErrors = {};

    if (!formData.jobCode) newErrors.jobCode = "Job Code is required";
    if (!formData.jobTitle) newErrors.jobTitle = "Job Title is required";
    if (!formData.currency) newErrors.currency = "Currency is required";
    if (!formData.amount) newErrors.amount = "Amount is required";
    if (!formData.startDate) newErrors.startDate = "Start date is required";
    if (!formData.endDate) newErrors.endDate = "End date is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("✅ Job Submitted Successfully");
      console.log(formData);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-3xl"
      >
        <h2 className="text-xl font-semibold mb-4">Job Details</h2>

        {/* Job Code */}
        <div className="mb-4">
          <label className="block font-medium">Job Code *</label>
          <input
            type="text"
            name="jobCode"
            value={formData.jobCode}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          {errors.jobCode && (
            <p className="text-red-500 text-sm">{errors.jobCode}</p>
          )}
        </div>

        {/* Job Title */}
        <div className="mb-4">
          <label className="block font-medium">Job Title *</label>
          <input
            type="text"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          {errors.jobTitle && (
            <p className="text-red-500 text-sm">{errors.jobTitle}</p>
          )}
        </div>

        {/* Currency & Amount */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block font-medium">Currency *</label>
            <select
              name="currency"
              value={formData.currency}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            >
              <option value="">Select</option>
              <option value="INR">INR</option>
              <option value="USD">USD</option>
            </select>
            {errors.currency && (
              <p className="text-red-500 text-sm">{errors.currency}</p>
            )}
          </div>

          <div>
            <label className="block font-medium">Amount *</label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
            {errors.amount && (
              <p className="text-red-500 text-sm">{errors.amount}</p>
            )}
          </div>
        </div>

        {/* Dates */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block font-medium">Start Date *</label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
            {errors.startDate && (
              <p className="text-red-500 text-sm">{errors.startDate}</p>
            )}
          </div>

          <div>
            <label className="block font-medium">End Date *</label>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
            {errors.endDate && (
              <p className="text-red-500 text-sm">{errors.endDate}</p>
            )}
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Submit Job
        </button>
      </form>
    </div>
  );
};

export default Form;
