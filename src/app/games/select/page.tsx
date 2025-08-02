import Header, {HeaderClearance} from "@/src/components/header";
import ButtonContainer from "@/src/components/button_container";
import MediaEntry from "@/src/components/media_entry";

export default function GamesSelect() {
  return (
    <main>

        <Header back_link="/cjscreations"/>

        <HeaderClearance/>

        <ButtonContainer>

          <MediaEntry 
            type="game" 
            image="mrhappy_logo" 
            title="MR. HAPPY" 
            genres="Narrative, Choose-Your-Own-Adventure, Terminal-Based" 
            description="You play as a tester for a new and advanced digital assistant named 'Mr. Happy'.  As you continue testing, you realize that there's a lot more to this happy program than meets the eye. (NOTE: This game is 4 years old. Please lower your expectations.)" 
            page_link="https://cjcreativemedia.itch.io/mr-happy"
          />

        </ButtonContainer>

        {/* <MoreToCome/> */}

    </main>
    )
}