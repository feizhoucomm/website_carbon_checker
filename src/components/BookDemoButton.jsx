import React, { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  IconButton,
  Typography,
  Input,
  Textarea,
} from "@material-tailwind/react";
import Logo from "./../assets/Logo-solo.png";

// Assuming you have a separate file for API calls
import { submitForm } from "../api/apiCalls";

const BookDemoButton = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state
  const [result, setResult] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true before submitting
    try {
      const success = await submitForm(formData);
      if (success) {
        setResult("Form Submitted Successfully");
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          subject: "",
          description: "",
        }); // Reset form data
      } else {
        setResult("Failed to submit form.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("An error occurred. Please try again.");
    } finally {
      setLoading(false); // Always set loading back to false
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="text-lg px-8 py-3 bg-[#5656a6] text-white rounded-3xl hover:scale-105 hover:bg-[#6a6acc]  transition-all duration-300"
      >
        Book a free demo
      </button>
      <Dialog
        className="p-4"
        size="md"
        open={open}
        onClose={() => setOpen(false)}
      >
        <DialogHeader className="justify-between">
          <img src={Logo} alt="Logo" className="w-16 h-16 not-drag" />
          <IconButton
            color="gray"
            size="sm"
            variant="text"
            onClick={() => setOpen(false)}
          >
            {/* SVG content remains the same */}
          </IconButton>
        </DialogHeader>
        <DialogBody className="overflow-y-auto">
          <form onSubmit={handleSubmit}>
            {/* Form inputs remain the same, but add onChange handlers */}
            <Input
              name="name"
              color="gray"
              label="Name"
              size="lg"
              className="w-full md:max-w-lg"
              value={formData.name}
              onChange={handleChange}
            />
            {/* Repeat for other inputs */}
            <Button type="submit" color="green" className="w-full">
              Submit
            </Button>
          </form>
          {loading && <p>Loading...</p>}
          {!loading && <p>{result}</p>}
        </DialogBody>
      </Dialog>
    </>
  );
};

export default BookDemoButton;
