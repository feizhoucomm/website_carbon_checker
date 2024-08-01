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

const BookDemoModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <>
      <Dialog className="p-4" size="md" open={open} handler={handleOpen}>
        <DialogHeader className="justify-between">
          <img src={Logo} alt="Feizhoucom" className="w-16 h-16 not-drag" />
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
          <div>
            <Typography
              variant="small"
              className="mb-2 text-gray-600 font-normal"
            >
              Let's Talk.
            </Typography>
            <div className="flex flex-col md:flex-row gap-2 mb-3">
              <Input
                color="gray"
                label="Name"
                size="lg"
                className="w-full md:max-w-lg"
              />
              <Input
                color="gray"
                label="Mail address"
                size="lg"
                className="w-full md:max-w-lg"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-2 mb-3">
              <Input
                color="gray"
                label="Company"
                size="lg"
                className="w-full md:max-w-lg"
              />
              <Input
                color="gray"
                label="Phone Number"
                size="lg"
                className="w-full md:max-w-lg"
              />
            </div>{" "}
            <div className="flex flex-col md:flex-row gap-2 mb-3">
              <Input
                color="gray"
                label="Subject"
                size="lg"
                className="w-full md:max-w-lg"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-2 mb-3">
              <Textarea
                color="gray"
                label="Description"
                // size="lg"
                className="w-full md:max-w-lg"
              />
              {/* <Button color="gray" className="w-full lg:max-w-[15rem]">
                I understant, reset settings
              </Button> */}
            </div>{" "}
            <Button color="green" className="w-full">
              Submit
            </Button>
          </div>
        </DialogBody>
      </Dialog>
    </>
  );
};

export default BookDemoModal;
