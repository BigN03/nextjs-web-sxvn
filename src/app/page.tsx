import Comp from "@/components";

export default function Home() {

  return (
    <div className="flex min-h-screen flex-col items-center justify-between ">

      <Comp.CompAppHeader />
      <Comp.CompAppNav />
      <main className="flex-1 flex-col w-full">
        <Comp.CompBody.BodySoXoTheoMien locate="mien-nam"/>
      </main>
      <Comp.CompAppFooter />
    </div>

  );
}