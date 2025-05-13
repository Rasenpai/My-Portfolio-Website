import React, { useState } from "react";
import HtmlCertificate from "../assets/Certificate/Html-Certificate.jpg";
import CssCertificate from "../assets/Certificate/Css-Certificate.jpg";
import JavascrriptCertificate from "../assets/Certificate/Javascript-Certificate.jpg";
import ReactCertificate from "../assets/Certificate/Reactjs-Certificate.jpg";

const Certificate = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const handleImageClick = (image) => {
    setCurrentImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="wrapper py-5 px-3 w-full mb-32 xl:mt-32">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {/* Html */}
          <img
            src={HtmlCertificate}
            alt="HTML Certificate"
            className="mx-auto rounded-xl w-full h-52 object-cover cursor-pointer"
            onClick={() => handleImageClick(HtmlCertificate)}
            data-aos="zoom-out-right"
          />
          {/* Css */}
          <img
            src={CssCertificate}
            alt="CSS Certificate"
            className="mx-auto rounded-xl w-full h-52 object-cover cursor-pointer"
            onClick={() => handleImageClick(CssCertificate)}
            data-aos="zoom-out-left"
          />
          {/* Js */}
          <img
            src={JavascrriptCertificate}
            alt="JavaScript Certificate"
            className="mx-auto rounded-xl w-full h-52 object-cover cursor-pointer"
            onClick={() => handleImageClick(JavascrriptCertificate)}
            data-aos="zoom-out-right"
          />
          {/* React */}
          <img
            src={ReactCertificate}
            alt="React Certificate"
            className="mx-auto rounded-xl w-full h-52 object-cover cursor-pointer"
            onClick={() => handleImageClick(ReactCertificate)}
            data-aos="zoom-out-left"    
          />
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
            onClick={closeModal}
          >
            <img
              src={currentImage}
              alt="Full-screen view"
              className="max-w-full max-h-full"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Certificate;
