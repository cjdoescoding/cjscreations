import Link from "next/link";
import MainMenuButton from "@/src/components/main_menu_button";
import ButtonContainer from "@/src/components/button_container";
import Header, {HeaderClearance} from "@/src/components/header";

export default function Home() {
  
  const featured = {
    name: "WRATH OF THE RISING PHOENIX: A PISAY STORY",
    img_name: "rising_phoenix_main_button",
    page_link: "/stories/rising_phoenix#chapter=1"
  }

  return (
    <main>

      <Header back_link=""/>

      <HeaderClearance/>

      {/* BUTTONS */}
      <ButtonContainer>

        {/* FEATURED */}
        <MainMenuButton button_image={featured.img_name} button_text={featured.name} page_link={featured.page_link}/>

        {/* SEPARATOR */}
        <div className="w-full h-0 border-solid border-t-7 border-main-orange"></div>

        {/* CURRENT WORKS */}
        <MainMenuButton button_image="rising_phoenix_logo_empty" button_text="STORIES" page_link="/stories/select"/>
        <MainMenuButton button_image="music_preview" button_text="MUSIC (COMING SOON)" page_link=""/>
        <MainMenuButton button_image="mrhappy_logo" button_text="GAMES" page_link="/games/select"/>

        {/* ARCHIVED - ADD LATER */}

      </ButtonContainer>

      <HeaderClearance/>

    </main>
  )
}
