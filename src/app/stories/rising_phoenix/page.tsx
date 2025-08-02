"use client";

import Header, {HeaderClearanceChapter} from "@/src/components/header";
import ActButton from "@/src/components/chapter_select/act_button";
import ChapterButton from "@/src/components/chapter_select/chapter_button";
import RisingPhoenixActs from "@/src/app/stories/rising_phoenix/rising_phoenix_chapters.json";

import {useState, useEffect} from 'react';

export default function RisingPhoenixChapterSelect() {

    type Chapter = {
        number: number;
        title: string;
        content: string;
    };

    const chapters: Chapter[] = RisingPhoenixActs;
    const act_boundaries: {start: number, end: number}[] = [
        {start: 0, end: 7},
        {start: 8, end: 16},
        {start: 17, end: 25},
        {start: 26, end: 34}
    ];

    const [selectedActIndex, setSelectedActIndex] = useState(0);
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
            const actIndex = act_boundaries.findIndex(
            (a) => chapterFromHash >= a.start && chapterFromHash <= a.end
            );
            if (actIndex !== -1) {
            setSelectedActIndex(actIndex);
            }
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
            if (act_boundaries[selectedActIndex].start === selectedChapterIndex) {
                setSelectedActIndex(selectedActIndex - 1);
            }
            setSelectedChapterIndex(selectedChapterIndex - 1);
        }
    }

    const handleNextClick = () => {
        if (selectedChapterIndex < 34) {
            if (act_boundaries[selectedActIndex].end === selectedChapterIndex) {
                setSelectedActIndex(selectedActIndex + 1);
            }
            setSelectedChapterIndex(selectedChapterIndex + 1);
        }
    }
    
    // display screen
  return (
    <main>

        <Header back_link="/cjscreations/stories/select"/>

        <HeaderClearanceChapter/>

        <div className="fixed flex-row bg-black font-[centurybold] mt-[-1] w-full">
            <div className="bg-maroon-fire w-auto h-auto text-xl text-center font-bold leading-5 tracking-widest border-black border-t-5 p-0.5 mb-1"> WRATH OF THE RISING PHOENIX: A PISAY STORY </div>

            <div className="fixed flex w-full h-auto text-xl border-blue-fire border-b-5">

                {/* Act Select */}
                <div className="w-2/5 bg-black">
                    <div className="w-full bg-blue-fire text-black text-center font-bold text-xl"> ACT </div>

                    <div className="flex flex-wrap justify-center">

                        <ActButton act_number={0} 
                        current_act={selectedActIndex} 
                        handle_act_click={setSelectedActIndex} 
                        change_chapter={setSelectedChapterIndex} 
                        display_act="I"/>

                        <ActButton act_number={1} 
                        current_act={selectedActIndex} 
                        handle_act_click={setSelectedActIndex} 
                        change_chapter={setSelectedChapterIndex}
                        display_act="IIA"/>

                        <ActButton act_number={2} 
                        current_act={selectedActIndex} 
                        handle_act_click={setSelectedActIndex} 
                        change_chapter={setSelectedChapterIndex}
                        display_act="IIB"/>

                        <ActButton act_number={3} 
                        current_act={selectedActIndex} 
                        handle_act_click={setSelectedActIndex} 
                        change_chapter={setSelectedChapterIndex}
                        display_act="III"/>

                    </div>
                </div>

                {/* Chapter Select */}
                <div className="flex-grow justify-center overflow-y-auto bg-black">
                    <div className="w-full bg-blue-fire text-black text-center font-bold text-xl"> CHAPTER </div>

                    <div className="flex flex-wrap justify-center">

                        {/* Prev Button */}
                        {(() => {
                            if (selectedChapterIndex !== 0) {
                                return <ChapterButton 
                                chapter_number={selectedChapterIndex + 1} 
                                prev={true} 
                                handle_chapter_click={handlePrevClick}
                                />;
                            }
                        })()} 

                        {/* Chapter Buttons */}
                        {(() => {
                        const { start, end } = act_boundaries[selectedActIndex];
                        return Array.from({ length: end - start + 1 }, (_, i) => {
                            const chapterNumber = start + i + 1;
                            return (
                            <ChapterButton
                                key={chapterNumber}
                                current_chapter={selectedChapterIndex + 1}
                                chapter_number={chapterNumber}
                                handle_chapter_click={setSelectedChapterIndex}
                            />
                            );
                        });
                        })()}

                        {/* Next Button */}
                        {(() => {
                            if (selectedChapterIndex !== 34) {
                                return <ChapterButton 
                                chapter_number={selectedChapterIndex + 3} 
                                next={true} 
                                handle_chapter_click={handleNextClick}
                                />;
                            }
                        })()} 

                    </div>
                </div>

            </div>

        </div>

        <div className="font-[centurybold] w-full text-orange-fire text-center 
                        text-3xl sm:text-5xl pl-5 pr-5 mt-45 sm:mt-30 mb-10"> {`CHAPTER ${selectedChapterIndex + 1}: ${chapters[selectedChapterIndex]?.title ?? "INVALID CHAPTER"}`} </div>

        

        <div className="font-[tnr] pl-5 pr-5 sm:pl-20 sm:pr-20 w-full text-reading-orange text-lg leading-6 mt-10 whitespace-pre-line"> 
            {chapters[selectedChapterIndex]?.content ?? "This is not a valid chapter.".split('\n').map((line: string, i: number) => (
                <p key={i}>{line}</p>
            ))}
        </div>


    </main>
  )
}