import Image from 'next/image'
// import rachalImage from '@/assets/images/rachal.jpeg'


export default function Home() {
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 pt-10 items-center">
      <div className="mb-10"> {/* Adjusted margin */}
        <p className="text-[#f5f3f4] font-bold text-[13px]">HELLO THERE, WELCOME!</p>
        <p className="text-white text-[30px] font-bold">I'm Rachal Skeen</p>
        <p className="text-red-500 text-[25px] font-bold">
        As A Reputable Certified Public Accountant,
        </p>
        <p className="text-white text-[18px] font-bold">
        I'm dedicated to providing comprehensive tax solutions tailored to meet your specific needs. Let me assist you in navigating and optimizing your tax requirements effectively!
        </p>

        <div className="mt-4">
          <button className="text-white text-[12px] font-bold px-3 pb-2 py-4 bg-red-500 rounded-full border-[2px] border-black hover:border-white">
            CONTACT ME
          </button>
        </div>
      </div>
      <div className="flex justify-center ">
      <div className="h-[320px] w-[250px] p-2 rounded-[20px] bg-gradient-to-b from-[#250902] to-[#e5383b]">
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
