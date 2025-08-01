import Link from "next/link";

export default function MainMenuButton({button_image, button_text, page_link}: {button_image: string, button_text: string, page_link: string}) {
    return (
        <Link href={page_link}>
            <div className="relative w-full bg-black border-solid border-7 border-main-yellow 
                            transition-transform duration-500 ease-in-out hover:scale-105"> 
              <p className="relative text-5xl text-main-orange text-center text-shadow-xl font-bold p-4 z-10"> {button_text} </p>    
              <div className="absolute inset-0 z-0">
                <img src={`/images/${button_image}.png`} className="w-full h-full object-cover opacity-50"/>
              </div> 
            </div>
        </Link>
    )
}