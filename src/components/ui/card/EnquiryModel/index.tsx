import React, { useState } from "react";
import { Modal } from "../../modal";
import { Button } from "../../button";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-2xl font-bold mb-4">Send Enquiry</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 ">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="What's your name?"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border   border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Whats your email address?"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            id="message"
            name="message"
            placeholder="How can we help you?"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <Button
          variant="outline"
          fullWidth
          type="submit"
          className="w-full bg-blue-500 text-black py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
        >
          Send Enquiry
        </Button>
      </form>
    </Modal>
  );
};
