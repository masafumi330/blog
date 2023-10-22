import Image from 'next/image'
import Link from 'next/link'
import Icon from "../public/assets/icon.svg";


const Header = () => {
  return (
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <div className=" relative w-10 h-10 p-2 rounded-lg">
        <Image fill={true} src={Icon} alt="icon"/>
      </div>
      <span className="ml-3 text-xl">Masafumi's Blog</span>
    </Link>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <Link href="#" className="mr-5 hover:text-gray-900">Posts</Link>
      <Link href="#" className="mr-5 hover:text-gray-900">About</Link>
    </nav>
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Contact
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
  )
}

export default Header
