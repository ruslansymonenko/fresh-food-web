import { FC } from 'react';
import Link from 'next/link';

const Suggestion: FC = () => {
  return (
    <div className="bg-white text-[#333] px-8 pt-4 font-[sans-serif]">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold relative after:absolute after:-bottom-5 after:h-1 after:w-1/2 after:bg-rose-400 after:left-0 after:right-0 after:mx-auto after:rounded-full">
          Do you want to try our products?
        </h2>
        <div className="mt-12">
          <p className="text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus
            blandit, metus mi consectetur felis turpis vitae ligula.
          </p>
        </div>
        <div className="flex max-sm:flex-col justify-center sm:gap-8 gap-4 my-12">
          <button
            type="button"
            className="min-w-[140px] rounded px-4 py-2.5 text-sm tracking-wider font-semibold outline-none border text-white border-[#333] bg-[#222] hover:bg-transparent hover:text-[#333] transition-all duration-300"
          >
            <Link href={'/catalogue'}>Try now</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Suggestion;
