import { useState, ChangeEvent, FormEvent, createRef } from "react";
import emailjs from "@emailjs/browser";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function ContactForm() {
  const form = createRef<HTMLFormElement>();

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleInputChange(event: ChangeEvent<HTMLInputElement>): void {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }
  function handleTextAreaChange(event: ChangeEvent<HTMLTextAreaElement>): void {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function sendEmail(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    e.stopPropagation();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_REACT_APP_SERVICE_ID!,
        import.meta.env.VITE_REACT_APP_TEMPLATE_ID!,
        e.currentTarget,
        import.meta.env.VITE_REACT_APP_PUBLIC_KEY!
      )
      .then(
        () => {
          setIsSubmitting(false);

          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        () => {
          setIsSubmitting(false);
        }
      );
  }

  return (
    <div className="flex flex-col w-full">
      <h3>Tell me, how can I help you?</h3>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="mt-8 text-black flex flex-col text-xs"
      >
        <label className="input input-bordered flex items-center gap-2 my-2">
          Name
          <input
            required
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="grow text-darkgrey px-2"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 my-2">
          Email
          <input
            required
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="grow text-darkgrey px-2"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 my-2">
          Subject
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            className="grow text-darkgrey px-2"
          />
        </label>
        <label className="textarea textarea-bordered flex items-start gap-2 my-2 textarea-md text-base">
          Message
          <textarea
            name="message"
            value={formData.message}
            onChange={handleTextAreaChange}
            className="textarea h-28 px-2 py-0 grow text-darkgrey text-base"
          />
        </label>
        <div className="flex justify-center my-2">
          {isSubmitting ? (
            <button className="btn btn-wide btn-neutral bg-hover-pink hover:bg-hover-pink border-0 text-white">
              SENDING
            </button>
          ) : (
            <button
              type="submit"
              className="btn btn-wide btn-neutral bg-pink hover:bg-hover-pink border-0 text-white"
            >
              SEND
            </button>
          )}
          {}
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
