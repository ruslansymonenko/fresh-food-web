import {Metadata} from 'next';
import {IProduct} from '@/types/product.interface';
import {ProductService} from '@/services/produtc.service';
import Catalogue from '@/components/ui/catalogue/Catalogue';

export const metadata: Metadata = {
  title: 'Catalogue',
  description: 'Fresh Food catalogue',
}

async function getProducts(): Promise<IProduct[] | null> {
  return await ProductService.getAll();
}

export default async function CataloguePage () {
  const data: IProduct[] | null = await getProducts();

  return <Catalogue products={data} isFull={true}/>
}