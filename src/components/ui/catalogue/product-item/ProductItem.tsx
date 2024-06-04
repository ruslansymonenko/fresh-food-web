import {FC} from 'react';
import {IProduct} from '@/types/product.interface';
import Image from 'next/image';
import Link from 'next/link';
import {convertPrice} from '@/utils/converPrice';
import {API_PATHS} from '@/consts/apiPaths';

interface IProductItemProps {
  product: IProduct
}

const ProductItem: FC<IProductItemProps> = ({product}) => {
  return (
    <div className='group relative'>
      <div className='aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80'>
        <Image src={`${API_PATHS.SERVER}${product.image}`} alt={product.name} className='w-full h-full object-cover object-center lg:h-full lg:w-full' width={300} height={300}/>
      </div>

      <div className='mt-4 flex justify-between'>
        <div>
          <h3 className='text-smt text-gray-700'>
            <Link href={`/product/${product.slug}`}>
              {product.name}
            </Link>
            <p className='text-sm font-medium text-gray-500'>
              {product.category.name}
            </p>
          </h3>
        </div>
        <p className='text-sm font-medium text-gray-900'>
          {convertPrice(product.price)}
        </p>
      </div>
    </div>
  );
};

export default ProductItem;