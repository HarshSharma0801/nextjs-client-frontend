import {
  Mark,
  Money,
  Bin,
  Pen,
  Eye,
  Match,
  Applicant,
  Message,
} from "../../../public/icons";
import Image from "next/image";
import Des from "../../../public/Tags.png";
import Atlas from "../../../public/Rectangle 43.png";
const MainPage = () => {
  return (
    <>
      <div className="w-full flex xl:flex-row flex-col  h-full border-l-gray-200 border-b-gray-200">
        <div className="xl:w-[70%] w-full flex  flex-col">
          <div className="w-full p-4 xl:p-10 border-b-[0.2px]   border-b-gray-200">
            <div className="flex  flex-col  xl:gap-8 gap-3">
              <div className="flex justify-start flex-row  xl:items-center xl:gap-5 gap-3">
                <div className="xl:text-[35px] text-[14px] text-[#3D3D3D] text-center font-[600] leading-[19px] xl:leading-[47px] ">
                  Senior Product Designer
                </div>
                <div className="flex justify-center items-center">
                  <div className="xl:text-[14px] text-[9px] flex justify-center text-[#888888] text-center font-[500] leading-[18px] ">
                    <div>posted 2 days ago</div>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <div>
                    <svg
                      width="57"
                      height="23"
                      viewBox="0 0 57 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.5 11.5C0.5 5.70101 5.20101 1 11 1H46C51.799 1 56.5 5.70101 56.5 11.5C56.5 17.299 51.799 22 46 22H11C5.20101 22 0.5 17.299 0.5 11.5Z"
                        fill="#ECFDF3"
                      />
                      <path
                        d="M0.5 11.5C0.5 5.70101 5.20101 1 11 1H46C51.799 1 56.5 5.70101 56.5 11.5C56.5 17.299 51.799 22 46 22H11C5.20101 22 0.5 17.299 0.5 11.5Z"
                        stroke="#ABEFC6"
                      />
                      <circle cx="10" cy="11.5" r="3" fill="#17B26A" />
                      <path
                        d="M26.6179 11.1364C26.6179 12.0682 26.4474 12.8693 26.1065 13.5398C25.7656 14.2074 25.2983 14.7216 24.7045 15.0824C24.1136 15.4403 23.4418 15.6193 22.6889 15.6193C21.9332 15.6193 21.2585 15.4403 20.6648 15.0824C20.0739 14.7216 19.608 14.206 19.267 13.5355C18.9261 12.8651 18.7557 12.0653 18.7557 11.1364C18.7557 10.2045 18.9261 9.40483 19.267 8.73722C19.608 8.06676 20.0739 7.55256 20.6648 7.1946C21.2585 6.83381 21.9332 6.65341 22.6889 6.65341C23.4418 6.65341 24.1136 6.83381 24.7045 7.1946C25.2983 7.55256 25.7656 8.06676 26.1065 8.73722C26.4474 9.40483 26.6179 10.2045 26.6179 11.1364ZM25.3139 11.1364C25.3139 10.4261 25.1989 9.82812 24.9688 9.34233C24.7415 8.85369 24.429 8.48438 24.0312 8.23438C23.6364 7.98153 23.1889 7.85511 22.6889 7.85511C22.1861 7.85511 21.7372 7.98153 21.3423 8.23438C20.9474 8.48438 20.6349 8.85369 20.4048 9.34233C20.1776 9.82812 20.0639 10.4261 20.0639 11.1364C20.0639 11.8466 20.1776 12.446 20.4048 12.9347C20.6349 13.4205 20.9474 13.7898 21.3423 14.0426C21.7372 14.2926 22.1861 14.4176 22.6889 14.4176C23.1889 14.4176 23.6364 14.2926 24.0312 14.0426C24.429 13.7898 24.7415 13.4205 24.9688 12.9347C25.1989 12.446 25.3139 11.8466 25.3139 11.1364ZM28.1573 17.9545V8.95455H29.4016V10.0156H29.5082C29.582 9.87926 29.6886 9.72159 29.8278 9.54261C29.967 9.36364 30.1602 9.20739 30.4073 9.07386C30.6545 8.9375 30.9812 8.86932 31.3874 8.86932C31.9158 8.86932 32.3874 9.00284 32.8022 9.26989C33.217 9.53693 33.5423 9.92187 33.7781 10.4247C34.0167 10.9276 34.136 11.5327 34.136 12.2401C34.136 12.9474 34.0181 13.554 33.7823 14.0597C33.5465 14.5625 33.2227 14.9503 32.8107 15.223C32.3988 15.4929 31.9286 15.6278 31.4002 15.6278C31.0025 15.6278 30.6772 15.5611 30.4244 15.4276C30.1744 15.294 29.9783 15.1378 29.8363 14.9588C29.6942 14.7798 29.5849 14.6207 29.5082 14.4815H29.4315V17.9545H28.1573ZM29.4059 12.2273C29.4059 12.6875 29.4727 13.0909 29.6062 13.4375C29.7397 13.7841 29.9329 14.0554 30.1857 14.2514C30.4386 14.4446 30.7482 14.5412 31.1147 14.5412C31.4954 14.5412 31.8136 14.4403 32.0692 14.2386C32.3249 14.0341 32.5181 13.7571 32.6488 13.4077C32.7823 13.0582 32.8491 12.6648 32.8491 12.2273C32.8491 11.7955 32.7837 11.4077 32.6531 11.0639C32.5252 10.7202 32.332 10.4489 32.0735 10.25C31.8178 10.0511 31.4982 9.9517 31.1147 9.9517C30.7454 9.9517 30.4329 10.0469 30.1772 10.2372C29.9244 10.4276 29.7326 10.6932 29.6019 11.0341C29.4712 11.375 29.4059 11.7727 29.4059 12.2273ZM38.3846 15.6321C37.7397 15.6321 37.1843 15.4943 36.7184 15.2188C36.2553 14.9403 35.8974 14.5497 35.6445 14.0469C35.3945 13.5412 35.2695 12.9489 35.2695 12.2699C35.2695 11.5994 35.3945 11.0085 35.6445 10.4972C35.8974 9.9858 36.2496 9.58665 36.7013 9.29972C37.1559 9.01278 37.6871 8.86932 38.2951 8.86932C38.6644 8.86932 39.0224 8.9304 39.369 9.05256C39.7156 9.17472 40.0266 9.36648 40.3022 9.62784C40.5778 9.8892 40.7951 10.2287 40.9542 10.6463C41.1133 11.0611 41.1928 11.5653 41.1928 12.1591V12.6108H35.9897V11.6562H39.9442C39.9442 11.321 39.8761 11.0241 39.7397 10.7656C39.6033 10.5043 39.4116 10.2983 39.1644 10.1477C38.9201 9.99716 38.6332 9.92188 38.3036 9.92188C37.9457 9.92188 37.6332 10.0099 37.3661 10.1861C37.1019 10.3594 36.8974 10.5866 36.7525 10.8679C36.6104 11.1463 36.5394 11.4489 36.5394 11.7756V12.5213C36.5394 12.9588 36.6161 13.331 36.7695 13.6378C36.9258 13.9446 37.1431 14.179 37.4215 14.3409C37.6999 14.5 38.0252 14.5795 38.3974 14.5795C38.6388 14.5795 38.859 14.5455 39.0579 14.4773C39.2567 14.4062 39.4286 14.3011 39.5735 14.1619C39.7184 14.0227 39.8292 13.8509 39.9059 13.6463L41.1119 13.8636C41.0153 14.2187 40.842 14.5298 40.592 14.7969C40.3448 15.0611 40.0337 15.267 39.6587 15.4148C39.2866 15.5597 38.8619 15.6321 38.3846 15.6321ZM43.8807 11.6136V15.5H42.6065V8.95455H43.8295V10.0199H43.9105C44.0611 9.6733 44.2969 9.39489 44.6179 9.18466C44.9418 8.97443 45.3494 8.86932 45.8409 8.86932C46.2869 8.86932 46.6776 8.96307 47.0128 9.15057C47.348 9.33523 47.608 9.6108 47.7926 9.97727C47.9773 10.3437 48.0696 10.7969 48.0696 11.3366V15.5H46.7955V11.4901C46.7955 11.0156 46.6719 10.6449 46.4247 10.3778C46.1776 10.108 45.8381 9.97301 45.4062 9.97301C45.1108 9.97301 44.848 10.0369 44.6179 10.1648C44.3906 10.2926 44.2102 10.4801 44.0767 10.7273C43.946 10.9716 43.8807 11.267 43.8807 11.6136Z"
                        fill="#067647"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex justify-start items-start gap-5">
                <div className="flex gap-3">
                  <div>
                    <Mark />
                  </div>
                  <div className="xl:text-[20px] text-[11px] leading-[27px] font-500">
                    Delaware, USA
                  </div>
                </div>

                <div className="flex gap-3">
                  <div>
                    <Money />
                  </div>
                  <div className="xl:text-[20px] text-[11px] leading-[27px] font-500">
                    $300k-$400k
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full  p-4 xl:p-10 border-b-[0.2px]   border-b-gray-200">
            <div className="xl:flex  xl:justify-between gap-10 grid grid-cols-1  items-start">
              <div className="flex flex-col gap-3">
                <div className="text-[#6E6D6D] text-[11px] xl:text-[14px] font-[500] leading-[19px]">
                  Skills Required
                </div>

                <div className="w-[100px] h-[60px] xl:w-[128px] xl:h-[88px]">
                  <Image
                    src={Des}
                    alt="al"
                    className="w-full h-full object-scale-down xl:object-cover"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="text-[#6E6D6D] text-[11px] xl:text-[14px] font-[500] leading-[19px]">
                  Preferred Language
                </div>
                <div className="text-[#3D3D3D] font-[600] text-[13px] xl:text-[1rem] leading-[21px] ">
                  English
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="text-[#6E6D6D] text-[11px] xl:text-[14px] font-[500] leading-[19px]">
                  Type
                </div>
                <div className="text-[#3D3D3D] font-[600] text-[13px] xl:text-[1rem]  leading-[21px] ">
                  Full time
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="text-[#6E6D6D] text-[11px] xl:text-[14px] font-[500] leading-[19px]">
                  Years of Experience
                </div>
                <div className="text-[#3D3D3D] font-[600] xl:text-[1rem] text-[13px] leading-[21px] ">
                  3+ Years of Experience
                </div>
              </div>
            </div>
          </div>

          <div className="w-full  p-4 xl:p-10 border-b-[0.2px]   border-b-gray-200">
            <div className="xl:flex  xl:justify-between gap-10 grid grid-cols-2  flex-col items-start">
              <div className="flex flex-col gap-[6px]">
                <div className="font-[500] xl:text-[14px] text-[9px] leading-[18px] text-[#6E6D6D]">
                  About the job
                </div>
                <div className="font-[500] xl:text-[16px] text-[10px] leading-[28px] text-[#3D3D3D]">
                  1. Handle the UI/UX research design
                </div>
                <div className="font-[500] xl:text-[16px] text-[10px] leading-218px] text-[#3D3D3D]">
                  2. Work on researching on latest web applications designs &
                  trends
                </div>
                <div className="font-[500] xl:text-[16px] text-[10px] leading-[28px] text-[#3D3D3D]">
                  3. Work on conceptualizing and visualizing
                </div>
                <div className="font-[500] xl:text-[16px] text-[10px] leading-[28px] text-[#3D3D3D]">
                  4. Work on creating graphics content and other graphic related
                  works
                </div>
              </div>

              <div className="flex flex-col gap-[6px]">
                <div className="font-[500] xl:text-[14px] text-[9px] leading-[18px] text-[#6E6D6D]">
                  Benefits
                </div>
                <ol className="list-disc flex flex-col ">
                  <li className="font-[500] xl:text-[16px] text-[10px] leading-[28px] text-[#3D3D3D]">
                    Health insurance
                  </li>
                  <li className="font-[500] xl:text-[16px] text-[10px] leading-[28px] text-[#3D3D3D]">
                    Provident Fund
                  </li>
                </ol>
              </div>
              <div className="flex flex-col gap-[6px]">
                <div className="font-[500] xl:text-[14px] text-[9px] leading-[18px] text-[#6E6D6D]">
                  Schedule
                </div>
                <ol className="list-disc flex flex-col ">
                  <li className="font-[500] xl:text-[16px] text-[10px] leading-[28px] text-[#3D3D3D]">
                    Day shift
                  </li>
                </ol>
              </div>
              <div className="flex flex-col gap-[6px]">
                <div className="font-[500] xl:text-[14px] text-[9px] leading-[18px] text-[#6E6D6D]">
                  Supplemental pay types
                </div>
                <ol className="list-disc flex flex-col ">
                  <li className="font-[500] xl:text-[16px] text-[10px] leading-[28px] text-[#3D3D3D]">
                    Performance bonus
                  </li>
                  <li className="font-[500] xl:text-[16px] text-[10px] leading-[28px] text-[#3D3D3D]">
                    Yearly bonus
                  </li>
                </ol>
              </div>
              <div className="flex flex-col gap-[6px]">
                <div className="font-[500] xl:text-[14px] text-[9px] leading-[18px] text-[#6E6D6D]">
                  Work Location
                </div>
                <div className="font-[500] xl:text-[16px] text-[10px] leading-[28px] text-[#3D3D3D]">
                  In person
                </div>
              </div>
            </div>
          </div>

          <div className="w-full  p-4 xl:p-10 border-b-[0.2px]   border-b-gray-200">
            <div className="flex flex-col gap-10">
              <div className="flex gap-3 justify-start items-center">
                <div className="xl:w-[40px] xl:h-[40px] w-[25px] h-[25px]">
                  <Image
                    src={Atlas}
                    alt="jij"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-[#4F4F4F] font-[500] xl:text-[20px] text-[14px] leading-[27px]">
                  Atlassian
                </div>
              </div>

              <div className="flex xl:flex-row flex-col gap-10 xl:justify-between">
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col gap-[4px]">
                    <div className="text-[#6E6D6D] text-[10px] xl:text-[14px] font-[500] leading-[19px]">
                      Company size
                    </div>

                    <div className="text-[#3D3D3D] font-[500] text-[12px] xl:text-[16px] leading-[21px]">
                      1k - 2k Employees
                    </div>
                  </div>
                  <div className="flex flex-col gap-[4px]">
                    <div className="text-[#6E6D6D] xl:text-[14px] text-[10px] font-[500] leading-[19px]">
                      Sector
                    </div>

                    <div className="text-[#3D3D3D] font-[500] text-[12px] xl:text-[16px] leading-[21px]">
                      Information Technology, Infrastructure
                    </div>
                  </div>
                  <div className="flex flex-col gap-[4px]">
                    <div className="text-[#6E6D6D] xl:text-[14px] text-[10px] font-[500] leading-[19px]">
                      Founded In
                    </div>

                    <div className="text-[#3D3D3D] font-[500] xl:text-[16px] text-[12px] leading-[21px]">
                      2019
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-8">
                  <div className="flex flex-col gap-[4px]">
                    <div className="text-[#6E6D6D]  xl:text-[14px] text-[10px] font-[500] leading-[19px]">
                      Type
                    </div>

                    <div className="text-[#3D3D3D] font-[500] xl:text-[16px] text-[12px]  leading-[21px]">
                      Private
                    </div>
                  </div>
                  <div className="flex flex-col gap-[4px]">
                    <div className="text-[#6E6D6D]  xl:text-[14px] text-[10px] font-[500] leading-[19px]">
                      Funding
                    </div>

                    <div className="text-[#3D3D3D] font-[500] xl:text-[16px] text-[12px] leading-[21px]">
                      Bootstrapped
                    </div>
                  </div>
                  <div className="flex flex-col gap-[4px]">
                    <div className="text-[#6E6D6D]  xl:text-[14px] text-[10px] font-[500] leading-[19px]">
                      Founded by
                    </div>

                    <div className="text-[#3D3D3D] font-[500] xl:text-[16px] text-[12px] leading-[21px]">
                      Scott Farquhar, Mike Cannon-Brookes
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="xl:w-[30%] w-full flex flex-col h-screen ">
          <div className="w-full p-4 xl:p-10 border-l  border-l-gray-200 border-b-gray-200">
            <div className="flex justify-center gap-4 items-center">
              <div className="bg-[#FEF4F2] flex justify-center  gap-3 items-center text-[#DC4A2D] rounded-[8px] xl:h-[46px] xl:w-[172px] w-[100px] h-[30px]  border-[0.8px] border-[#DC4A2D]">
                <div>
                  <Bin />
                </div>
                <div className="xl:text-[16px] text-[10px]">Delete Job</div>
              </div>

              <div className="bg-[#DC4A2D] gap-3 flex justify-center items-center text-white rounded-[8px] xl:h-[46px] xl:w-[172px] w-[100px] h-[30px] border-[2px] border-[#FED3CA]">
                <div>
                  <Pen />
                </div>
                <div className="xl:text-[16px] text-[10px]">Edit Job</div>
              </div>
            </div>

            <div className="flex flex-col gap-8 justify-center w-full py-10  items-center">
              <div className="flex justify-between w-full border-b pb-2 border-b-gray-200 items-center">
                <div className="flex justify-center gap-3">
                <div className="flex gap-2">
                  <Applicant />
                </div>
                <div className="text-[#4F4F4F] font-[500] text-[9px] xl:text-[16px] leading-[21px]">
                  Applicants
                </div>
                </div>
             <div className="font-[600] text-[9px] xl:text-[20px] leading-[27px]">
             400
             </div>
              </div>

      


              <div className="flex justify-between w-full border-b pb-2 border-b-gray-200 items-center">
                <div className="flex justify-center gap-3">
                <div className="flex gap-2">
                  <Match />
                </div>
                <div className="text-[#4F4F4F] font-[500] text-[9px] xl:text-[16px] leading-[21px]">
                Matches
                </div>
                </div>
             <div className="font-[600] text-[10px] xl:text-[20px] leading-[27px]">
             100
             </div>
              </div>


              <div className="flex justify-between w-full border-b pb-2 border-b-gray-200 items-center">
                <div className="flex justify-center gap-3">
                <div className="flex gap-2">
                  <Message />
                </div>
                <div className="text-[#4F4F4F] font-[500] text-[9px] xl:text-[16px] leading-[21px]">
                Messages
                </div>
                </div>
             <div className="font-[600] text-[10px] xl:text-[20px] leading-[27px]">
             147
             </div>
              </div>

              <div className="flex justify-between w-full border-b pb-2 border-b-gray-200 items-center">
                <div className="flex justify-center gap-3">
                <div className="flex gap-2">
                  <Eye />
                </div>
                <div className="text-[#4F4F4F] font-[500] text-[9px] xl:text-[16px] leading-[21px]">
                Views
                </div>
                </div>
             <div className="font-[600] text-[10px] xl:text-[20px] leading-[27px]">
             800
             </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
