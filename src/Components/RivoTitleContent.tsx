import React from "react";  // Importing React library

type Props = {
  contentObj: TContent;  // Defining the type for contentObj
};

// RivoTitleContent Component
// This functional component displays a title and a description.
// It uses the contentObj prop to populate the title and description fields.

const RivoTitleContent = ({ contentObj }: Props) => {
  return (
    // Container for the title and description with padding and text-center alignment
    <div className="rivContainer text-center py-8 md:py-14">
      {/* Title element */}
      <h2 className="leading-tight">{contentObj.title}</h2>
      {/* Description element */}
      <p className="text-rivo-700 my-2 md:my-6">{contentObj.description}</p>
    </div>
  );
};

export default RivoTitleContent;
