import React from "react";
import Navbar from "../Allsimiler/Navbar";
import style from "../Css/Home.module.css";
import Footer from "../Allsimiler/Footer";
import Afterloginnav from "../Allsimiler/Afterloginnav";
import { Authcontext } from "../Context/Authcontextprovider";
import { useEffect } from "react";

const Home = () => {
  const { auth, handlerefresh, handlerefreshProduct } = React.useContext(Authcontext);

  useEffect(() => {
    handlerefresh();
    handlerefreshProduct();
    document.title = "Welcome to Costco Wholesale";
  }, []);

  return (
    <div className={style.home}>
      {auth ? <Afterloginnav /> : <Navbar />}
      <img
        className={style.banner1}
        src="https://mobilecontent.costco.com/staging/resource/img/24w13043/d_24w13043_hero_p&g_100_campaign.jpg"
        alt=""
      />

      {/* New image tiles */}
      <div className={style.imageTiles}>
        <img src="https://mobilecontent.costco.com/staging/resource/img/24w13156/24w13156_cat_tiles_p&g_beauty_v2.png" alt="" />
        <img src="https://mobilecontent.costco.com/staging/resource/img/24w13156/24w13156_cat_tiles_p&g_household_v2.png" alt="" />
        <img src="https://mobilecontent.costco.com/staging/resource/img/24w13156/24w13156_cat_tiles_p&g_health2.png" alt="" />
        <img src="https://mobilecontent.costco.com/staging/resource/img/24w13156/24w13156_cat_tiles_p&g_health1.png" alt="" />
      </div>

      <div className={style.banner2}>
        <div>
          <img
            src="https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=1695433-847__1&recipeName=350"
            alt=""
          />
          <p className={style.banner2p}>Dining Table</p>
        </div>
        <div>
          <img
            src="https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=100530889-847__1&recipeName=350"
            alt=""
          />
          <p className={style.banner2p}>6-Piece Seating Set</p>
        </div>
        <div>
          <img
            src="https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=1844199-847__1&recipeName=350"
            alt=""
          />
          <p className={style.banner2p}>Uber</p>
        </div>
        <div>
          <img
            src="https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=1784904-847__1&recipeName=350"
            alt=""
          />
          <p className={style.banner2p}>Disney Arch</p>
        </div>
      </div>

      <div className={style.banner3}>
        <div>
          <img
            src="https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=1715568-847__1&recipeName=350"
            alt=""
          />
          <p className={style.banner3p}>LG Refrigerator</p>
        </div>
        <div>
          <img
            src="https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=1827493-847__2&recipeName=350"
            alt=""
          />
          <p className={style.banner3p}>Lenovo Laptop</p>
        </div>
        <div>
          <img
            src="https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=1529180-847__1&recipeName=350"
            alt=""
          />
          <p className={style.banner3p}>Lunch Box</p>
        </div>
        <div>
          <img
            src="https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=1712043-847__1&recipeName=350"
            alt=""
          />
          <p className={style.banner3p}>Domino's</p>
        </div>
      </div>

      <img
        className={style.banner4}
        src="https://mobilecontent.costco.com/staging/resource/img/24w06080/d_24w06080_banner_gold_eagle.jpg"
        alt=""
      />

      <div className={style.banner5}>
        <img
          src="https://cdn.bfldr.com/56O3HXZ9/at/pg4hj44wvg47m4b8p73j3pg4/d-24w01107-banner-membership.jpg?&format=jpg"
          alt=""
        />
        <img
          src="https://cdn.bfldr.com/56O3HXZ9/at/9zswttn4v5gz2z83thjjrjg/d-24w01107-banner-renew-membership.jpg?&format=jpg"
          alt=""
        />
      </div>

      <img
        className={style.banner6}
        src="https://mobilecontent.costco.com/live/resource/img/24w12085/d-24w12085-banner-huggies.jpg"
        alt=""
      />

      <div className={style.banner8}>
        <img
          src="https://cdn.bfldr.com/U447IH35/as/kk4zs6k9pv39j79kwmp83jxb/1838221-847__1?auto=webp&format=jpg&width=350&height=350&fit=bounds&canvas=350,350"
          alt=""
        />
        <img
          src="https://cdn.bfldr.com/U447IH35/as/54pqwnbrnbq72stxqhsjr7/4000198796-847__1?auto=webp&format=jpg&width=350&height=350&fit=bounds&canvas=350,350"
          alt=""
        />
        <img
          src="https://cdn.bfldr.com/U447IH35/as/mmqgckjmjsfqqk3fx5v6zp/9065091-847__1?auto=webp&format=jpg&width=350&height=350&fit=bounds&canvas=350,350"
          alt=""
        />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
