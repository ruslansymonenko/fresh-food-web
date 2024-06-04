import {FC} from 'react';
import Image from 'next/image';

const PresentationRight: FC = () => {
  return (
    <div className='mb-12 flex w-full md:mb-16 lg:w-2/3'>
      <div className='relative left-12 top-32 z-10 -m-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 lg:ml-0 h-[500px] w-[500px]'>
        <Image src='/presentation/presentation-1.jpg' alt='presentation photo' className='h-full w-full object-cover object-center' priority width={500} height={500}/>
      </div>
      <div className='overflow-hidden rounded-lg bg-gray-100 shadow-lg h-[500px] w-[500px]'>
        <Image src='/presentation/presentation-2.jpg' alt='presentation photo' className='h-full w-full object-cover object-center' priority width={500} height={500}/>
      </div>
    </div>
  );
};

export default PresentationRight;