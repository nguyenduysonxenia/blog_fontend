import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ListPost from "../ListPost/ListPost";
import Related from "../Related/Related";
import TopBar from "../TopBar/TopBar";

const Container = () => { 
    return(
        <div className="">
            <div className="row">
                <TopBar />
            </div>
            <div className="row">
                <Header />
            </div>
            <div className="row">
                <Banner />
            </div>
            <div className="row">
                <div className="col">
                    <ListPost />
                </div>
                <div className="col">
                    <Related />
                </div>
            </div>
            <div className="row">
                <Footer />
            </div>
        </div>
    )
}
export default Container;