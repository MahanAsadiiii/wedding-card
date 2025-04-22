"use client";
import { VectorFlower3, VectorFlower4, VectorFlower5 } from "@/utilities";
import Image from "next/image";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contactus = () => {
  const [attendance, setAttendance] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState({ message: "", isError: false });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (!name) {
      setStatus({
        message: "لطفا نام و نام خانوادگی را وارد کنید",
        isError: true,
      });
      setIsSubmitting(false);
      return;
    }

    if (!attendance) {
      setStatus({
        message: "لطفا مشخص کنید آیا در مراسم شرکت می‌کنید",
        isError: true,
      });
      setIsSubmitting(false);
      return;
    }

    if (phone.length < 11) {
      setStatus({
        message: "لطفا شماره موبایل ۱۱ رقمی وارد کنید",
        isError: true,
      });
      setIsSubmitting(false);
      return;
    }

    emailjs
      .sendForm("service_08v4e8w", "template_qdx721d", formRef.current, {
        publicKey: "eBZi42MxJP54WjKQM",
      })
      .then(
        () => {
          setStatus({
            message: "ممنون از شما! فرم با موفقیت ارسال شد.",
            isError: false,
          });
          setName("");
          setAttendance("");
          setMessage("");
          setPhone("");
          formRef.current.reset();
          setIsSubmitting(false);
        },
        (error) => {
          setStatus({
            message: "خطا در ارسال فرم. لطفا دوباره تلاش کنید.",
            isError: true,
          });
          console.log("FAILED...", error.text);
          setIsSubmitting(false);
        }
      );
  };
  return (
    <section className="bg-[#374234] flex flex-col items-center relative text-white leading-10 gap-7 px-5">
      <Image alt="" src={VectorFlower3} className="absolute top-0 right-0" />
      <h2 className="mt-14 flex text-lg leading-9">
        ممنون میشیم جهت کمک به برگزاری بهتر و دقیق تر این جشن فرم زیر را برامون
        پر کنید
      </h2>
      <Image alt="" src={VectorFlower5} className="absolute left-2 top-64" />
      <Image
        alt=""
        src={VectorFlower5}
        className="absolute left-12 top-28 rotate-90"
      />
      <Image
        alt=""
        src={VectorFlower5}
        className="absolute -right-2 top-50 rotate-[60deg]"
      />
      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="flex flex-col gap-3 w-full"
      >
        <input
          type="text"
          placeholder="نام و نام خانوادگی(الزامی)"
          className="bg-white text-black rounded-sm"
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="tel"
          // pattern="[0-9]{11}"
          placeholder="شماره تماس"
          className="bg-white text-black rounded-sm"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <textarea
          placeholder="دلنوشته"
          rows={3}
          className="bg-white text-black rounded-sm"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <h2 className="text-lg">آیا در مراسم ما شرکت میکنید؟</h2>
        <div className="grid grid-cols-2 gap-5">
          <div
            className={`border rounded-sm pr-4 cursor-pointer ${
              attendance === "Yes" ? "bg-[#9E7468]" : ""
            }`}
            onClick={() => setAttendance("Yes")}
          >
            <input
              type="radio"
              id="yes"
              value="Yes"
              checked={attendance === "Yes"}
              onChange={() => setAttendance("Yes")}
              name="attendance"
            />
            <label htmlFor="yes" className="cursor-pointer text-sm">
              بله، حتما
            </label>
          </div>
          <div
            className={`border rounded-sm pr-4 cursor-pointer ${
              attendance === "No" ? "bg-[#9E7468]" : ""
            }`}
            onClick={() => setAttendance("No")}
          >
            <input
              type="radio"
              id="no"
              value="No"
              name="attendance"
              checked={attendance === "No"}
              onChange={() => setAttendance("No")}
            />
            <label htmlFor="no" className="cursor-pointer text-sm">
              خیر، متاسفانه
            </label>
          </div>
        </div>

        {status.message && (
          <h2
            className={`text-center p-2 rounded ${
              status.isError ? "bg-red-700" : "bg-green-400"
            }`}
          >
            {status.message}
          </h2>
        )}

        <h1 className="text-[12px] text-center">
          لطفاً حضور خود را حداکثر تا{" "}
          <span className="text-[#F4B2A0]">۲۰ اردیبهشت</span> اعلام فرمایید.
        </h1>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`bg-white rounded-sm text-black text-xl py-3 hover:scale-90 ease-in-out duration-300 ${
            isSubmitting ? " animate-pulse opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {isSubmitting ? "در حال ارسال..." : "ارسال"}
        </button>
      </form>
      <Image alt="" src={VectorFlower4} className="" />
    </section>
  );
};

export default Contactus;
