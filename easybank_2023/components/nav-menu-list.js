import clsx from 'clsx';

export const NavMenuList = ({ items }) => {
  return items.map((item) => {
    return (
      <li
        className={clsx(
          'border-b-2 border-white',
          'hover:cursor-pointer hover:transition-all',
          'hover:border-b-2 hover:border-b-green-500 ease-out duration-300'
        )}
      >
        {item}
      </li>
    );
  });
};
