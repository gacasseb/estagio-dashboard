import { useState } from "react";

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    console.log('toggle called', isOpen);
    setIsOpen(!isOpen);
  };

  return {
    isOpen,
    toggle,
  };
};

export default useModal;
