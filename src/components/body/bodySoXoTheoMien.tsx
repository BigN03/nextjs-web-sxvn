'use client'
import 'moment/locale/vi'
import getSoXoTrucTiepTheoMien from '@/apis/getSoXoTrucTiepTheoMien';
import moment from 'moment';
import { useEffect, useState } from 'react';
import Image from "next/image";
import { Datepicker } from "flowbite-react";

export default function BodySoXoTheoMien({ locate }: { locate: string }) {
  const [date, setDate] = useState(moment().format("DD-MM-YYYY"));
  const [data, setData] = useState<any>(undefined);
  const [dOW, setDOW] = useState(moment().format("dddd"));
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    initData()
  }, [date])

  const initData = async () => {
    setIsLoading(true);
    const res = await getSoXoTrucTiepTheoMien(locate, date);
    setIsLoading(false);
    setDOW(moment(date, "DD-MM-YYYY").format("dddd"));
    setData(res);
  }
  const THeadLocation = () => {
    if (data) {
      return data.kqsx.locations.map((item: string, keys: number) => {
        return (
          <th key={"1" + keys} className='text-center border border-neutral-300'>
            {item}
          </th>
        )
      })
    }
    return <></>
  }

  const THeadCode = () => {
    if (data) {
      return data.kqsx.tiketTypes.map((item: string, keys: number) => {
        return (
          <th key={"2" + keys} className='text-center border border-neutral-300'>
            {item}
          </th>
        )
      })
    }
    return <></>
  }

  const TBodyGiai8 = () => {
    if (data) {
      return data.kqsx.giai_tam.map((item: string, keys: number) => {
        return (
          <td key={"3" + keys} className='text-center text-2xl text-red-600 font-bold border border-neutral-300'>
            {item}
          </td>
        )
      })
    }
    return <></>
  }
  const TBodyGiai7 = () => {
    if (data) {
      return data.kqsx.giai_bay.map((item: string, keys: number) => {
        return (
          <td key={"4" + keys} className='text-center border border-neutral-300 text-2xl font-bold'>
            {item}
          </td>
        )
      })
    }
    return <></>
  }
  const TBodyGiai6 = () => {
    if (data) {
      return data.kqsx.giai_sau.map((item: string, keys: number) => {
        return (
          <td key={"5" + keys} className='text-center border border-neutral-300 text-2xl font-bold'>
            {
              item.match(/.{1,4}/g)?.map((e, k) => <div key={"a" + k}>{e}</div>)
            }
          </td>
        )
      })
    }
    return <></>
  }
  const TBodyGiai5 = () => {
    if (data) {
      return data.kqsx.giai_nam.map((item: string, keys: number) => {
        return (
          <td key={"6" + keys} className='text-center border border-neutral-300 text-2xl font-bold'>
            {item}
          </td>
        )
      })
    }
    return <></>
  }
  const TBodyGiai4 = () => {
    if (data) {
      return data.kqsx.giai_tu.map((item: string, keys: number) => {
        return (
          <td key={"7" + keys} className='text-center border border-neutral-300 text-2xl font-bold'>
            {item.match(/.{1,5}/g)?.map((e, k) => <div key={"b" + k}>{e}</div>)}
          </td>
        )
      })
    }
    return <></>
  }
  const TBodyGiai3 = () => {
    if (data) {
      return data.kqsx.giai_ba.map((item: string, keys: number) => {
        return (
          <td key={"8" + keys} className='text-center border border-neutral-300 text-2xl font-bold'>
            {item.match(/.{1,5}/g)?.map((e, k) => <div key={"c" + k}>{e}</div>)}
          </td>
        )
      })
    }
    return <></>
  }
  const TBodyGiai2 = () => {
    if (data) {
      return data.kqsx.giai_nhi.map((item: string, keys: number) => {
        return (
          <td key={"9" + keys} className='text-center border border-neutral-300 text-2xl font-bold'>
            {item}
          </td>
        )
      })
    }
    return <></>
  }
  const TBodyGiai1 = () => {
    if (data) {
      return data.kqsx.giai_nhat.map((item: string, keys: number) => {
        return (
          <td key={"10" + keys} className='text-center border border-neutral-300 text-2xl font-bold'>
            {item}
          </td>
        )
      })
    }
    return <></>
  }
  const TBodyGiaiDB = () => {
    if (data) {
      return data.kqsx.giai_dac_biet.map((item: string, keys: number) => {
        return (
          <td key={"11" + keys} className='text-center border border-neutral-300 text-2xl font-bold text-red-600'>
            {item}
          </td>
        )
      })
    }
    return <></>
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
  //button click
  function clickMe() {
    //alert("You clicked me!");
    window.open('https://google.com','_blank');
  }
  return (<>
    <section>
      <div className='container mx-auto relative'>
        <IsLoadingWidget />
        <h2 className='text-center uppercase font-bold text-red-600 my-4'>Kết quả sổ xố Miền Nam {dOW} ngày {date}</h2>
        <div className='grid grid-cols-12 gap-2'>
          <div className='col-span-12 sm:col-span-9 px-2'>
            {
              data.day.length == 0 ?
                <div className='text-center'>Chưa có kết quả</div> :
                <table className='table-auto w-full'>
                  <thead>
                    <tr>
                      <th rowSpan={2} className='border border-neutral-300 px-2'>
                        Giải
                      </th>
                      <THeadLocation />
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