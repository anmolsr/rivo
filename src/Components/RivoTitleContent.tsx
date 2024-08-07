import React from "react";
type Props = {
  contentObj: TContent;
};
const RivoTitleContent = ({ contentObj }: Props) => {
  return (
    <div className="rivContainer text-center py-14">
      <h2>{contentObj.title}</h2>
      <p className="text-rivo-700 text-[22px] my-6">{contentObj.description}</p>
    </div>
  );
};

export default RivoTitleContent;
