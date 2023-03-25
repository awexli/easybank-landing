import Image from 'next/image';
import clsx from 'clsx';

import logo from '../public/logo.svg';
import logoFooter from '../public/logo-footer.svg';
import iconBurger from '../public/icon-hamburger.svg';
import bgIntroMobile from '../public/bg-intro-mobile.svg';
import bgIntroDesk from '../public/bg-intro-desktop.svg';
import mockup from '../public/image-mockups.png';
import iconOnlineBanking from '../public/icon-online.svg';
import iconSimpleBudgeting from '../public/icon-budgeting.svg';
import iconFastOnboarding from '../public/icon-onboarding.svg';
import iconOpenApi from '../public/icon-api.svg';
import articleCurrency from '../public/image-currency.jpg';
import articleRestaurant from '../public/image-restaurant.jpg';
import articlePlane from '../public/image-plane.jpg';
import articleConfetti from '../public/image-confetti.jpg';
import iconFacebook from '../public/icon-facebook.svg';
import iconInstagram from '../public/icon-instagram.svg';
import iconPinterest from '../public/icon-pinterest.svg';
import iconTwitter from '../public/icon-twitter.svg';
import iconYoutube from '../public/icon-youtube.svg';

import Button from '@/components/button';
import { InfoBlock } from '@/components/info-block';
import { ArticleCard } from '@/components/article-card';
import { Section } from '@/components/section';

export default function Home() {
  return (
    <div
      className={clsx(
        'relative m-auto min-h-[1440px] overflow-hidden bg-white',
        'flex flex-col items-center',
        'max-w-screen-mobileStart',
        'mobile:max-w-screen-mobile',
        'tablet:max-w-screen-tablet',
        'laptop_xl:max-w-screen-laptop_xl',
        'desktop:max-w-screen-desktop'
      )}
    >
      {/* Nav menu */}
      <div
        className={clsx(
          'sticky top-0 z-50 min-w-full',
          'flex justify-between',
          'bg-white py-4 px-6',
          'laptop_xl:px-20',
          'desktop:px-40'
        )}
      >
        <div className="flex items-center">
          <Image src={logo} alt="Logo" width={139} height={20} />
        </div>
        <div
          className={clsx(
            'hidden w-[32%]',
            'laptop_xl:flex laptop_xl:items-center',
            'desktop:flex desktop:items-center'
          )}
        >
          <ul className="flex w-full justify-between">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
        </div>
        <div
          className={clsx(
            'flex items-center',
            'laptop_xl:hidden',
            'desktop:hidden'
          )}
        >
          <Image src={iconBurger} alt="Hamburger" width={24} height={11} />
        </div>
        <div className="hidden laptop_xl:block desktop:block">
          <Button />
        </div>
      </div>

      {/* intro section */}
      <section
        className={clsx(
          'bg-[#fcfcfc] pb-20',
          'relative',
          'tablet:w-full',
          'laptop_xl:translate-y-0 laptop_xl:translate-x-0',
          'laptop_xl:py-0'
        )}
      >
        {/* Phones */}
        <Image
          className={clsx(
            'absolute z-10',
            '-top-[7.1rem]',
            'mobile:-top-[8.3rem]',
            'tablet:-top-[14.3rem]',
            'laptop_xl:-top-[7.5rem] laptop_xl:-right-[15.5rem]',
            'desktop:-right-[8.2rem]'
          )}
          src={mockup}
          alt="Logo"
          width={767}
          height={939}
          priority={true}
        />

        {/* background images */}
        <div
          className={clsx(
            'laptop_xl:relative laptop_xl:overflow-hidden',
            'laptop_xl:flex laptop_xl:flex-row-reverse laptop_xl:items-center',
            'laptop_xl:h-[660px]'
          )}
        >
          <div
            className={clsx(
              'h-[300px]',
              'mobile:h-[350px]',
              'tablet:h-[550px]',
              'laptop_xl:static laptop_xl:h-full laptop_xl:grow'
            )}
          >
            <Image
              className={clsx(
                'absolute',
                '-top-[2.5rem]',
                'tablet:-top-[4.5rem]',
                'laptop_xl:hidden'
              )}
              src={bgIntroMobile}
              alt="Logo"
              width={775}
              height={823}
              priority={true}
            />
            <Image
              className={clsx(
                'hidden',
                'laptop_xl:block',
                'laptop_xl:absolute',
                'laptop_xl:-top-[17rem] laptop_xl:right-[-33.5rem]',
                'desktop:right-[-27.5rem]'
              )}
              src={bgIntroDesk}
              alt="Logo"
              width={1271}
              height={1034}
            />
          </div>

          {/* Next generation digital banking */}
          <div
            className={clsx(
              'flex flex-col items-center',
              'laptop_xl:items-start',
              'laptop_xl:px-20',
              'desktop:px-40'
            )}
          >
            <div
              className={clsx(
                'flex flex-col items-center',
                'laptop_xl:items-start'
              )}
            >
              <h1
                className={clsx(
                  'text-center text-4xl text-[#2d314d]',
                  'tablet:w-[70%]',
                  'laptop_xl:text-start laptop_xl:text-[3.5rem] laptop_xl:leading-tight'
                )}
              >
                Next generation digital banking
              </h1>
              <p
                className={clsx(
                  'max-w-xs px-0 py-6 text-center text-sm	text-[#808393]',
                  'laptop_xl:text-start laptop_xl:text-lg',
                  'laptop_xl:max-w-md laptop_xl:leading-relaxed'
                )}
              >
                Take your financial life online. Your Easybank account will be a
                one-stop-shop for spending, saving, budgeting, investing, and
                much more.
              </p>
            </div>
            <Button />
          </div>
        </div>
      </section>

      <Section
        title="Why choose Easybank?"
        description="We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before."
        bgColor="#f9fafb"
        cardSection={
          <>
            <InfoBlock
              imageSource={iconOnlineBanking}
              title={'Online Banking'}
              description={
                'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.'
              }
            />
            <InfoBlock
              imageSource={iconSimpleBudgeting}
              title={'Simple Budgeting'}
              description={
                "See exactly where your money goes each month. Receive notifications when you're close to your hitting limits."
              }
            />
            <InfoBlock
              imageSource={iconFastOnboarding}
              title={'Fast Onboarding'}
              description={
                "We don't do branches. Open your account in minutes online and start taking control of your finances right away."
              }
            />
            <InfoBlock
              imageSource={iconOpenApi}
              title={'Open API'}
              description={
                'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.'
              }
            />
          </>
        }
      />
      <Section
        title="Latest Articles"
        bgColor="#fcfcfc"
        cardSection={
          <>
            <ArticleCard
              imageSource={articleCurrency}
              author={'Claire Robinson'}
              title={'Receive money in any currency with no fees'}
              description={
                "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single ..."
              }
              alt="Photo of cash bills in a pile"
            />
            <ArticleCard
              imageSource={articleRestaurant}
              author={'Wilson Hutton'}
              title={'Treat yourself without worrying about money'}
              description={
                'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you ...'
              }
              alt="Photo of a restaurant dish"
            />
            <ArticleCard
              imageSource={articlePlane}
              author={'Wilson Hutton'}
              title={'Take your Easybank card wherever you go'}
              description={
                'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you ...'
              }
              alt={"Photo of a plane's wing in the sky"}
            />
            <ArticleCard
              imageSource={articleConfetti}
              author={'Claire Robinson'}
              title={'Our invite-only Beta accounts are now live!'}
              description={
                'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...'
              }
              alt={'Photo of confetti'}
            />
          </>
        }
      />
      <footer
        className={clsx(
          `w-full bg-[#2d314d]	py-8`,
          'laptop_xl:px-20',
          'desktop:px-40'
        )}
      >
        <div className="flex h-full flex-col items-center laptop_xl:flex-row laptop_xl:justify-between">
          <div className="">
            <Image
              src={logoFooter}
              alt="Logo"
              width={139}
              height={20}
              className="pb-8"
            />
            <div className="flex justify-between">
              <Image src={iconFacebook} alt="facebook" width={20} height={20} />
              <Image src={iconYoutube} alt="youtube" width={20} height={20} />
              <Image src={iconTwitter} alt="twitter" width={20} height={20} />
              <Image
                src={iconPinterest}
                alt="pinterest"
                width={20}
                height={20}
              />
              <Image
                src={iconInstagram}
                alt="instagram"
                width={20}
                height={20}
              />
            </div>
          </div>

          <div className="py-8 text-white laptop_xl:flex laptop_xl:w-96">
            <div className="py-4 laptop_xl:py-0 laptop_xl:mr-36">
              <ul className="flex h-24 flex-col justify-between text-center laptop_xl:text-left">
                <li>About us</li>
                <li>Contact</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <ul className="flex h-24 flex-col justify-between text-center laptop_xl:text-left">
                <li>Careers</li>
                <li>Support</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center laptop_xl:items-end">
            <Button />
            <span className="pt-8 text-[#808393]">
              © Easybank. All Rights Reserved
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
