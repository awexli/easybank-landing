import Image from 'next/image';

export const ArticleCard = ({
  imageSource,
  author,
  title,
  description,
  alt,
}) => {
  return (
    <div className="mt-8 flex flex-col bg-white">
      <div className="w-[265px] overflow-hidden rounded">
        <div className="relative h-[188px]">
          <Image src={imageSource} fill alt={alt} />
        </div>
        <div className="p-4">
          <span className="text-[10px] ">By {author}</span>
          <h3 className="py-2 text-lg leading-tight text-[#2d314d] hover:cursor-pointer hover:text-[#31d35c]">
            {title}
          </h3>
          <p className="text-sm text-[#808393]">{description}</p>
        </div>
      </div>
    </div>
  );
};
