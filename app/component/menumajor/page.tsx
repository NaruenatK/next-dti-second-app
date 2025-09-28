import Link from "next/link";

export default function Menubar() {
  return (
    <>
      <div className="flex justify-center gap-4 py-6 bg-blue-700 text-white">
        <Link href="/major">หน้าหลัก</Link>
        <Link href="/major/account">ACCOUNT</Link>
        <Link href="/major/dm">DM</Link>
        <Link href="/major/dti">DTI</Link>
        <Link href="/major/marketning">MARKETING</Link>
      </div>
    </>
  );
}
