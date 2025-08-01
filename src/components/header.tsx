import Link from "next/link";
import Image from "next/image";
import BackButton from "@/src/components/back_button";

export default function Header({back_link}: {back_link: string}) {
    return (
        <div className="fixed flex justify-between z-999 w-full bg-main-orange h-16">
            <div className="flex items-center">
              <Link className="flex items-center" href="/">
                <Image className="w-16 h-16 p-2 float-left" width={300} height={300} src="/images/logo_black.png" alt="C.J.'s Creations"/>
                <div className="inline-block align-middle leading-none text-3xl text-center font-bold"> C.J.&apos;S CREATIONS </div>
              </Link>
            </div>
            <BackButton back_link={back_link}/>
        </div>
    )
}

export function HeaderClearance() {
    return (
        <div className="w-full h-20"></div>
    )
}

export function HeaderClearanceChapter() {
    return (
        <div className="w-full h-16"></div>
    )
}