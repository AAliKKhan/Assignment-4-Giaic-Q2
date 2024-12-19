import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-6 grid-rows-6 gap-2 h-screen p-4 bg-white">

    <div className="col-span-1 row-span-6 bg-yellow-400 flex items-center justify-center font-bold">
      Nav
    </div>


    <div className="col-span-5 row-span-1 bg-yellow-400 flex items-center justify-start px-4 font-bold">
      Header
    </div>


    <div className="col-span-4 row-span-4 bg-yellow-400 flex items-start justify-start px-4 py-2 font-bold">
      Article
    </div>


    <div className="col-span-1 row-span-4 bg-yellow-400 flex items-center justify-center font-bold">
      Ads
    </div>


    <div className="col-span-5 row-span-1 bg-yellow-400 flex items-center justify-start px-4 font-bold">
      Footer
    </div>
  </div>
 
  );
}
