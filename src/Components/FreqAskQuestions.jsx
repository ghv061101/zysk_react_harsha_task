import React, { useState } from "react";
import AvatarGroup from "../assets/images/Avatargroup.png";
import { Link } from "react-router-dom";

const FreqAskQuestions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "Can I change my plan later?",
      answer:
        "Our opening hours are Monday to Friday, 9:00 AM to 6:00 PM, and Saturday, 10:00 AM to 4:00 PM.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "No, you do not need a referral to make an appointment. Feel free to contact us directly.",
    },
    {
      question: "Can other info be added to an invoice?",
      answer:
        "Our opening hours are Monday to Friday, 9:00 AM to 6:00 PM, and Saturday, 10:00 AM to 4:00 PM.",
    },
    {
      question: "How does billing work?",
      answer:
        "At your first consultation, you will meet with one of our specialists to discuss your needs and create a personalized plan.",
    },
    {
      question: "How do I change my account email?",
      answer:
        "At your first consultation, you will meet with one of our specialists to discuss your needs and create a personalized plan.",
    },
  ];

  return (
    <div className=" py-24 px-4">
      <section className="bg-white">
        <div className="container max-w-4xl py-10 mx-auto">
          <div className="flex flex-col gap-4">
            <h1 className=" text-2xl font-bold text-center lg:text-3xl">
              Frequently Asked Questions
            </h1>
            <h1 className="text-center text-lg">
              Everything you need to know about the product and billing.
            </h1>
          </div>

          <div className="mt-12 space-y-1">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="border-b-2 border-gray-100">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex items-center justify-between w-full p-8"
                  >
                    <h1 className="font-medium text-lg">{faq.question}</h1>
                    <span
                      className={`${
                        isOpen
                          ? "text-gray-400 bg-gray-200"
                          : "text-gray-400 bg-gray-200"
                      } rounded-full`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d={
                            isOpen
                              ? "M18 12H6" // Minus icon
                              : "M12 6v6m0 0v6m0-6h6m-6 0H6" // Plus icon
                          }
                        />
                      </svg>
                    </span>
                  </button>
                  {isOpen && (
                    <>
                      <hr className="border-gray-200 " />
                      <p className="p-8 text-md text-gray-500">{faq.answer}</p>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col items-center rounded-2xl gap-8 py-8 px-7 bg-[#F9FAFB] md:mx-24">
          <div>
            <img src={AvatarGroup} alt="" className="w-[120px] h-[56px]" />
          </div>
          <div className="flex flex-col items-center gap-1 px-4">
            <h1 className="font-medium">Still have questions?</h1>
            <h1 className="text-center">
              Can’t find the answer you’re looking for? Please chat to our
              friendly team.
            </h1>
          </div>
          <div>
            <Link className="px-3 py-2 bg-[#E63F3A] text-white rounded-md">
              Get in touch
            </Link>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="border-b-2 w-[85%] mt-24"></div>
        </div>
      </section>
    </div>
  );
};

export default FreqAskQuestions;
