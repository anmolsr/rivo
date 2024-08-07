import Image from 'next/image'
import React from 'react'
import RivoCartIcon from "../../../../public/cart.svg";
import RivoButton from '@/Components/RivoButtons/RivoButton';
const RivoShopNav = () => {
  return (
    <div  className='flex space-x-8 items-center'>
        <Image priority src={RivoCartIcon} alt="shopping cart" />
        <RivoButton link='/' label='login' variant='outLine'/>
    </div>
  )
}

export default RivoShopNav