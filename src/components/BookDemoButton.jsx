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
import { useState } from "react";
import Logo from "./../assets/Logo-solo.png";

const BookDemoButton = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  // handle submit form :
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log("====================================");
    console.log({ access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY });
    console.log("====================================");
    // setResult("Sending....");
    const formData = new FormData(event.target);
    console.log("\n\n\n==================event.target==================");
    console.log(event.target);
    console.log("\n\n\n=============formData=======================");
    console.log(formData);
    console.log("====================================");
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
    let body = Object.fromEntries(formData);
    body = JSON.stringify(body);

    // submit form :
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <>
      <button
        onClick={handleOpen}
        className="text-lg px-8 py-3 bg-[#5656a6] text-white rounded-3xl hover:scale-105 hover:bg-[#6a6acc]  transition-all duration-300"
      >
        Book a free demo
      </button>
      {/* <section className="grid place-items-center h-screen"> */}
      <Dialog className="p-4" size="md" open={open} handler={handleOpen}>
        <DialogHeader className="justify-between">
          <img src={Logo} alt="exclamation" className="w-16 h-16 not-drag" />
          <IconButton
            color="gray"
            size="sm"
            variant="text"
            onClick={handleOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </DialogHeader>
        <DialogBody className="overflow-y-scrolls">
          <form onSubmit={onSubmit}>
            <Typography
              variant="small"
              className="mb-2 text-gray-600 font-normal"
            >
              Let's Talk.
            </Typography>
            <div className="flex flex-col md:flex-row gap-2 mb-3">
              <Input
                name="name"
                color="gray"
                label="Name"
                size="lg"
                className="w-full md:max-w-lg"
              />
              <Input
                name="email"
                color="gray"
                label="Mail address"
                size="lg"
                className="w-full md:max-w-lg"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-2 mb-3">
              <Input
                name="company"
                color="gray"
                label="Company"
                size="lg"
                className="w-full md:max-w-lg"
              />
              <Input
                name="phone"
                color="gray"
                label="Phone Number"
                size="lg"
                className="w-full md:max-w-lg"
              />
            </div>{" "}
            <div className="flex flex-col md:flex-row gap-2 mb-3">
              <Input
                name="subject"
                color="gray"
                label="Subject"
                size="lg"
                className="w-full md:max-w-lg"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-2 mb-3">
              <Textarea
                name="description"
                rows={6}
                color="gray"
                label="Description"
                // size="lg"
                className="w-full md:max-w-lg"
              />
              {/* <Button color="gray" className="w-full lg:max-w-[15rem]">
                I understant, reset settings
              </Button> */}
            </div>{" "}
            <Button type="submit" color="green" className="w-full">
              Submit
            </Button>
          </form>
        </DialogBody>
      </Dialog>
      {/* </section> */}
    </>
  );
};

export default BookDemoButton;
