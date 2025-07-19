"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { FaPaperPlane } from "react-icons/fa";
import { sendEmail } from "@/actions/sendEmail";

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
      className="
        w-full
        px-4 sm:px-6
        scroll-mt-28
        mb-32
        text-center
      "
    >
      <h2 className="text-4xl font-bold tracking-tight text-white mb-4">
        Contact Me
      </h2>

      <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
        Please contact me directly at{" "}
        <a
          href="mailto:euanmunroo@gmail.com"
          className="underline underline-offset-4 decoration-white/40 hover:decoration-white transition"
        >
          euanmunroo@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        onSubmit={handleSubmit}
        className="
          mt-12
          mx-auto
          flex flex-col
          gap-6
          max-w-lg
          text-left
        "
      >
        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="senderEmail" className="sr-only">
            Your email
          </label>
          <input
            id="senderEmail"
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder="Your email"
            className="
              h-14
              rounded-lg
              px-5
              bg-white/10
              text-white
              placeholder-white/50
              outline-none
              ring-1 ring-white/10
              focus:ring-2 focus:ring-white/30
              transition
            "
          />
        </div>

        {/* Message */}
        <div className="flex flex-col">
            <label htmlFor="message" className="sr-only">
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              required
              maxLength={5000}
              placeholder="Your message"
              rows={7}
              className="
                rounded-lg
                px-5 py-4
                bg-white/10
                text-white
                placeholder-white/50
                outline-none
                ring-1 ring-white/10
                focus:ring-2 focus:ring-white/30
                transition
                resize-none
              "
            />
        </div>

        {/* Submit button */}
        <div className="mt-1">
          <button
            type="submit"
            disabled={pending}
            className="
              group
              inline-flex
              items-center
              gap-2
              rounded-full
              px-7
              h-11
              text-sm
              font-medium
              text-white
              bg-white/10
              backdrop-blur
              ring-1 ring-white/10
              hover:bg-white/15
              focus:outline-none
              focus:ring-2 focus:ring-white/40
              transition
              disabled:opacity-60
              disabled:cursor-not-allowed
            "
          >
            {pending ? (
              <span className="flex items-center gap-2">
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                Sending…
              </span>
            ) : (
              <>
                Submit
                <FaPaperPlane className="text-xs opacity-70 transition-transform group-hover:translate-x-[3px] group-hover:-translate-y-[2px]" />
              </>
            )}
          </button>
        </div>
      </form>
    </section>
  );
}
