import Image from 'next/image'
// import rachalImage from '@/assets/images/rachal.jpeg'


export default function Home() {
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 pt-10 items-center">
      <div className="mb-10"> {/* Adjusted margin */}
        <p className="text-white text-[13px]">HELLO THERE, WELCOME!</p>
        <p className="text-white text-[40px] font-bold">I'm Rachal Skeen</p>
        <p className="text-red-500 text-[40px] font-bold">
          I'm Kearney's #1 trusted personal accountant/CPA
        </p>
        <p className="text-white text-[40px] font-bold">
          I'm ready to help You with you SAVE on your tax return!
        </p>

        <div className="mt-4">
          <button className="text-white text-[12px] px-3 pb-2 py-4 bg-red-500 rounded-full border-[8px] hover:border-white">
            CONTACT ME
          </button>
        </div>
      </div>
      <div className="flex justify-center ">
      <div className="h-[320px] w-[250px] p-2 rounded-[20px] bg-gradient-to-b from-[#ff004D] to-[#2A26B8]">
        {/* <img src={rachalImage} alt="Rachal Skeen" className="h-full w-[250px] object-cover rounded-[20px]" /> */}
        <Image
      src="/rachal.jpeg"
      width={200}
      height={200}
      alt="Picture of the author"
      className="h-full w-[250px] object-cover rounded-[20px]"
    />
      </div>
      </div>
     
    </div>
    </>
  )
}
