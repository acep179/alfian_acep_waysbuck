import pict from "./../assets/waysbuck_bg.jpg"
import pict2 from "./../assets/food.png"
import drinks from "./../assets/palm.jpg"
import "./home.css"

function Home(){
    return(
        <div>
            <div className="container" style={{marginTop: 87}}>
              <div className="container_img">
                    <div className="hero pic_center pic1 d-flex align-items-center" style={{backgroundImage: `url(${pict})`}}>
                        <div className="container_text">
                            <div className="row row-cols-1">
                                <div className="col">
                                    <h1 className="waysbuck">WAYSBUCK</h1>
                                </div>
                                <div className="col">
                                    <h4>Things are changing, but we're still here for you</h4>
                                </div>
                                <div className="col">
                                We have temporarily closed our in-store cafes, but select grocery and drive-thru locations remaining open. Waysbucks Drivers is also available
                                </div>
                                <div className="col">
                                Let's Order...
                                </div>
                            </div>
                        </div>
                            
                    </div>
                        {/* <img src={pict} alt="pic" className="pic1"/> */}
                        <img src={pict2} alt="pic2" className="pic2"/>
                </div>
            </div>
            <div className="text-order">
            <h2 className="text-red">Let's Order</h2>
            </div>
        <div className="list_menu d-flex justify-content-around">
                {/* cards dynamic contents */}
            <div className="container_cards">
                <a  className="cursor-pointer" href="/detail-product">
                    <div className="card" style={{width: '16rem'}}>
                        <img src={drinks} className="card-img-top" alt="drinks-pic"/>
                        <div className="card-body bg-pink">
                            <p className="card-text text-red" style={{fontWeight: 'bold'}}>Ice Coffe Palm Sugar</p>
                            <p className="card-text text-red" >Rp. 27.000</p>
                        </div>
                    </div>
                </a>
            </div>

            <div className="container_cards">
                <div className="card" style={{width: '16rem'}}>
                    <img src={drinks} className="card-img-top" alt="drinks-pic"/>
                    <div className="card-body bg-pink">
                        <p className="card-text text-red" style={{fontWeight: 'bold'}}>Ice Coffe Palm Sugar</p>
                        <p className="card-text text-red" >Rp. 28.000</p>
                    </div>
                </div>
            </div>

            <div className="container_cards">
                <div className="card" style={{width: '16rem'}}>
                    <img src={drinks} className="card-img-top" alt="drinks-pic"/>
                    <div className="card-body bg-pink">
                        <p className="card-text text-red" style={{fontWeight: 'bold'}}>Ice Coffe Palm Sugar</p>
                        <p className="card-text text-red" >Rp. 28.000</p>
                    </div>
                </div>
            </div>

            <div className="container_cards">
                <div className="card" style={{width: '16rem'}}>
                    <img src={drinks} className="card-img-top" alt="drinks-pic"/>
                    <div className="card-body bg-pink">
                        <p className="card-text text-red" style={{fontWeight: 'bold'}}>Ice Coffe Palm Sugar</p>
                        <p className="card-text text-red" >Rp. 28.000</p>
                    </div>
                </div>
            </div>

            
        </div>
    </div>

    );
}

export default Home;