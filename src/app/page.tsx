import Image from 'next/image';
import myLogo from './images/logo_prov.jpg';
import mySlogan from './images/Slogan_futur.jpg';

export default function Home() {
  return (
    <div className='h-[85%]'>
      <main className='flex flex-row justify-between h-[70%]'>
      <Image
        alt="Logo"
        className="w-[30%]"
        src={myLogo}
        placeholder="blur"
      />
      <Image
        alt="Slogan"
        className="w-[68%] object-cover "
        src={mySlogan}
        placeholder="blur"
      />
      </main>
      <footer className='mt-10 text-base underline flex justify-end'>
       <a href="mailto:morgane.vandenbroeck@gmail.com">Envoyez-moi un mail</a>
      </footer>
    </div>
  );
}
