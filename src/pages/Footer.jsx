import { FaCopyright } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="relative bottom-0 w-full">
      <div className='mt-12 bottom-0 w-full bg-blue-600 h-16 flex items-center justify-center text-white'>
        <p className="flex items-center gap-2">
          <FaCopyright /> 2024 Your Company Name. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}