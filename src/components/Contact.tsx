"use client";
import React, { useRef } from "react";
import { Button } from "antd";
import emailjs from "@emailjs/browser";
import {
  NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
  NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
} from "@/config/config";
import toast from "react-hot-toast";

function ContactForm() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;
    const formData = new FormData(form.current);
    formData.append("title", "Portfolio Contact Form");

    const data: { [key: string]: string } = {};
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });
    emailjs
      .send(
        NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        data,
        {
          publicKey: NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        (response) => {
          toast.success("Email sent successfully!");
        },
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        (err) => {
          console.log(err);
          toast.error("Failed to send email. Please try again.");
        }
      );
  };

  return (
    <section id="contactUs" className="mt-20 px-5 sm:px-20 lg:px-20">
      <h2 className="text-3xl font-semibold mb-6">Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="lg:max-w-xl space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-3 border border-gray-300 rounded-md"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full p-3 border border-gray-300 rounded-md"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="w-full p-3 border border-gray-300 rounded-md h-32"
        ></textarea>
        <Button
          htmlType="submit"
          className="bg-blue-500 hover:bg-purple-700 text-white"
          style={{ background: "#2b7fff", color: "white" }}
        >
          Send Message
        </Button>
      </form>
    </section>
  );
}

export default ContactForm;
