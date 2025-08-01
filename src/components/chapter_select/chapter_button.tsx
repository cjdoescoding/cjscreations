"use client";

import Link from "next/link";

export default function ChapterButton(
    {chapter_number, current_chapter, prev = false, next = false, handle_chapter_click}: 
    {chapter_number?: number, current_chapter?: number, already_here?: boolean, prev?: boolean, next?: boolean, handle_chapter_click: (index: number) => void}){

    function handleChapterClick() {
        handle_chapter_click(Number(chapter_number) - 1)
    }

    if (current_chapter === chapter_number){
        return (
            <div className="w-10 h-auto bg-blue-fire p-1 text-black font-bold text-center"> {chapter_number} </div>
        )
    }
    else {     
        return (
            <Link
                href={prev === true || next === true ? `#chapter=${Number(chapter_number) - 1}` : `#chapter=${Number(chapter_number)}`}
                onClick={handleChapterClick}
                >
                <div className="w-10 h-auto bg-black p-1 text-blue-fire hover:bg-blue-fire hover:text-black font-bold text-center"> 
                    {(() => {
                        if (prev === true) {
                        return "◀";
                        } else if (next === true) {
                        return "▶";
                        } else {
                        return chapter_number;
                        }
                    })()}   
                </div>
            </Link>
        )
    }
}