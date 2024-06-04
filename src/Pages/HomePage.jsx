import FlatList from "../Components/Flats/Flatlist";

import Banner from "../Components/Home/Banner";
import Categories from "../Components/Home/Categories";
import CategoryList from "../Components/Home/CategoryList ";
import Footer from "../Components/Home/Footer";
import Services from "../Components/Home/Services";
import InteriorDesign from "../Components/Interior/InteriorDesign";





const HomePage = () => {
    return (
        <>
    
        <Banner></Banner>
        <Categories></Categories>
        <CategoryList></CategoryList>
        <FlatList></FlatList>
        
        <InteriorDesign></InteriorDesign>
        <Services></Services>
         <Footer></Footer>
</>
    );
};

export default HomePage;