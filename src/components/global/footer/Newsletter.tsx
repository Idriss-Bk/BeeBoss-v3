"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { BiSend } from "react-icons/bi";
import { VscSend } from "react-icons/vsc";

const Newsletter = () => {
  const [result, setResult] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");

  const router = useRouter();

  const sendEmail = () => {
    setLoading(true);

    fetch("/api/emails", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          router.push("/thank-u-for-subscribing");
        }
        return response.json();
      })
      .then((data) => setResult(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <div className="max-w-[330px]">
        <div className="flex rounded-lg shadow-sm">
          <input
            type="text"
            id="hs-trailing-button-add-on-with-icon"
            name="hs-trailing-button-add-on-with-icon"
            className="py-3 px-4 block w-full border-gray-200 shadow-sm rounded-s-lg text-sm focus:z-10 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            placeholder="Email"
            value={email}
            onChange={handleInputChange}
          />
          <button
            type="button"
            onClick={sendEmail}
            className="w-[2.875rem] h-[2.875rem] shrink-0 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-white text-black focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
          >
            <VscSend className="size-5" />
          </button>
        </div>
      </div>
      <p className="text-sm text-slate-300 mt-2 max-w-[280px]">
        We will not send you spam. Unsubscribe at any time.
      </p>
    </div>
  );
};

export default Newsletter;
