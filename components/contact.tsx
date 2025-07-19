"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn"; // adjust import path if different

export default function Contact() {
  const [pending, setPending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setPending(true);

    const formData = new FormData(form);
    const { error } = await sendEmail(formData);

    if (error) {
      toast.error(error);
    } else {
      toast.success("Email sent successfully!");
      form.reset();
    }
    setPending(false);
  };

  return (
    <section
      id="contact"
      className="w-full px-4 sm:px-6 scroll-mt-28 mb-32 text-center"
    >
      <h2 className="text-4xl font-bold tracking-tight mb-4 text-gray-900 dark:text-white">
        Contact Me
      </h2>

      <p className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed text-gray-600 dark:text-white/70">
        Please contact me directly at{" "}
        <a
          href="mailto:euanmunroo@gmail.com"
          className="underline underline-offset-4 decoration-gray-400 dark:decoration-white/40 hover:decoration-gray-800 dark:hover:decoration-white transition"
        >
          euanmunroo@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-12 mx-auto flex flex-col gap-6 max-w-lg text-left"
      >
        {/* Email */}
        <div className="flex flex-col">
          <label
            htmlFor="senderEmail"
            className="mb-1 text-sm font-medium text-gray-700 dark:text-white/80"
          >
            Your email
          </label>
          <input
            id="senderEmail"
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder="you@example.com"
            className="
              h-14 rounded-lg px-5
              bg-white text-gray-900
              placeholder-gray-400
              ring-1 ring-gray-300
              focus:ring-2 focus:ring-gray-900 focus:outline-none
              dark:bg-white/10 dark:text-white
              dark:placeholder-white/40
              dark:ring-white/10
              dark:focus:ring-white
              transition
            "
          />
        </div>

        {/* Message */}
        <div className="flex flex-col">
          <label
            htmlFor="message"
            className="mb-1 text-sm font-medium text-gray-700 dark:text-white/80"
          >
            Your message
          </label>
          <textarea
            id="message"
            name="message"
            required
            maxLength={5000}
            placeholder="What would you like to say?"
            rows={7}
            className="
              rounded-lg px-5 py-4
              bg-white text-gray-900
              placeholder-gray-400
              ring-1 ring-gray-300
              focus:ring-2 focus:ring-gray-900 focus:outline-none
              dark:bg-white/10 dark:text-white
              dark:placeholder-white/40
              dark:ring-white/10
              dark:focus:ring-white
              transition
              resize-none
            "
          />
        </div>

        {/* Submit */}
        <div className="mt-2">
          <SubmitBtn pending={pending} />
        </div>
      </form>
    </section>
  );
}
