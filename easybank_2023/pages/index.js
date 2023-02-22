import Image from 'next/image';

import logo from '../images/logo.svg';
import iconBurger from '../images/icon-hamburger.svg';
import bgIntroMobile from '../images/bg-intro-mobile.svg';
import mockup from '../images/image-mockups.png';

const navMenu = [
  'bg-white',
  'flex',
  'justify-between',
  'p-4',
  'fixed',
  'top-0',
  'left-0',
  'right-0',
  'z-50',
].join(' ');

export default function Home() {
  return (
    <div className="flex flex-col items-center relative max-w-screen-2xl m-auto">
      {/* Nav menu */}
      <div className="bg-white flex justify-between p-4 sticky top-0 z-50 min-w-full max-w-screen-sm">
        <Image src={logo} alt="Logo" width={139} height={20} />
        <Image src={iconBurger} alt="Hamburger" width={24} height={11} />
      </div>

      {/* Hero images */}
      <div className="relative">
        <div>
          <Image src={bgIntroMobile} alt="Logo" width={775} height={823} />
          <Image
            className="absolute -top-28 z-0"
            src={mockup}
            alt="Logo"
            width={767}
            height={939}
          />
        </div>
      </div>

      {/* Hero call text & cta */}
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center">
          <h1 className="flex flex-col items-center text-4xl">
            <span>Next generation</span>
            <span>digital banking</span>
          </h1>
          <p className="p-4 text-center text-sm max-w-xs">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
        </div>
        <button className="bg-gradient-to-r from-[#31d35c] to-[#2bb7da] text-white rounded-full px-6 py-2 text-sm my-4">
          Request Invite
        </button>
      </div>
    </div>
  );
}
