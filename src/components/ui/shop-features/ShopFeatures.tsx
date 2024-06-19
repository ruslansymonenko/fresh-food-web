import { FC } from 'react';
import { Apple } from 'lucide-react';
import { Utensils } from 'lucide-react';
import { HandPlatter } from 'lucide-react';

const ShopFeatures: FC = () => {
  return (
    <div className="bg-[#F7F7F7] text-[#333] font-[sans-serif] mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl mb-10">
      <div className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-4xl font-extrabold text-center mb-16">Discover Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-md:max-w-md mx-auto">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="p-6">
              <Apple className="mb-4" />
              <h3 className="text-xl font-semibold mb-2">Freshness Guaranteed</h3>
              <p className="text-gray-500 text-sm">
                Experience the freshest ingredients and high-quality meals delivered straight to
                your door, ensuring every bite is as delicious as it is convenient.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="p-6">
              <Utensils className="mb-4" />
              <h3 className="text-xl font-semibold mb-2">Seamless Ordering Experience</h3>
              <p className="text-gray-500 text-sm">
                Enjoy a user-friendly interface that makes browsing, selecting, and ordering your
                favorite meals quick and effortless.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="p-6">
              <HandPlatter className="mb-4" />
              <h3 className="text-xl font-semibold mb-2">Personalized Recommendations</h3>
              <p className="text-gray-500 text-sm">
                Benefit from tailored suggestions based on your preferences and order history,
                making it easy to discover new favorites and save time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopFeatures;
