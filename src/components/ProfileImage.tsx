import { useState } from "react";

const ProfileImage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Small clickable image */}
      <img
        src="/rugved_img.jpg"
        alt="Profile"
        className="w-16 h-16 rounded-full cursor-pointer"
        onClick={() => setIsOpen(true)}
        title="Click to zoom this pic 😎"
      />

      {/* Modal / Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)} // click outside closes modal
        >
          <img
            src="/rugved_img.jpg"
            alt="Profile Large"
            className="max-w-full max-h-full rounded-lg shadow-lg"
          />
        </div>
      )}
    </>
  );
};

export default ProfileImage;
