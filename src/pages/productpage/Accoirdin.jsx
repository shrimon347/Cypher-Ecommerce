/* eslint-disable react/prop-types */
import  { useState } from 'react';

const AccordionItem = ({ title, children, isOpen, onClick }) => {
  return (
    <div className="border-black border-b rounded-none mb-5">
      <div className="collapse collapse-arrow" data-open={isOpen}>
        <input
          type="checkbox"
          className="hidden"
          checked={isOpen}
          onChange={onClick}
          readOnly
        />
        <div
          className="collapse-title text-xl font-medium cursor-pointer"
          onClick={onClick}
        >
          {title}
        </div>
        <div className={`collapse-content ${isOpen ? 'block' : 'hidden'}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

const Accordion = () => {
  const [openIndices, setOpenIndices] = useState([]);

  const handleToggle = (index) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  return (
    <div className="join join-vertical w-full">
      <AccordionItem
        title="Brand"
        isOpen={openIndices.includes(0)}
        onClick={() => handleToggle(0)}
      >
        <div className="flex items-center gap-3 mb-5">
          <input type="checkbox" className="checkbox rounded-sm w-4 h-4" />
          <p className="text-md font-bold">
            Apple <span className="text-gray-400 font-normal">100</span>
          </p>
        </div>
        <div className="flex items-center gap-3 mb-5">
          <input type="checkbox" className="checkbox rounded-sm w-4 h-4" />
          <p className="text-md font-bold">
            Samsung <span className="text-gray-400 font-normal">100</span>
          </p>
        </div>
        <div className="flex items-center gap-3 mb-5">
          <input type="checkbox" className="checkbox rounded-sm w-4 h-4" />
          <p className="text-md font-bold">
            Xiomi <span className="text-gray-400 font-normal">100</span>
          </p>
        </div>
        <div className="flex items-center gap-3 mb-5">
          <input type="checkbox" className="checkbox rounded-sm w-4 h-4" />
          <p className="text-md font-bold">
            Realme <span className="text-gray-400 font-normal">100</span>
          </p>
        </div>
        <div className="flex items-center gap-3 mb-5">
          <input type="checkbox" className="checkbox rounded-sm w-4 h-4" />
          <p className="text-md font-bold">
            Oppo <span className="text-gray-400 font-normal">100</span>
          </p>
        </div>
      </AccordionItem>

      <AccordionItem
        title="Battery Capacity"
        isOpen={openIndices.includes(1)}
        onClick={() => handleToggle(1)}
      >
        <p>hello</p>
      </AccordionItem>

      <AccordionItem
        title="Screen type"
        isOpen={openIndices.includes(2)}
        onClick={() => handleToggle(2)}
      >
        <p>hello</p>
      </AccordionItem>

      <AccordionItem
        title="Screen Diagonal"
        isOpen={openIndices.includes(3)}
        onClick={() => handleToggle(3)}
      >
        <p>hello</p>
      </AccordionItem>
    </div>
  );
};

export default Accordion;
