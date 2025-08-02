import Image from "next/image";

export default function BackButton({back_link}: {back_link: string}){
    return (
        <div className={`flex float-right ${back_link == "" ? "invisible" : "visible"}
                        transition-transform duration-500 ease-in-out hover:scale-85`}>
            <a className="flex items-center" href={`${back_link}`}>
            <Image className="w-16 h-16 p-2 float-right" src="/cjscreations/images/back_button.png" width={300} height={300} alt="Back"/>
            </a>
        </div>
    )
}