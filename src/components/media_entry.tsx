import Image from "next/image";
import Link from "next/link";

export default function MediaEntry({type, image, title, genres, description, page_link, total_time = ""}: {type: string, image: string, title: string, genres: string, description?: string, page_link: string, total_time?: string}){
    return (
        <Link href={page_link}>
            <div className="flex flex-col md:flex-row w-full bg-black border-7 border-main-yellow
                            transition-transform duration-500 ease-in-out hover:scale-105">

              {/* Story Pic */}
              <div className="w-full md:w-auto h-full flex justify-center p-2">
                <img src={`/cjscreations/images/${image}.png`} className="w-80 h-auto" alt="Logo"/>
              </div>

              {/* Description */}
              <div className="w-full p-4">
                <p className="text-4xl text-main-orange font-bold">
                  {title}
                </p>
                <p className="text-lg text-main-orange mt-2 leading-5">
                  <b> Genre: </b> {genres}
                </p>
                
                {(() => {
                  if (total_time !== "") {
                    return (<p className="text-lg text-main-orange mt-2 leading-5">  
                        {(() => {
                          if (type === "story") {
                          return <b> Reading Time: </b>;
                          } else if (type === "music") {
                          return <b> Duration: </b>;
                          } else if (type === "game") {
                          return <b> Playtime: </b>;
                          } else {
                          return <b> Time: </b>;
                          }
                        })()}
                       
                       {`${total_time}`}
                        </p>
                      )
                  }
                })()} 
                
                <p className="text-lg text-main-orange mt-2 leading-5">
                    {(() => {
                        if (type === "story") {
                        return <b> Synopsis: </b>;
                        } else if (type === "game") {
                        return <b> Premise: </b>;
                        } else {
                        return <b> Description: </b>;
                        }
                    })()}     
                  {description}
                </p>
              </div>
              
            </div>
          </Link>
    )
}