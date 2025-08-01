"use client";

import Link from "next/link";

export default function ActButton({act_number, current_act, display_act, handle_act_click, change_chapter}: 
        {act_number: number, current_act: number, display_act: string, handle_act_click: (index: number) => void, change_chapter: (index: number) => void}){

    function handleActClick() {
        handle_act_click(Number(act_number))
        if(act_number === 0){
            change_chapter(0)
        } else if(act_number === 1){
            change_chapter(8)
        } else if(act_number === 2){
            change_chapter(17)
        } else if(act_number === 3){
            change_chapter(26)
        }
    }

    if (act_number === current_act){
        return (
            <div className="w-11 bg-blue-fire p-1 text-black font-bold text-center"> {display_act} </div>
        )
    }
    else {
        return (
            <Link href={
                act_number === 0 ? "#chapter=1" : act_number === 1 ? "#chapter=9" : act_number === 2 ? "#chapter=18" : act_number === 3 ? "#chapter=27" : ""
                } onClick={handleActClick}>
                <div className="w-11 bg-black p-1 text-blue-fire hover:bg-blue-fire hover:text-black font-bold text-center"> {display_act} </div>
            </Link>
        )
    }
}