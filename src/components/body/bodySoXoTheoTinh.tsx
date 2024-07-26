'use client'
import 'moment/locale/vi'
import getSoXoTrucTiepTheoTinh from '@/apis/getSoXoTrucTiepTheoTinh';
import moment from 'moment';
import { useEffect, useState } from 'react';
import Image from "next/image";
import { Datepicker } from "flowbite-react";

export default function BodySoXoTheoTinh() {
  const [date, setDate] = useState(moment().format("DD-MM-YYYY"));
  const [data, setData] = useState<any>(undefined);
  const [dOW, setDOW] = useState(moment().format("dddd"));
  const [isLoading, setIsLoading] = useState(false);
  const [locate, setLocate] = useState("an-giang")
  useEffect(() => {
    initData()
  }, [date, locate])

  const initData = async () => {
    setIsLoading(true);
    const res = await getSoXoTrucTiepTheoTinh(locate, date);
    setIsLoading(false);
    setDOW(moment(date, "DD-MM-YYYY").format("dddd"));
    setData(res);
  }

  const THeadCode = () => {
    if (data) {
      return <th colSpan={999} className='text-center border border-neutral-300'>
        {data.kqsx.tiketTypes}
      </th>
    }
    return <></>
  }

  const TBodyGiai8 = () => {
    if (data) {
      return <td className='text-center text-2xl text-red-600 font-bold border border-neutral-300'>
        {data.kqsx.giai_tam}
      </td>
    }
    return <></>
  }
  const TBodyGiai7 = () => {
    if (data) {
      return <td className='text-center border border-neutral-300 text-2xl font-bold'>
        {data.kqsx.giai_bay}
      </td>
    }
    return <></>
  }
  const TBodyGiai6 = () => {
    if (data.kqsx.giai_sau) {
      return <td className='text-center border border-neutral-300 text-2xl font-bold'>
        {
          data.kqsx.giai_sau.match(/.{1,4}/g)?.map((e: string, k: number) => <div key={"a" + k}>{e}</div>)
        }
      </td>
    }
    return <></>
  }
  const TBodyGiai5 = () => {
    if (data) {
      return <td className='text-center border border-neutral-300 text-2xl font-bold'>
        {data.kqsx.giai_nam}
      </td>
    }
    return <></>
  }
  const TBodyGiai4 = () => {
    if (data.kqsx.giai_tu) {
      return <td className='text-center border border-neutral-300 text-2xl font-bold'>
        {data.kqsx.giai_tu.match(/.{1,5}/g)?.map((e: string, k: number) => <div key={"b" + k}>{e}</div>)}
      </td>
    }
    return <></>
  }
  const TBodyGiai3 = () => {
    if (data.kqsx.giai_ba) {
      return <td className='text-center border border-neutral-300 text-2xl font-bold'>
        {data.kqsx.giai_ba.match(/.{1,5}/g)?.map((e: string, k: number) => <div key={"c" + k}>{e}</div>)}
      </td>
    }
    return <></>
  }
  const TBodyGiai2 = () => {
    if (data) {
      return <td className='text-center border border-neutral-300 text-2xl font-bold'>
        {data.kqsx.giai_nhi}
      </td>
    }
    return <></>
  }
  const TBodyGiai1 = () => {
    if (data) {
      return <td className='text-center border border-neutral-300 text-2xl font-bold'>
        {data.kqsx.giai_nhat}
      </td>
    }
    return <></>
  }
  const TBodyGiaiDB = () => {
    if (data) {
      return <td className='text-center border border-neutral-300 text-2xl font-bold text-red-600'>
        {data.kqsx.giai_dac_biet}
      </td>
    }
    return <></>
  }
  const theme = {
  blue: {
    default: "#3f51b5",
    hover: "#283593",
  },
  pink: {
    default: "#e91e63",
    hover: "#ad1457",
  },
};

function clickMe() {
  //alert("You clicked me!");
  window.open('https://google.com','_blank');
}

  if (!data) {
    return <div></div>
  }

  const IsLoadingWidget = () => {
    if (isLoading) {
      return <div className='fixed top-0 left-0 w-full h-full'>
        <div className='flex flex-col items-center justify-center w-full h-full bg-black/30'>
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/logo.svg"
            alt="Next.js Logo"
            width={100}
            height={10}
            priority
          />
        </div>
      </div>
    }
    return <></>
  }
  return (<>
    <section>
      <div className='container mx-auto relative'>
        <IsLoadingWidget />
        <h2 className='text-center uppercase font-bold text-red-600 my-4'>Kết quả sổ xố {locate} {dOW} ngày {date}</h2>
        <div className='grid grid-cols-12 gap-2'>
          <div className='col-span-12 sm:col-span-9 px-2'>
            {
              !data.kqsx.tiketTypes ?
                <div className='text-center'>Chưa có kết quả</div> :
                <table className='table-auto w-full'>
                  <thead>
                    <tr>
                      <th rowSpan={2} className='border border-neutral-300 px-2'>
                        Giải
                      </th>
                    </tr>
                    <tr>
                      <THeadCode />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='text-center border border-neutral-300'>
                        8
                      </td>
                      <TBodyGiai8 />
                    </tr>
                    <tr>
                      <td className='text-center border border-neutral-300'>
                        7
                      </td>
                      <TBodyGiai7 />
                    </tr>
                    <tr>
                      <td className='text-center border border-neutral-300'>
                        6
                      </td>
                      <TBodyGiai6 />
                    </tr>
                    <tr>
                      <td className='text-center border border-neutral-300'>
                        5
                      </td>
                      <TBodyGiai5 />
                    </tr>
                    <tr>
                      <td className='text-center border border-neutral-300'>
                        4
                      </td>
                      <TBodyGiai4 />
                    </tr>
                    <tr>
                      <td className='text-center border border-neutral-300'>
                        3
                      </td>
                      <TBodyGiai3 />
                    </tr>
                    <tr>
                      <td className='text-center border border-neutral-300'>
                        2
                      </td>
                      <TBodyGiai2 />
                    </tr>
                    <tr>
                      <td className='text-center border border-neutral-300'>
                        1
                      </td>
                      <TBodyGiai1 />
                    </tr>
                    <tr>
                      <td className='text-center border border-neutral-300'>
                        ĐB
                      </td>
                      <TBodyGiaiDB />
                    </tr>
                  </tbody>
                  
                </table>
                
            }

          </div>
          <div className='col-span-12 sm:col-span-3'>
            <select onChange={e => setLocate(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <optgroup label='Miền nam'>
                <option value={'an-giang'}>An Giang</option>
                <option value={'bac-lieu'}>Bạc Liêu</option>
                <option value={'ben-tre'}>Bến Tre</option>
                <option value={'binh-duong'}>Bình Dương</option>
                <option value={'binh-phuoc'}>Bình Phước</option>
                <option value={'binh-thuan'}>Bình thuận</option>
                <option value={'ca-mau'}>Cà Mau</option>
                <option value={'can-tho'}>Cần thơ</option>
                <option value={'da-lat'}>Đà Lạt</option>
                <option value={'dong-nai'}>Đồng Nai</option>
                <option value={'dong-thap'}>Đồng Nai</option>
                <option value={'hau-giang'}>Hậu Giang</option>
                <option value={'kien-giang'}>Kiên Giang</option>
                <option value={'long-an'}>Long An</option>
                <option value={'soc-trang'}>Sóc Trăng</option>
                <option value={'tay-ninh'}>Tây Ninh</option>
                <option value={'tien-giang'}>Tiền Giang</option>
                <option value={'tp-hcm'}>TP HCM</option>
                <option value={'tra-vinh'}>Trà Vinh</option>
                <option value={'vinh-long'}>Vĩnh Long</option>
                <option value={'vung-tau'}>Vũng Tàu</option>
              </optgroup>
              <optgroup label='Miền Trung'>
                <option value={'binh-dinh'}>Bình Định</option>
                <option value={'da-nang'}>Đà Nẵng</option>
                <option value={'dak-lak'}>Đak Lak</option>
                <option value={'gia-lai'}>Gia Lai</option>
                <option value={'khanh-hoa'}>Khánh Hòa</option>
                <option value={'kon-tum'}>Kon Tum</option>
                <option value={'ninh-thuan'}>Ninh Thuận</option>
                <option value={'phu-yen'}>Phú Yên</option>
                <option value={'quang-binh'}>Quảng Bình</option>
                <option value={'quang-nam'}> Quảng Nam </option>
                <option value={'quang-ngai'}>Quảng Ngãi</option>
                <option value={'quang-tri'}>Quảng Trị</option>
                <option value={'thua-thien-hue'}>Thừa Thiên Huế</option>
              </optgroup>
              <optgroup label='Miền Bắc'>
                <option value={'bac-ninh'}>Bắc Ninh</option>
                <option value={'ha-noi'}>Hà Nội</option>
                <option value={'hai-phong'}>Hải Phòng</option>
                <option value={'nam-dinh'}>Nam Định</option>
                <option value={'quang-ninh'}>Quảng Ninh</option>
                <option value={'thai-binh'}>Thái Bình</option>
              </optgroup>
            </select>
            <center>
            <Datepicker
              showClearButton={false}
              onSelectedDateChanged={(date) => setDate(moment(new Date(date)).format("DD-MM-YYYY"))}
              inline
              autoHide={false}
              language="Vi-vi"
              showTodayButton={false}
              theme={{
                views: {
                  decades: {
                    items: {
                      item: {
                        selected: "bg-cyan-700 text-black hover:bg-cyan-600"
                      }
                    }
                  }
                }
              }}
              labelTodayButton="Hôm nay"
            />
            </center>
            <div id="links">
            <ul>
              <h1 style={{color: "red", marginTop : 20}} >
                <a href="http://www.domain.com/link1" >#Kết quả xổ số miền Bắc</a> <a href="http://www.domain.com/link1" >#Kết quả xổ số miền Nam</a><a href="http://www.domain.com/link1" >#Kết quả xổ số Bạc Liêu</a>
                <a href="http://www.domain.com/link1" >#Kết quả xổ số Bến Tre</a> <a href="http://www.domain.com/link1" >#Kết quả xổ số Bình Dương</a> <a href="http://www.domain.com/link1" >#Kết quả xổ số Bình Phước</a>
                <a href="http://www.domain.com/link1" >#Kết quả xổ số Bình Thuận</a> <a href="http://www.domain.com/link1" >#Kết quả xổ số Cà Mau</a> <a href="http://www.domain.com/link1" >#Kết quả xổ số Cần Thơ</a> <a href="http://www.domain.com/link1" >#Kết quả xổ số Đà Lạt</a>
                <a href="http://www.domain.com/link1" >#Kết quả xổ số Đồng Nai</a><a href="http://www.domain.com/link1" >#Kết quả xổ số Đồng Thá</a><a href="http://www.domain.com/link1" >#Kết quả xổ số Bình Thuận</a>
              </h1>

            </ul>
            </div>
          </div>
          
        </div>
        <center><button style={{backgroundColor: "red", color: "white", fontSize : 20, borderRadius: 8, height : 60, width : 170, marginTop : 20, marginBottom : 20}} onClick={clickMe}>  CHƠI SỐ NGAY!  </button></center>
      </div>
    </section>
  </>)
}