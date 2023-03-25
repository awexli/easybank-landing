import clsx from 'clsx';

export const Section = ({ title, description, cardSection, bgColor }) => {
  return (
    <section
      className={clsx(
        `w-full bg-[${bgColor}]	py-16`,
        'laptop_xl:px-20',
        'desktop:px-40 desktop:py-28'
      )}
    >
      <div className="flex flex-col items-center text-center laptop_xl:block laptop_xl:text-left">
        <h2 className="py-4 text-4xl text-[#2d314d]">{title}</h2>
        {description ? (
          <p className="max-w-xs text-sm text-[#808393] laptop_xl:max-w-lg desktop:max-w-2xl desktop:text-lg">
            {description}
          </p>
        ) : null}
      </div>

      <div
        className={clsx(
          'flex flex-col items-center',
          'laptop_xl:flex-row laptop_xl:items-start laptop_xl:justify-between'
        )}
      >
        {cardSection}
      </div>
    </section>
  );
};
