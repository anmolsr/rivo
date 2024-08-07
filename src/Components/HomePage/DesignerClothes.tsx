import React from 'react'
import RivoTitleContent from '../RivoTitleContent';
import RivoCard from '../RivoCard';
type Props = {
  contentObj: TContent;
  prodCategory:TClothes[];
};
const DesignerClothes = ({ contentObj, prodCategory }: Props) => {
  return (
    <div>
      <RivoTitleContent contentObj={contentObj} />
      <div className="grid grid-cols-3 gap-x-10">
        {prodCategory.map((product:TClothes)=>(
            <div key={product.id}><RivoCard size="big" carCategory={product}/></div>
        ))}
      </div>
    </div>
  );
}

export default DesignerClothes