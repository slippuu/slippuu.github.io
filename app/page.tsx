import Image from 'next/image'

export default function Home() {
  return (
      <main className="container">
        <Image
          src="https://github.com/slippuu.png"
          alt='Callum Howell'
          width={128}
          height={128}
        />
        <h1>Coming Soon</h1>
      </main>
  );
}
