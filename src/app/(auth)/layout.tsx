import Image from "next/image";
import registerIm from "@/assets/images/registerIm.png";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <div className="flex flex-col justify-between p-5 md:flex-row md:p-10">
        <div className="mb-5 mt-20 w-full md:mb-0 md:w-1/2">
          <Image
            src={registerIm}
            width={600}
            height={500}
            alt="Picture of doctor"
          />
        </div>

        <div className="flex w-full flex-col rounded-lg bg-pink-100 p-4 md:mx-4 md:w-1/2 md:px-12 md:py-6">
          <h1 className="mt-4 text-center font-serif text-2xl font-bold text-dark-primary md:mt-6 md:text-5xl">
            Hello Again
          </h1>
          <h2 className="mt-2 text-center font-sans text-lg font-light md:text-xl">
            Glad to See You!
          </h2>
          <div className="mt-5 flex flex-col items-center text-xl md:mt-10 md:text-2xl">
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}
