import { copyrightSign } from '../assets/icons'
import { footerLogo } from '../assets/images'
import { footerLinks, socialMedia } from '../constants'

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex items-start justify-between flex-wrap gap-20 max-lg:flex-col">

        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} width={150} height={46} />
          </a>
          <p className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'> Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards</p>
          <div className='flex items-center gap-5 mt-8 '>
            {socialMedia.map((icon) => (
              <div className='flex justify-center items-center bg-white-400 rounded-full h-12 w-12'>
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className='flex flex-1 justify-between flex-wrap lg:gap-10 gap-20'>
          {footerLinks.map((section)=>(
            <div key={section}>
              <h4 className='text-white mb-6 font-montserrat text-2xl font-medium leading-normal'>
                {section.title}
              </h4>
              <ul>
              {section.links.map((link)=>(
                <li className='mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer' key={link.name}>
                  <a>{link.name}</a>
                </li>
              ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className='flex mt-24 justify-between max-sm:flex-col max-sm:items-center text-white-400'>
        <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer '>
          <img src={copyrightSign} alt="copy right sign" height={20} width={20} className='rounded-full m-0' />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className='font-montserrat cursor-pointer'>Terms and Conditions</p>
      </div>
    </footer>
  )
}

export default Footer

