'use client'
import Link from "next/link";

export default function CompAppNav() {
  return (<nav className="bg-red-600">
    <div className="container mx-auto" >
      <div className="flex flex-row flex-wrap gap-4 px-2">
        <h6 >
          <Link className="text-white font-bold hover:opacity-50" href="/">SỔ XỐ MIỀN BẮC</Link>
        </h6>
        <h6>
          <Link className="text-white font-bold hover:opacity-50" href="/">SỔ XỐ MIỀN TRUNG</Link>
        </h6>
        <h6>
          <Link className="text-white font-bold hover:opacity-50" href="/">SỔ XỐ MIỀN NAM</Link>
        </h6>
        <h6>
          <Link className="text-white font-bold hover:opacity-50" href="/">SỔ XỐ TỈNH</Link>
        </h6>
        <h6>
          <Link className="text-white font-bold hover:opacity-50" href="/">SỔ XỐ MEGA 6/45</Link>
        </h6>
        <h6>
          <Link className="text-white font-bold hover:opacity-50" href="/">SỔ XỐ POWER 6/55</Link>
        </h6>
        <h6>
          <Link className="text-white font-bold hover:opacity-50" href="/">SỔ XỐ MAX 3D</Link>
        </h6>
        <h6>
          <Link className="text-white font-bold hover:opacity-50" href="/">SỔ XỐ MAX 3DPRO</Link>
        </h6>
        <h6>
          <Link className="text-white font-bold hover:opacity-50" href="/">SỔ XỐ THẦN TÀI</Link>
        </h6>
        <h6>
          <Link className="text-white font-bold hover:opacity-50" href="/">SỔ XỐ ĐIỆN TOÁN 6X36</Link>
        </h6>
        <h6>
          <Link className="text-white font-bold hover:opacity-50" href="/">SỔ XỐ ĐIỆN TOÁN 123</Link>
        </h6>
        {/* <h6>
          <Link className="text-white font-bold hover:opacity-50" href="/">SỚ ĐẦU ĐUÔI MIỀN BẮC</Link>
        </h6>
        <h6>
          <Link className="text-white font-bold hover:opacity-50" href="/">SỚ ĐẦU ĐUÔI MIỀN TRUNG</Link>
        </h6>
        <h6>
          <Link className="text-white font-bold hover:opacity-50" href="/">SỚ ĐẦU ĐUÔI MIỀN NAM</Link>
        </h6>
        <h6>
          <Link className="text-white font-bold hover:opacity-50" href="/">THỐNG KÊ LÔ TÔ MIỀN</Link>
        </h6>
        <h6>
          <Link className="text-white font-bold hover:opacity-50" href="/">THỐNG KÊ LÔ TÔ TỈNH</Link>
        </h6>
        <h6>
          <Link className="text-white font-bold hover:opacity-50" href="/">THỐNG KÊ GAN CỰC ĐẠI MIỀN</Link>
        </h6>
        <h6>
          <Link className="text-white font-bold hover:opacity-50" href="/">THỐNG KÊ GAN CỰC ĐẠI TỈNH</Link>
        </h6>
        <h6>
          <Link className="text-white font-bold hover:opacity-50" href="/">THỐNG KÊ TẦN SUẤT MIỀN</Link>
        </h6>
        <h6>
          <Link className="text-white font-bold hover:opacity-50" href="/">THỐNG KÊ TẦN SUẤT TỈNH</Link>
        </h6> */}
      </div>
    </div>
  </nav>)
}