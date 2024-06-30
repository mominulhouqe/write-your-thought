import React from 'react';

interface TextInputProps {
  label: string;
  id: string;
}

const TextInput: React.FC<TextInputProps> = ({ label, id }) => {
  return (
    <div className="relative mb-4">
      <input
        type="text"
        placeholder={label}
        id={id}
        className="relative w-full h-10 px-4 text-sm placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-gray-300 text-gray-500 autofill:bg-white invalid:border-red-500 invalid:text-red-500 focus:border-red-500 focus:outline-none focus:border-2 invalid:focus:border-red-500 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-400"
      />
      <label
        htmlFor={id}
        className="absolute left-2 -top-2 z-[1] px-2 text-xs text-gray-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-red-500 peer-required:after:content-['\00a0*'] peer-invalid:text-red-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-red-500 peer-invalid:peer-focus:text-red-500 peer-disabled:cursor-not-allowed peer-disabled:text-gray-400 peer-disabled:before:bg-transparent"
      >
        {label}
      </label>
    </div>
  );
};

export default TextInput;
