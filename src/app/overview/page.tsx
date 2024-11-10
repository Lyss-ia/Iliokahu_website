import Image from 'next/image';
import myPicture from '../images/us.jpg'

export default function Home() {
  return (
    <div className='h-[85%]'>
      <main className='flex flex-row h-[70%]'>
      <Image
        alt="Logo"
        className="w-[30%] mr-6"
        src={myPicture}
        placeholder="blur"
      />
      <span><h3>Bonjour, je m'appelle Morgane !</h3>
      présentation</span>
      </main>
      <div className='bg-white h-4 mt-6'></div>
    </div>
  );
}
