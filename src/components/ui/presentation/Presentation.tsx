import {FC} from 'react';
import PresentationLeft from '@/components/ui/presentation/PresentationLeft';
import PresentationRight from '@/components/ui/presentation/PresentationRight';

const Presentation: FC = () => {
  return (
    <section className='mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl'>
      <div className='mb-8 flex flex-wrap justify-between md:mb-16'>
        <PresentationLeft/>
        <PresentationRight/>
      </div>
    </section>
  );
};

export default Presentation;