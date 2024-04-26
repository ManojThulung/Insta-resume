"use client";

import Button from "@/components/common/Button";

const ContactForm = () => {
  const handleSubmit = () => {};
  return (
    <form onSubmit={handleSubmit}>
      <div className="py-3">
        <input type="text" className="form-input" placeholder="Full Name" />
      </div>
      <div className="py-3">
        <input type="email" className="form-input" placeholder="Email" />
      </div>
      <div className="py-3">
        <textarea rows={4} className="form-input" placeholder="Message" />
      </div>
      <Button className="hover:bg-primary h-12">Submit</Button>
    </form>
  );
};

export default ContactForm;
