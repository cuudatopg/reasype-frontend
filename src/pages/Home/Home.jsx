import Hero from "../../components/Hero"
import CategoryWrapper from "../category/CategoryWrapper"
import FeatureSection from "./FeatureSection"
import LatestRecipe from "./LatestRecipe"

const Home = () => {
  return (
    <div className="container mx-auto">
      <div className=" flex flex-col justify-center items-center w-full py-20">
        <Hero/>
        <CategoryWrapper/>
      </div>

      {/*others component*/}
      <FeatureSection/>
      <LatestRecipe/>
      
    </div>
  )
}

export default Home
