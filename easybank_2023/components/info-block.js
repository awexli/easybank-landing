import Image from 'next/image';
import clsx from 'clsx';

export const InfoBlock = ({ imageSource, title, description }) => {
  return (
    <div
      className={clsx(
        'mt-12 flex flex-col items-center text-center',
        'laptop_xl:block laptop_xl:text-left'
      )}
    >
      <Image
        src={imageSource}
        alt="Icon online banking"
        width={72}
        height={72}
      />
      <h3 className="py-4 text-2xl text-[#2d314d]">{title}</h3>
      <p className="max-w-xs text-sm laptop_xl:max-w-[85%]">{description}</p>
    </div>
  );
};
