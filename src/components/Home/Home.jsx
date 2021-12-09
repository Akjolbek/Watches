import React from "react";
import "./Home.css";
import { Card, Carousel } from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card;
const contentStyle = {
  height: '700px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
  marginTop: '5%'
};
const Home = () => {
  return (
    <div>
      <a>
        <img
          style={{ width: "1450px", marginLeft: "2.4%" }}
          src="https://www.watchesofswitzerland.com/medias/wosus-desktop-rolex-dec21.jpg?context=bWFzdGVyfHJvb3R8MzQ4NDUyfGltYWdlL2pwZWd8aDdhL2hmMC85MTMwNDc1OTEzMjQ2LmpwZ3wxYmM0NWQ2YmQwODAxMTNmZDcwNTM3NDE1NThjNDcwZjA1Yzk0OGVlMTYyMjg4YWIwNDhmOTEyODcxNDk0YWI5&imwidth=1920"
          alt=""
        />
      </a>

      <div className="img">
        <a>
          <img
            style={{ width: "100px" }}
            src="https://content.thewosgroup.com/wosus/homepage/brand-logos/rolex.png"
            alt=""
          />
        </a>
        <a>
          <img
            style={{ width: "100px" }}
            src="https://content.thewosgroup.com/wosus/homepage/brand-logos/patek-philippe.png"
            alt=""
          />
        </a>
        <a>
          <img
            style={{ width: "100px" }}
            src="https://content.thewosgroup.com/wosus/homepage/brand-logos/cartier.png"
            alt=""
          />
        </a>
        <a>
          <img
            style={{ width: "100px" }}
            src="https://content.thewosgroup.com/wosus/homepage/brand-logos/grand-seiko.png"
            alt=""
          />
        </a>
        <a>
          <img
            style={{ width: "100px" }}
            src="https://content.thewosgroup.com/wosus/homepage/brand-logos/tudor.png"
            alt=""
          />
        </a>
        <a>
          <img
            style={{ width: "100px" }}
            src="https://content.thewosgroup.com/wosus/homepage/brand-logos/omega.png"
            alt=""
          />
        </a>
        <a>
          <img
            style={{ width: "100px" }}
            src="https://content.thewosgroup.com/wosus/homepage/brand-logos/breitling-logo-jan20.png"
            alt=""
          />
        </a>
        <a>
          <img
            style={{ width: "100px" }}
            src="https://content.thewosgroup.com/wosus/homepage/brand-logos/tag-heuer.png"
            alt=""
          />
        </a>
        <a>
          <img
            style={{ width: "100px" }}
            src="https://content.thewosgroup.com/wosus/homepage/brand-logos/hp-brand-hublot-logo-feb21.png"
            alt=""
          />
        </a>
      </div>
      <div className="link">
        <a
          style={{ display: "flex", justifyContent: "center", color: "black" }}
        >
          RECOMENDED FOR YOU
        </a>
      </div>
      <div className="cards">
        <Card
          hoverable
          style={{ width: 320 }}
          cover={
            <img
              alt="example"
              src="https://content.thewosgroup.com/productimage/17720258/17720258_1.jpg"
            />
          }
        >
          <Meta title="ULYSSE NARDIN" description="Freak Vision" />
        </Card>
        <Card
          hoverable
          style={{ width: 320 }}
          cover={
            <img
              alt="example"
              src="https://content.thewosgroup.com/productimage/17720258/17720258_1.jpg"
            />
          }
        >
          <Meta title="ULYSSE NARDIN" description="Freak Vision" />
        </Card>
        <Card
          hoverable
          style={{ width: 320 }}
          cover={
            <img
              alt="example"
              src="https://content.thewosgroup.com/productimage/17720258/17720258_1.jpg"
            />
          }
        >
          <Meta title="ULYSSE NARDIN" description="Freak Vision" />
        </Card>
        <Card
          hoverable
          style={{ width: 320 }}
          cover={
            <img
              alt="example"
              src="https://content.thewosgroup.com/productimage/17720258/17720258_1.jpg"
            />
          }
        >
          <Meta title="ULYSSE NARDIN" description="Freak Vision" />
        </Card>
      </div>
      <div className='image'>
        <Link to="/products">
          <img style={{display: 'flex', marginLeft: '0%'}} src='https://content.thewosgroup.com/wosus/homepage/wosus-1wide-desktop-gwp-nov21-2.jpg' alt='' />
        </Link>
      </div>
      <div style={{marginTop: '3%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
      <a style={{color: 'black', fontWeight: 'bold'}}>ANYTIME ANYWHERE BY WATCHES OF SWITZERLAND</a>
      <p style={{marginTop: '1%'}}>A cinematic love letter to the modern collector</p>
      <Link to='/discover'><a style={{color: 'black', textDecoration: 'underline' }}>Discover Featured Watches</a></Link>
      </div>
      <div>
      <Carousel autoplay>
    <div>
      <Link to="/img1">
      <img src='https://www.watchesofswitzerland.com/medias/wosus-desktop-seamaster-oct21.jpg?context=bWFzdGVyfHJvb3R8MjA3NTkxfGltYWdlL2pwZWd8aGY4L2g5My85MTE5NzIzOTQ2MDE0LmpwZ3xmNjA5YWYxY2I2MWVjMGFkZDA3MzUyMGUzYmM1N2E5Y2FiZjI5ZjJlMzgyOWFkMjU0NDViNjhkOTVkZmI2YzZk&imwidth=1920' alt='' style={{width: '1489px', height: '700px'}} />
      </Link>
    </div>
    <div>
      <img src='https://www.watchesofswitzerland.com/medias/wosus-hero-tudor-desktop-sep21.jpg?context=bWFzdGVyfHJvb3R8MzQzNzc3fGltYWdlL2pwZWd8aDYzL2hkNy85MTE2OTI4MDgxOTUwLmpwZ3w1ZjEzZTEyZDU0YjE1OTRmYmY1Mjk4MzEyNmUxYmMyODlkZmJlMzhmZWJmMzQ5NGVlN2Q5YzhjNmIxOWFhMzZh&imwidth=1920' alt='' style={{width: '1489px', height: '700px'}} />
    </div>
    <div>
      <img src='https://www.watchesofswitzerland.com/medias/wos-grand-seiko-hero-desktop-cond-dec20.jpg?context=bWFzdGVyfHJvb3R8MjU4MTUzfGltYWdlL2pwZWd8aGJlL2hkNy85MDg2NjMwMTY2NTU4LmpwZ3wxYTI4ZGRjYTMxZDU5ZmZkM2MxNjU5YjU3OTUwMGYwMmExMjFmMGNiMjAxYWRiZDlmODM5ODc2NzUzMTkwYjlm&imwidth=1920' alt='' style={{width: '1489px', height: '700px'}} />
    </div>
    <div>
      <img src='https://www.watchesofswitzerland.com/medias/wosus-hero-desktop-boutique-aug21-1.jpg?context=bWFzdGVyfHJvb3R8Mjc0MDMyfGltYWdlL2pwZWd8aGIwL2hhNi85MTA4MzQ3NzE1NjE0LmpwZ3w0NjM4NTJhYzhhNDk4ZTU5OGZhZWVmMDJkMmFiN2IyNTU5Y2ZhNmZlODFlZmM1M2FmOTgwMGZiYjMzNTRhZmM3&imwidth=1920' alt='' style={{width: '1489px', height: '700px'}} />
    </div>
  </Carousel>,
      </div>
      <div className="links" style={{marginTop: '3%', display: 'flex', flexDirection: 'row'}}>
        <a>
        <h3 style={{color: '#85754e'}}><img style={{width: '50px', height: '25px'}} src='https://content.thewosgroup.com/wosus/icons/affirm-logo-normal.png' alt='' style={{maxWidth: '64px', marginRight: '10px', verticalAlign: 'bottom'}} />FLEXIBLE FINANCING <br/> <p style={{color: 'black'}}>MAKE MONTHLY PAYMENTS WITH AFFIRM</p></h3>
        </a>
        <a><h3 style={{color: '#85754e'}}>AUTHORIZED LUXURY RETAILER<br/><p style={{color: 'black'}}>NOW AVAILABLE TO BUY ONLINE</p></h3></a>
        <a><h3  style={{color: '#85754e'}}>FREE HOME DELIVERY AVAILABLE<br/><p style={{color: 'black'}}>ESTIMATED DELIVERY 1-3 DAYS</p></h3></a>
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <img style={{width: '460px', height: '460px'}} src='https://www.watchesofswitzerland.com/medias/wosus-3wide-omega007-oct21.jpg?context=bWFzdGVyfHJvb3R8MzMwNDM5fGltYWdlL2pwZWd8aDEzL2hiYS85MTE5NjUxODIzNjQ2LmpwZ3xhMzdjMjI0OTJkMGY1OTRjYzRjNTIyZWI0ZTIxYmMzNzdhMzM1ZDE2M2RmMWJjNjExZWZjMTRkYzA4ZmY3NzNj&imwidth=640' alt='' />
        <img style={{width: '460px', height: '460px'}} src='https://www.watchesofswitzerland.com/medias/oris-sunwukong-wosushp-3wide-dec21.png?context=bWFzdGVyfHJvb3R8NTU5NDcyfGltYWdlL3BuZ3xoZDQvaGIxLzkxMjg5NDAxNDI2MjIucG5nfDMwOTEyYjI2MTJiMTg0YWI2MWI2ODVmNGQ1NDMwYjQyMzMwNzNkOTY0MTcyYjM4NWM1NjY5OTc3OWI4MzI5ZDM&imwidth=640' alt='' />
        <img style={{width: '460px', height: '460px'}} src='https://www.watchesofswitzerland.com/medias/wosus-hp3wide-breitling-dec21.jpg?context=bWFzdGVyfHJvb3R8NDM2MDZ8aW1hZ2UvanBlZ3xoYjYvaGMxLzkxMzA1OTg5MjQzMTguanBnfDAwMWI0MGE2MmVhOTI1ODU2NzIzYzk2NGNiYTg0NjgyNDQ4MTRkMDkxODNlNjE1YTUyMGMzODNkYjc4MjA2Y2Y&imwidth=640' alt='' />
      </div>
      {/* <div style={{display: 'flex', justifyContent: 'space-around', marginTop: '2%'}}>
        <a>OMEGA SEASMASTER DIVER 300M</a> 
        <a>ORIS WATCHES</a>
        <a>BREITLING</a>
      </div> */}
      {/* <div style={{display: 'flex', justifyContent: 'space-around', marginTop: '1%'}}>
        <p>007 James Bond Edition</p>
        <p>New Arrivals</p>
        <p>Super AVI B04 Chronograph</p>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-around', marginTop: '1%'}}>
        <a href="">Shop The Collection</a>
        <a href="">Shop The Collection</a>
        <a href="">Shop The Watch</a>
      </div> */}
    </div>
  );
};

export default Home;
