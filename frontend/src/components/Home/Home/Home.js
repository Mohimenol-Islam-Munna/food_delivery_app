import React from "react";
import FoodDetail from "../../FoodDetail/FoodDetail";
import DishType from "../../DishType/DishType";
import Footer from "../../Footer/Footer";
import PasswordReset from "../../LogIn/PasswordReset/PasswordReset";
import Shop from "../../Shop/Shop";
import FirstSec from "../FirstSec/FirstSec";
import LearnMore from "../LearnMore/LearnMore";
import NavBar from "../NavBar/NavBar";
import PretyCool from "../PretyCool/pretyCool";
import UpdateProfile from "../../UpdateProfile/UpdateProfile";

const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <FirstSec></FirstSec>
      <PretyCool></PretyCool>
      <LearnMore></LearnMore>
      <Footer></Footer>
      <PasswordReset></PasswordReset>
      <DishType></DishType>
      <Shop></Shop>
      <FoodDetail></FoodDetail>
      <UpdateProfile></UpdateProfile>
    </div>
  );
};

export default Home;
