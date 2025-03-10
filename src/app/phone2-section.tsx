"use client";

export default function Phone2Section() {
  const gratitudeText = `
    យើងខ្ញុំជាមាតា បិតា កូនប្រុសកូនស្រី សូមគោរព
    ថ្លែងអំណរគុណយ៉ាងជ្រាលជ្រៅ ចំពោះវត្តមានដ៏ឧត្តុងឧត្តមរបស់
    ឯកឧត្តម លោកឧកញ៉ា លោកជំទាវ លោក លោកស្រី អ្នកនាង កញ្ញា 
    ដែលជាភ្ញៀវកិត្តិយស ក្នុងពិធីសិរីមង្គលអាពាហ៍ពិពាហ៍
    របស់កូនប្រុស កូនស្រីយើងខ្ញុំ។
    សូមមេត្តាទទួលនូវសេចក្តីគោរពដ៏ខ្ពង់ខ្ពស់ពីយើងខ្ញុំ។
  `;

  const apologyText = `
    យើងខ្ញុំជាមាតា បិតា កូនប្រុសកូនស្រី សូមគោរពអធ្យាស្រ័យពីសំណាក់
    ឯកឧត្តម លោកឧកញ៉ា លោកជំទាវ លោក លោកស្រី អ្នកនាង
    កញ្ញា ដែលជាភ្ញៀវកិត្តិយសទាំងអស់គ្នា ក្នុងករណីដែលយើងខ្ញុំ
    ពុំបានទៅអញ្ជើញផ្ទាល់។ 
    យើងខ្ញុំសង្ឃឹមថាភ្ញៀវកិត្តិយសទាំងអស់ និងផ្តល់កិត្តិយស
    អញ្ជើញចូលរួមក្នុងពិធីអាពាហ៍ពិពាហ៍របស់កូនប្រុស កូនស្រី
    យើងខ្ញុំដោយក្ដីអនុគ្រោះ។
  `;

  const weddingGiftText = `
    លោកអ្នកអាចផ្ញើចំណងដៃតាមគណនីរបស់ពួកយើង
    ម្ចាស់គណនី: LIM SREYNEATH & SOM VISAL
  `;

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative w-full max-w-[430px] mx-auto aspect-[9/16] bg-white shadow-lg rounded-3xl overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://res.cloudinary.com/dtqcx7q38/image/upload/v1740850650/BG-1_gwnp9a.svg"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>


        <div className="relative z-10 w-full h-full p-2 flex flex-col items-center justify-center">
          <div className="text-dblue space-y-2">
            <div>
            <p className="text-lg text-center kantumruy-pro mt-2 md:mt-4 md:text-xl">
                <strong>សេចក្តីថ្លែងអំណរគុណ</strong>
              </p>
              <p className="text-sm md:text-base leading-5 tracking-normal text-center whitespace-r-text kantumruy-pro md:leading-6">
                {gratitudeText}
              </p>
            </div>

            {/* Apology Section */}
            <div>
              <p className="text-lg font-semibold mt-4 mb-2 text-center kantumruy-pro md:text-xl">
                <strong>សេចក្តីសូមអភ័យទោស</strong>
              </p>
              <p className="text-sm md:text-base leading-5 tracking-normal text-center whitespace-r-text kantumruy-pro md:leading-6">
                {apologyText}
              </p>
            </div>

            <div>
              <p className="text-lg mt-4 text-center kantumruy-pro md:text-xl">
                <strong>ចំណងដៃអាពាហ៍ពិពាហ៍</strong>
              </p>
              <p className="text-sm md:text-base leading-4 tracking-tight text-center whitespace-pre-line md:leading-6">
                {weddingGiftText}
              </p>
            </div>
            <div className="flex justify-center">
  <div className="shadow-lg border rounded-lg p-1 flex justify-center mt-10 w-fit">
    <p className="text-lg text-center m-0">
      <a
        href="https://pay.ababank.com/Nm5XLeoZ86FLaHh86"
        target="_blank"
        rel="noopener noreferrer"
        className="text-bqr hover:underline font-base kantumruy-pro underline">
        <strong>ចុចផ្ញើចំណងដៃ</strong>
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