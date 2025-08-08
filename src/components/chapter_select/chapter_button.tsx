"use client";

import Link from "next/link";

export default function ChapterButton(
    {chapter_number, current_chapter, prev = false, next = false, handle_chapter_click, which_story}: 
    {chapter_number?: number, current_chapter?: number, already_here?: boolean, prev?: boolean, next?: boolean, handle_chapter_click: (index: number) => void, which_story: string}){

    function handleChapterClick() {
        handle_chapter_click(Number(chapter_number) - 1)
    }

    if (current_chapter === chapter_number){
        return (
            <div className={`w-10 h-auto p-1 font-bold text-center 
            ${which_story === "Rising Phoenix" ? "bg-blue-fire text-black" : 
              which_story === "Golden Tears" ? "bg-hatted-purple text-black" : ""}`}> {chapter_number} </div>
        )
    }
    else {     
        return (
            <Link
                href={prev === true || next === true ? `#chapter=${Number(chapter_number) - 1}` : `#chapter=${Number(chapter_number)}`}
                onClick={handleChapterClick}
                >
                <div className={`w-10 h-auto p-1 font-bold text-center 
                    ${which_story === "Rising Phoenix" ? "bg-black text-blue-fire hover:bg-blue-fire hover:text-black" :
                      which_story === "Golden Tears" ? "bg-black text-hatted-purple hover:bg-hatted-purple hover:text-black" : ""
                    }`}> 
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