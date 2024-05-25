import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { useState } from "react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export const MetaDataList = ({ metadatas }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const getList = () =>
    metadatas.map((metadata, index) => {
      return (
        <Accordion open={open === index} icon={<Icon id={index} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(index)}>
            {metadata.id}
          </AccordionHeader>
          <AccordionBody>
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams.
          </AccordionBody>
        </Accordion>
      );
    });

  return (
    <>
        {getList()}
    </>
  );
};

export default MetaDataList;
