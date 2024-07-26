'use client'
import 'moment/locale/vi'
import getSoXoMax3DPro from "@/apis/getSoXoMax3DPro";
import moment from "moment";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Datepicker } from "flowbite-react";

export default function bodySoXoMax3DPro() {
  const [date, setDate] = useState(moment().format("DD-MM-YYYY"));
  const [data, setData] = useState<any>(undefined);
  const [dOW, setDOW] = useState(moment().format("dddd"));
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    initData()
  }, [date])
  const initData = async () => {
    setIsLoading(true);
    const res = await getSoXoMax3DPro(date);
    setIsLoading(false);
    setDOW(moment(date, "DD-MM-YYYY").format("dddd"));
    setData(res);
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
  function clickMe() {
    //alert("You clicked me!");
    window.open('https://google.com','_blank');
  }
  if (!data) {
    return <div></div>
  }

  const BoardValue = () => {
    let arrayDataWidget = [];
    const left = [
      "2 tỷ",
      "30 triệu",
      "10 triệu",
      "4 triệu",
      "1 triệu",
      "100.000",
      "40.000",
      "400tr"
    ]
    if (data.boards.db_nhat_nhi_ba.length > 0) {
      for (let i = 0; i < data.boards.db_nhat_nhi_ba.length; i++) {
        const element = data.boards.db_nhat_nhi_ba[i];
        arrayDataWidget.push(
        
          <tr key={"row" + i}>
            <td className='border border-neutral-300 px-2'>
              {left[i]}
            </td>
            <td className='border border-neutral-300 px-2'>
              {element.map((item: string, index: number) => <div key={index}>{item}</div>)}
            </td>
          </tr>
        )
      }
      return arrayDataWidget;
    }
    return <></>
  }

  return (
    <section>
      <div className='container mx-auto relative'>
        <IsLoadingWidget />
        <h2 className='text-center uppercase font-bold text-red-600 my-4'>Kết quả sổ xố Miền Nam {dOW} ngày {date}</h2>
        <div className='grid grid-cols-12 gap-2'>
          <div className='col-span-12 sm:col-span-9 px-2'>
            <h3> {data.kyve}</h3>
            <table className='table-auto w-full'>
              <thead>
                <tr>
                  <th className='border border-neutral-300 px-2'>
                    Giải
                  </th>
                  <th className='border border-neutral-300 px-2'>
                    Số quay thưởng
                  </th>
                </tr>
              </thead>
              <tbody>
                <BoardValue />
              </tbody>
            </table>
            <center><button style={{backgroundColor: "red", color: "white", fontSize : 20, borderRadius: 8, height : 60, width : 170, marginTop : 20, marginBottom : 20}} onClick={clickMe}>  CHƠI SỐ NGAY!  </button></center>
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
                      <a href="http://www.domain.com/link1" >#Kết quả xổ số Đồng Nai</a><a href="http://www.domain.com/link1" >#Kết quả xổ số Đồng Thá</a><a href="http://www.domain.com/link1" >#Kết quả xổ số Bình Thuận</a> <a href="http://www.domain.com/link1" >#Kết quả xổ số Bạc Liêu</a>
                      <a href="http://www.domain.com/link1" >#Kết quả xổ số Bến Tre</a> <a href="http://www.domain.com/link1" >#Kết quả xổ số Bình Dương</a> <a href="http://www.domain.com/link1" >#Kết quả xổ số Bình Phước</a>
                      <a href="http://www.domain.com/link1" >#Kết quả xổ số Bình Thuận</a> <a href="http://www.domain.com/link1" >#Kết quả xổ số Cà Mau</a> <a href="http://www.domain.com/link1" >#Kết quả xổ số Cần Thơ</a> <a href="http://www.domain.com/link1" >#Kết quả xổ số Đà Lạt</a>
                      <a href="http://www.domain.com/link1" >#Kết quả xổ số Đồng Nai</a><a href="http://www.domain.com/link1" >#Kết quả xổ số Đồng Thá</a><a href="http://www.domain.com/link1" >#Kết quả xổ số Bình Thuận</a>
                    </h1>

                  </ul>
                  </div>
          </div>
        </div>
      </div>
    </section>
  )
}