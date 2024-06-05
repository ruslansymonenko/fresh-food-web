import { FC } from 'react';
import { Check } from 'lucide-react';

const Info: FC = () => {
  return (
    <div className="bg-white px-6 font-[sans-serif]">
      <h2 className="text-3xl font-extrabold text-rose-600 mb-10">Frequently Asked Questions</h2>
      <div className="space-y-8 max-w-4xl">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <Check />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-[#333]">How can I create an account?</h3>
            <p className="text-sm text-[#333] mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <Check />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-[#333]">Is there a mobile app available?</h3>
            <p className="text-sm text-[#333] mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua Sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <Check />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-[#333]">How can I reset my password?</h3>
            <p className="text-sm text-[#333] mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <Check />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-[#333]">
              How do I update my account information?
            </h3>
            <p className="text-sm text-[#333] mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
