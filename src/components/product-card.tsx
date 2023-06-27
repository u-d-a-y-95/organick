import Image from "next/image";

interface IProductCard {
  name: string;
  categoryName: string;
  price: number;
  url: string;
}

export default function ProductCard({
  categoryName,
  name,
  price,
  url,
}: IProductCard) {
  return (
    <div className="flex flex-col h-[280px] w-[200px] sm:w-full sm:h-[300px] md:h-[320px] lg:h-[350px]  border rounded-lg p-4 sm:p-8">
      <div>
        <span className="bg-primary p-2 text-white rounded-lg">
          {categoryName}
        </span>
      </div>
      <div className="relative w-full flex-1">
        <Image src={url} fill={true} alt="category" />
      </div>
      <div className="">
        <div className="text-primary-dark">{name}</div>
        <div className="w-full border my-1"></div>
        <div>
          <span className="">${price}</span>
          <div></div>
        </div>
      </div>
    </div>
  );
}
