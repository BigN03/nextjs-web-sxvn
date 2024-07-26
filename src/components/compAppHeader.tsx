import moment from "moment";
import Image from "next/image";
import 'moment/locale/vi'
export default function CompAppHeader() {
  return <header className="container mx-auto py-2">
    <div className="flex flex-row items-center px-3">
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/logo.svg"
        alt="Next.js Logo"
        width={100}
        height={10}
        priority
      />
      <div className="flex-1 h-full">
        <div className="flex flex-col w-full h-full justify-between items-end">
          <div>Hôm nay: {moment().format("dddd")} ngày {moment().format("DD/MM/YYYY")}</div>
          <h1>Sổ xố nhanh mền Nam</h1>
        </div>
      </div>
    </div>

  </header>
}