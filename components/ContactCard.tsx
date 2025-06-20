"use client";

import React from "react";
import { FaEnvelope, FaLinkedin, FaPhone } from "react-icons/fa";
import Botones from "./botones";

const ContactCard: React.FC = () => {
  return (
    <div className="bg-black/50 mt-4 text-while rounded-lg shadow-md p-6 w-full max-w-md mx-auto">
      <div className="mb-4">
        <div className="flex items-center gap-4 mb-3 text-xl">
          <FaEnvelope className="text-green-500 text-2xl" />
          <div>
            <h3 className="font-semibold text-lg">Email</h3>
            <p className="text-lg text-slate-400">
              <a href="mailto:victordev1986@gmail.com" className="text-slate-400 hover:underline">
                victordev1986@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 text-xl">
          <FaLinkedin className="text-green-500 text-xl" />
          <div>
            <h3 className="font-semibold text-lg">LinkedIn</h3>
            <p className="text-lg text-slate-400">
              <a href="https://www.linkedin.com/in/victorsanchez1986/" className="text-slate-400 hover:underline">
                @victor sanchez
              </a>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 text-xl">
          <FaPhone className="text-green-500 text-2xl" />
          <div>
            <h3 className="font-semibold text-lg">Llamame</h3>
            <p className="text-lg text-slate-400">
              <a href="tel:+573013829208" className="text-slate-400 hover:underline">
                +57 301 382 9208
              </a>
            </p>
          </div>
        </div>
      </div>
      <Botones />
    </div>
  );
};

export default ContactCard;
