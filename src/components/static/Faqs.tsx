"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiDownArrow } from "react-icons/bi";
import Ques from "../../../public/ques.png"
import Image from "next/image";
import { SlArrowDown } from "react-icons/sl";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    weight: "400",
    subsets: ["latin"],
});

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question:
      "What is BeeBoss?",
    answer:
      "BeeBoss is an all-in-one e-commerce solution designed to streamline your online business journey. We offer a comprehensive suite of services including product recommendations, fulfillment, packaging, and social media content, all tailored to help entrepreneurs succeed.",
  },
  {
    question: "What does the one-time payment of €999 include?",
    answer:
      "The one-time payment of €999 grants you access to a custom logo, an AI theme for organic visibility, over 100 hours of training material covering dropshipping, Amazon, digital products, tax modules, and crypto. Additionally, you get over 1000 free product recommendations and access to diverse wholesalers in fashion, beauty, kids, and home categories.",
  },
  {
    question: "How does the fulfillment process work?",
    answer:
      "Our fulfillment process is handled through our warehouse in Germany. We manage the shipping and returns of high-quality dropshipping products from Europe, Italy, and Turkey. With direct tracking service through DHL Germany, your customers can easily track their orders.",
  },
  {
    question: "What are the benefits of using BeeBoss?",
    answer:
      "BeeBoss allows you to operate without any upfront payments or storage costs. You earn money as a middleman, utilizing our custom packaging prepared just for you. This all-in-one solution helps you take your online business to the next level efficiently.",
  },
  {
    question: "Can I use BeeBoss if I am a college student or have a full-time job?",
    answer:
      "Absolutely. Our flexible platform can be adapted to your schedule, providing the resources needed to succeed while balancing work or studies. Whether you are a college student or a full-time employee, BeeBoss is designed to fit your lifestyle.",
  },
  {
    question: "How can I get started with BeeBoss?",
    answer:
      "Getting started with BeeBoss is easy. Simply sign up for our one-time payment plan of €999, and you will have access to all our features and services. Start your online business journey with our comprehensive e-commerce solution today!",
  },
];

const Faqs = () => {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="py-20 bg-white">
      <h2
        className={`text-lg uppercase text-black font-semibold text-center mb-3`}
      >
        Frequently Asked Questions
      </h2>
      <h3
        className={`font-fraunces text-5xl text-black font-semibold text-center mb-10`}
      >
        Have Some Questions?
      </h3>
      <div className="mt-10 lg:flex gap-8">
        <div className="lg:w-5/12 flex justify-center items-center">
            <Image src={Ques} alt="Faq" height={450} width={450} />
        </div>
        <div className="lg:w-7/12">
          <div className="w-full max-w-2xl mx-auto space-y-2">
            {faqs.map((faq, index) => (
              <div key={index} className="overflow-hidden">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-50 transition-colors"
                >
                  <span className={`${poppins.className} font-normal text-lg text-black text-left`}>
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <SlArrowDown className="w-4 h-4 text-slate-500 text-sm" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 bg-gray-50 border-t border-gray-200">
                        <p className="text-slate-800 text-sm">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
