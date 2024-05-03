"use client";

import { ChangeEvent, FormEvent, useState, useRef, LegacyRef } from "react";
import Button from "@/components/common/Button";
import { FormDataProps } from "@/types/contentDataTypes";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_KEY;

  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormDataProps>({
    full_name: "",
    email: "",
    message: "",
  });
  const fullNameRef = useRef<HTMLInputElement | null>(null);
  const messageRef = useRef<HTMLTextAreaElement | null>(null);

  const { full_name, email, message } = formData;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // validation
    if (full_name.trim() === "") {
      fullNameRef.current?.focus();
      return;
    }
    if (message.trim() === "") {
      messageRef.current?.focus();
      return;
    }

    if (serviceId && templateId && publicKey) {
      emailjs
        .send(
          serviceId,
          templateId,
          {
            from_name: full_name,
            to_name: "Manoj Dev",
            from_email: email,
            from_subject: "InstaResume Message",
            to_email: "manojthulung03@gmail.com",
            message: message,
          },
          publicKey
        )
        .then(
          () => {
            alert("Thanks for reaching out. Your message is valued.");
            setFormData({
              full_name: "",
              email: "",
              message: "",
            });
          },
          (error) => {
            console.log("error ", error);
            alert(
              "Something went wrong. Please try again. or you can email via manojthulung03@gmail.com"
            );
          }
        )
        .finally(() => setIsLoading(false));
    } else {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="py-3">
        <input
          type="text"
          ref={fullNameRef}
          name="full_name"
          className="form-input"
          placeholder="Full Name"
          value={full_name}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="py-3">
        <input
          type="email"
          name="email"
          required
          className="form-input"
          placeholder="Email"
          value={email}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="py-3">
        <textarea
          rows={4}
          ref={messageRef}
          name="message"
          className="form-input"
          placeholder="Message"
          value={message}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <Button
        disabled={isLoading}
        type="submit"
        className="hover:bg-primary h-12"
      >
        {isLoading ? <span className="loader" /> : "Submit"}
      </Button>
    </form>
  );
};

export default ContactForm;
