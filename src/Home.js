import React from 'react'
import Product from "./Product.js";
import "./Home.css";
function Home() {
    return (
        <div className="Home">
            <div className="Home__container">
                <img className="Home__image"
                  src="EVREF_OCT20_GWBleedingHero_FT_XSite_1500X600_PV_en-GB._CB419087828_.jpg"
                />
                <div className="Home__row">
                    <Product 
                      id="1923028"
                      price={19.99}
                      title={"earbot"}
                      image="NTg4MTg2YTQt-MWU4YWY5YzEt-w379._SY304_CB403745487_.jpg"
                      rating={4}
                      />
                    <Product 
                      id="0187946"
                      price={119.99}
                      title={"TV LED"}
                      image="61jQlfjFB4L._AC_UL320_.jpg"
                      rating={4}
                      />
                </div>
                <div className="Home__row">
                      <Product 
                      id="9746251"
                      price={259.99}
                      title={"HP Chrome Book"}
                      image="HPChromeBook.jpg"
                      rating={5}
                      />
                      <Product 
                      id="1923028"
                      price={719.99}
                      title={"Acer Nitro"}
                      image="AcerNitro.jpg"
                      rating={4}
                      />
                      <Product 
                      id="1923028"
                      price={1,499.00}
                      title={"CyperpowerPC Gamer"}
                      image="CyperpowerPCGamer.jpg"
                      rating={4}
                      />
                </div>
                <div className="Home__row">
                      <Product 
                      id="77481692"
                      price={14.00}
                      title={"Gildan Men's Fleece"}
                      image="Gildan Men's Fleece.jpg"
                      rating={3}
                      />
                </div>
            </div>
        </div>
    )
}

export default Home;
