import { contactData } from "@/Data/data";
import React from "react";
import { FaEnvelope, FaMap, FaPhone } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div>
      <div className="flex items-center space-x-8">
        <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900 flex items-center justify-center flex-col">
          <FaPhone className="w-4 h-4 md:w-7 md:h-7 text-white" />
        </div>
        <div>
          <h1 className="text-lg sm:text-xl text-white font-bold">Phone</h1>
          <h1 className="text-base sm:text-lg text-white text-opacity-70">
            {contactData.phone}
          </h1>
        </div>
      </div>

      <div className="flex items-center space-x-8 mt-8 mb-8">
        <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900 flex items-center justify-center flex-col">
          <FaEnvelope className="w-4 h-4 md:w-7 md:h-7 text-white" />
        </div>
        <div>
          <h1 className="text-lg sm:text-xl text-white font-bold">Email Address</h1>
          <h1 className="text-base sm:text-lg text-white text-opacity-70">
            {contactData.email}
          </h1>
        </div>
      </div>

      <div className="flex items-center space-x-8">
        <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900 flex items-center justify-center flex-col">
          <FaMap className="w-4 h-4 md:w-7 md:h-7 text-white" />
        </div>
        <div>
          <h1 className="text-lg sm:text-xl text-white font-bold">Address</h1>
          <h1 className="text-base sm:text-lg text-white text-opacity-70">
            {contactData.address}
          </h1>
        </div>
      </div>

      <div className="googleMapCts mt-8">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.864822751491!2d67.18439367488128!3d24.90259214357133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb339f6a5d32c6d%3A0xc618b8f25a288fa4!2sCreative%20Tag%20Computer%20and%20English%20Language%20Institute!5e0!3m2!1sen!2s!4v1758982710414!5m2!1sen!2s" 
          width="100%" 
          height="450"  
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactInfo;