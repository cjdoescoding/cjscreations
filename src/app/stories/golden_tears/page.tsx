"use client";

import Header, {HeaderClearanceChapter} from "@/src/components/header";
import ActButton from "@/src/components/chapter_select/act_button";
import ChapterButton from "@/src/components/chapter_select/chapter_button";
import GoldenTearsChapters from "@/src/app/stories/golden_tears/golden_tears_chapters.json";

import {useState, useEffect} from 'react';

export default function GoldenTearsChapterSelect() {

    type Chapter = {
        number: number;
        title: string;
        content: string;
    };

    const chapters: Chapter[] = GoldenTearsChapters;

    const [selectedChapterIndex, setSelectedChapterIndex] = useState(0);

    // for debug purposes
    // console.log(selectedActIndex)
    // console.log(selectedChapterIndex)

    // handle links with hash fragments (chapters)
    useEffect(() => {
    function handleHashChange() {
        const hash = window.location.hash;
        const match = hash.match(/chapter=(\d+)/);

        if (match) {
        const chapterFromHash = parseInt(match[1], 10) - 1;
        if (!isNaN(chapterFromHash)) {
            setSelectedChapterIndex(chapterFromHash);
        }
        }
    }

    // Call once on mount to load initial hash
    handleHashChange();

    // Listen for user-initiated hash changes
    window.addEventListener("hashchange", handleHashChange);

    return () => {
        window.removeEventListener("hashchange", handleHashChange);
    };
    }, []);

    // prev/next button handlers
    const handlePrevClick = () => {
        if (selectedChapterIndex > 0) {
            setSelectedChapterIndex(selectedChapterIndex - 1);
        }
    }

    const handleNextClick = () => {
        if (selectedChapterIndex < 12) {
            setSelectedChapterIndex(selectedChapterIndex + 1);
        }
    }
    
    // display screen
  return (
    <main>

        <Header back_link="/cjscreations/stories/select"/>

        <HeaderClearanceChapter/>

        <div className="fixed flex-row bg-black font-[volter] mt-[-1] w-full">
            <div className="bg-springlock-gold w-auto h-auto text-xl text-center font-bold leading-5 tracking-widest border-black border-t-5 p-0.5 mb-1"> Five Nights at Freddy's: Golden Tears </div>

            <div className="fixed flex w-full h-auto text-xl border-hatted-purple border-t-5 border-b-5">

                {/* Chapter Select */}
                <div className="flex-grow justify-center overflow-y-auto bg-black">

                    <div className="flex flex-wrap justify-center">

                        {/* Prev Button */}
                        {(() => {
                            if (selectedChapterIndex !== 0) {
                                return <ChapterButton 
                                chapter_number={selectedChapterIndex + 1} 
                                prev={true} 
                                handle_chapter_click={handlePrevClick}
                                which_story="Golden Tears"
                                />;
                            }
                        })()} 

                        {/* Chapter Buttons */}
                        {(() => {
                        return Array.from({ length: 13 }, (_, i) => {
                            const chapterNumber = i + 1;
                            return (
                            <ChapterButton
                                key={chapterNumber}
                                current_chapter={selectedChapterIndex + 1}
                                chapter_number={chapterNumber}
                                handle_chapter_click={setSelectedChapterIndex}
                                which_story="Golden Tears"
                            />
                            );
                        });
                        })()}

                        {/* Next Button */}
                        {(() => {
                            if (selectedChapterIndex !== 12) {
                                return <ChapterButton 
                                chapter_number={selectedChapterIndex + 3} 
                                next={true} 
                                handle_chapter_click={handleNextClick}
                                which_story="Golden Tears"
                                />;
                            }
                        })()} 

                    </div>
                </div>

            </div>

        </div>

        <div className="font-[volter] w-full text-reading-white text-center font-bold
                        text-3xl sm:text-5xl pl-5 pr-5 mt-45 sm:mt-30 mb-10"> {`Chapter ${selectedChapterIndex + 1}: ${chapters[selectedChapterIndex]?.title ?? "Invalid Chapter"}`} </div>

        

        <div className="font-[volter] pl-5 pr-5 sm:pl-20 sm:pr-20 w-full text-reading-white text-lg leading-6 mt-10 whitespace-pre-line"> 
            {chapters[selectedChapterIndex]?.content ?? "This is not a valid chapter.".split('\n').map((line: string, i: number) => (
                <p key={i}>{line}</p>
            ))}
        </div>


    </main>
  )
}