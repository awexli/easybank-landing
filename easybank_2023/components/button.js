import clsx from 'clsx';

export default function Button() {
  return (
    <button
      className={clsx(
        'rounded-full px-8 py-3',
        'bg-gradient-to-r from-[#31d35c] to-[#2bb7da]',
        'text-sm text-white w-40'
      )}
    >
      Request Invite
    </button>
  );
}
