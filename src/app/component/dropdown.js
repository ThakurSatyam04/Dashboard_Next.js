'use client'
import { useState } from 'react';
import Image from 'next/image';
import { imageConfigDefault } from 'next/dist/shared/lib/image-config';

const Dropdown = (props) => {
  const options = [
    { label: props.value1, value: props.value1 },
    { label: props.value2, value: props.value2 },
    { label: props.value3, value: props.value3 },
    { label: props.value4, value: props.value4 },
    { label: props.value5, value: props.value5 },
    { label: props.value6, value: props.value6 },
  ];

  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    console.log('Selected option:', option);
    // Perform any other actions with the selected option
  };

  return (
    <div className="pl-4 pr-4 pt-4">
      <div className="relative">
        <div
          className={`global_font size2 flex items-center justify-between border border-neutral-900 px-4 rounded-md cursor-pointer ${
            isOpen ? 'bg-neutral-900' : ''
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{selectedOption ? selectedOption.label : props.head}</span>
          {isOpen ? (
            <Image className='bg-gray-600' src="/upload.png" width={20} height={20}></Image>
          ) : (
            <Image className='bg-gray-600' src="/down-arrow.png" width={20} height={20}></Image>
          )}
        </div>
        {isOpen && (
          <ul className="global_font top-full left-0 w-full bg-neutral-900 border border-neutral-900 rounded-md shadow-md">
            {options.map((option) => (
              <li
                key={option.value}
                className="global_font size2 px-4 py-2 cursor-pointer hover:bg-neutral-900"
                onClick={() => handleOptionSelect(option)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dropdown;

