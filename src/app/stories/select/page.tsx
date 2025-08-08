import Header, {HeaderClearance} from "@/src/components/header";
import ButtonContainer from "@/src/components/button_container";
import MediaEntry from "@/src/components/media_entry";

export default function StoriesSelect() {
  return (
    <main>

        <Header back_link="/cjscreations"/>

        <HeaderClearance/>

        <ButtonContainer>

          {/* Novels */}

          <p className="text-5xl sm:text-5xl text-main-orange font-bold opacity-75"> NOVELS </p>

          <MediaEntry 
            type="story" 
            image="rising_phoenix_cover" 
            title="WRATH OF THE RISING PHOENIX: A PISAY STORY" 
            genres="Action, Thriller, Mystery, Drama" 
            description="Four students team up to unravel the sinister plans of a shadow organization deep within Philippine Science High School. Witness a slew of bombastic action and spy thrills unfold on the page as our heroes learn what it truly means to be an iskolar ng bayan." 
            page_link="/stories/rising_phoenix#chapter=1"
          />

          {/* Short Stories */}

          <p className="text-5xl sm:text-5xl text-main-orange font-bold opacity-75 mt-5"> SHORT STORIES </p>

          <MediaEntry 
            type="story" 
            image="golden_tears_cover" 
            title="FIVE NIGHTS AT FREDDY'S: GOLDEN TEARS" 
            genres="Drama, Horror" 
            description="Two years after losing their youngest in the Bite of '83, the Afton family remains ravaged by grief and guilt. As they reach their breaking point, the vengeful spirit of Golden Freddy reawakens - eager to hunt them down. Siblings Michael and Elizabeth Afton are forced to go on the run, desperate for safety - and answers." 
            page_link="/stories/golden_tears#chapter=1"
          />

        </ButtonContainer>

        <HeaderClearance/>

        {/* <MoreToCome/> */}

    </main>
    )
}