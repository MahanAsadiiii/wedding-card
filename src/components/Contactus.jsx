"use client";
import { VectorFlower3, VectorFlower4, VectorFlower5 } from "@/utilities";
import Image from "next/image";
import React, { useState } from "react";

const Contactus = () => {
  const [attendance, setAttendance] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState({ message: "", isError: false });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name) {
      setStatus({
        message: "لطفا نام و نام خانوادگی را وارد کنید",
        isError: true,
      });
      return;
    }

    if (!attendance) {
      setStatus({
        message: "لطفا مشخص کنید آیا در مراسم شرکت می‌کنید",
        isError: true,
      });
      return;
    }

    try {
      setIsSubmitting(true);
      setStatus({ message: "", isError: false });

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          message,
          willAttend: attendance === "Yes" ? "بله" : "خیر",
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus({
          message: "ممنون از شما! فرم با موفقیت ارسال شد.",
          isError: false,
        });
        // Reset form
        setName("");
        setPhone("");
        setMessage("");
        setAttendance("");
      } else {
        setStatus({
          message: "خطا در ارسال فرم. لطفا دوباره تلاش کنید.",
          isError: true,
        });
      }
    } catch (error) {
      setStatus({
        message: "خطا در ارسال فرم. لطفا دوباره تلاش کنید.",
        isError: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#374234] flex flex-col items-center relative text-white leading-10 gap-7">
      <Image alt="" src={VectorFlower3} className="absolute top-0 right-0" />
      <h2 className="mt-14 flex flex-wrap text-[20px]">
        ممنون میشیم جهت کمک به برگزاری بهتر و <br /> دقیق تر این جشن فرم زیر را
        برامون پر کنید
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
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-[85%]">
        <input
          type="text"
          placeholder="نام و نام خانوادگی(الزامی)"
          className="bg-white text-black rounded-sm"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="شماره تماس"
          className="bg-white text-black rounded-sm"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <textarea
          placeholder="دلنوشته"
          rows={3}
          className="bg-white text-black rounded-sm"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <h2>آیا در مراسم ما شرکت میکنید؟</h2>
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
            />
            <label htmlFor="yes" className="cursor-pointer">
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
              checked={attendance === "No"}
              onChange={() => setAttendance("No")}
            />
            <label htmlFor="no" className="cursor-pointer">
              خیر، متاسفانه
            </label>
          </div>
        </div>

        {status.message && (
          <div
            className={`text-center p-2 rounded ${
              status.isError ? "bg-red-700" : "bg-green-700"
            }`}
          >
            {status.message}
          </div>
        )}

        <h1 className="text-center leading-6">
          لطفاً حضور خود را حداکثر تا{" "}
          <span className="text-[#F4B2A0]">دو هفته</span> پیش از مراسم اعلام
          فرمایید.
        </h1>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`bg-white rounded-sm text-black text-xl py-3 hover:scale-90 ease-in-out duration-300 ${
            isSubmitting ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {isSubmitting ? "در حال ارسال..." : "ارسال"}
        </button>
      </form>
      <Image alt="" src={VectorFlower4} className="" />
    </div>
  );
};

export default Contactus;
