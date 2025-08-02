import Header, {HeaderClearance} from "@/src/components/header";
import ButtonContainer from "@/src/components/button_container";
import MediaEntry from "@/src/components/media_entry";

export default function StoriesSelect() {
  return (
    <main>

        <Header back_link="/cjscreations"/>

        <HeaderClearance/>

        <ButtonContainer>

          <MediaEntry 
            type="story" 
            image="rising_phoenix_cover" 
            title="WRATH OF THE RISING PHOENIX: A PISAY STORY" 
            genres="Action, Thriller, Mystery, Drama" 
            description="Four students team up to unravel the sinister plans of a shadow organization deep within Philippine Science High School. Witness a slew of bombastic action and spy thrills unfold on the page as our heroes learn what it truly means to be an iskolar ng bayan." 
            page_link="/stories/rising_phoenix#chapter=1"
          />

        </ButtonContainer>

        {/* <MoreToCome/> */}

    </main>
    )
}