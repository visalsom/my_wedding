
export default function Phone1Section() {
 
  const invitationText = `
    ឯកឧត្តម លោកឧកញ៉ា លោកជំទាវ លោក
    លោកស្រី អ្នកនាងកញ្ញាអញ្ជើញចូលរួមជាអធិបតី 
    និងជាភ្ញៀវកិត្តិយសដើម្បីប្រសិទ្ធពរជ័យ សិរីសួស្តីជ័យមង្គល 
    ក្នុងពិធីរៀបអាពាហ៍ពិពាហ៍ កូនប្រុស កូនស្រី របស់យើងខ្ញុំ
  `;

  const eventDetails = `
    ថ្ងៃ<strong>ព្រហស្បតិ៍</strong> ទី<strong>១៣</strong> ខែ<strong>មីនា</strong> ឆ្នាំ<strong>២០២៥</strong> 
    នាវេលាម៉ោង<strong>៥:០០</strong> នាទីល្ងាច នៅភោជនីយដ្ឋាន <strong>សមភាពថ្មី (អគារ B)</strong>
    <br /> ក្រុង/ខេត្តសៀមរាប ដោយមេត្រីភាព។
  `;

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative w-full max-w-[430px] mx-auto aspect-[9/16] bg-white shadow-lg rounded-3xl overflow-hidden">
      
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://res.cloudinary.com/dtqcx7q38/image/upload/v1740850653/BG-2_uwvafa.svg"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>


        <div className="relative z-10 w-full h-full p-4 flex items-center justify-center">
          <div className="text-dblue">
    
            <p className="text-lg sm:text-xl md:text-2xl text-center kantumruy-pro mt-4 md:mb-4">
              <strong>សូមគោរពអញ្ជើញ</strong>
            </p>

            <p className="text-sm leading-6 tracking-tight text-center whitespace-pre-line kantumruy-pro mb-4  md:text-lg sm:text-base">
              {invitationText}
            </p>

         
            <div className="flex justify-between mt-6">
              <div className="text-left pl-10">
                <p className="font-semibold mb-4 kantumruy-pro  text-base md:text-xl sm:text-lg">
                  <u>កូនប្រុសនាម</u>
                </p>
                <p className="text-base md:text-xl sm:text-lg font-semibold kantumruy-pro "><strong>សោម វិសាល</strong></p>
              </div>
              <div className="text-right pr-10">
                <p className="font-semibold mb-4 kantumruy-pro mr-4 text-base md:text-xl sm:text-lg">
                  <u>កូនស្រីនាម</u>
                </p>
                <p className="text-base md:text-xl sm:text-lg font-semibold kantumruy-pro "> <strong>លីម ស្រីនាថ</strong></p>
              </div>
            </div>

       
            <p className="text-base mt-4 text-center kantumruy-pro md: mt12">ដែលនឹងប្រព្រឹត្តទៅនៅ</p>
            <p
              className="text-base text-center leading-6 kantumruy-pro md:text-lg"
              dangerouslySetInnerHTML={{ __html: eventDetails }}
            />

    
<div className="flex justify-center">
  <div className="shadow-lg border rounded-lg p-1 flex justify-center mt-10 w-fit">
    <p className="text-lg text-center m-0">
      <a
        href="https://www.google.com/maps/place/Sampheap+thmei+Restaurant/@13.3488562,103.8405692,17z/data=!3m1!4b1!4m6!3m5!1s0x3110175e6a94bf95:0xff7a7aaf4d340053!8m2!3d13.348851!4d103.8431441!16s%2Fg%2F1hjh4p320?entry=ttu&g_ep=EgoyMDI1MDIyNS4wIKXMDSoASAFQAw%3D%3D"
        target="_blank"
        rel="noopener noreferrer"
        className="text-bqr hover:underline kantumruy-pro underline"
      >
        <strong>បើកផែនទី</strong>
      </a>
    </p>
  </div>
</div>
          </div>
        </div>
      </div>
    </section>
);
}