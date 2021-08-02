import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
const menu = [
    {
        "id": 9,
        "title": "Doroyaki",
        "category": "Japan",
        "price": 3.99,
        "img": "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
        "desc": "Red bean paste dessert, serving with honey."
    },
    {
        "id": 6,
        "title": "Onigiri",
        "category": "Japan",
        "price": 9.99,
        "img": "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
        "desc": "Rice Sandwich, serving with soy sauce"
    },


    {
        "id": 2,
        "title": "Chicken Ramen",
        "category": "Japan",
        "price": 7.99,
        "img": "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
        "desc": "Chicken noodle soup, serving with vegetables, green onion."
    },
    {
        "id": 7,
        "title": "Jajangmyeon",
        "category": "Korea",
        "price": 15.99,
        "img": "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
        "desc": "Black bean sauce noodle, serving with green onion "
    },
    {
        "id": 3,
        "title": "Bibimbap",
        "category": "Korea",
        "price": 8.99,
        "img": "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
        "desc": "Boiling vegetables, serving with special hot sauce"
    },
    {
        "id": 1,
        "title": "Tteokbokki",
        "category": "Korea",
        "price": 10.99,
        "img": "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
        "desc": "Spicy rice cakes, serving with fish cake."
    },
    {
        "id": 4,
        "title": "Dan Dan Mian",
        "category": "China",
        "price": 5.99,
        "img": "https://i2.wp.com/seonkyounglongest.com/wp-content/uploads/2019/10/Dan-Dan-Noodles-11.jpg?fit=2000%2C1333&ssl=1",
        "desc": "Dan dan noodle, serving with green onion "
    },
    {
        "id": 5,
        "title": "Yangzhou Fried Rice",
        "category": "China",
        "price": 12.99,
        "img": "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
        "desc": "Yangzhou style fried rice, serving with bean and pickles "
    },


    {
        "id": 8,
        "title": "Ma Yi Shang Shu",
        "category": "China",
        "price": 12.99,
        "img": "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
        "desc": "Hot pepper sauce noodle, serving with soy bean and onion"
    }

]



const Card = () => {


    var japan = [];

    var china = [];

    var korea = [];



    // Kategoriye göre array elemanlarını dönerek ilgili arraylere aktarma işlemi

    for (var i = 0; i < menu.length; i++) {

        if (menu[i].category === "Japan") {
            japan.push(menu[i])
            
        }
        if (menu[i].category === "China") {
            china.push(menu[i])
        }

        if (menu[i].category === "Korea") {
            korea.push(menu[i])
        }
    }



    return (
        <Router>
            <div className="row">
                {/* react router kullanarak link ile yönlendirme */}
                <div className="text-align-center justify-content-center ">
<div style={{justifyContent: 'center', textAlign: 'center'}}>
                    <Link to="/" type="button" className="btn btn-info btn-lg">All</Link>


                    <Link to="/korea" type="button" className="btn btn-info btn-lg">Korea</Link>


                    <Link to="/japan" type="button" className="btn btn-info btn-lg">Japan</Link>


                    <Link to="/china" type="button" className="btn btn-info btn-lg">China</Link>
</div>
                </div>
                {/* swith "/" ile aldığımız hatayı (bulduğu ilk elemanı getirme) çözer */}
                <Switch>
                    {/* route ile gösterilecek komponent parçalarını belirtiyoruz */}
                    <Route path="/japan">
                        {japan.map(newMenu =>
                            <div className="card" style={{ width: "18rem", display: "block" }} key={newMenu.id}>
                                <img src={newMenu.img} className="card-img-top" alt="..." />
                                <div className="card-header">
                                    {newMenu.title}
                                </div>
                                <p className="card-text">{newMenu.desc}</p>
                                <ul className="list-group list-group-flush">
                                    <ol className="list-group-item" >{newMenu.price}</ol>
                                    <ol className="list-group-item" >{newMenu.category}</ol>
                                </ul>
                            </div>
                        )}
                    </Route>
                    <Route path="/korea">
                        {korea.map(newMenu =>
                            <div className="card" style={{ width: "18rem", display: "block" }} key={newMenu.id}>
                                <img src={newMenu.img} className="card-img-top" alt="..." />
                                <div className="card-header">
                                    {newMenu.title}
                                </div>
                                <p className="card-text">{newMenu.desc}</p>
                                <ul className="list-group list-group-flush">
                                    <ol className="list-group-item" >{newMenu.price}</ol>
                                    <ol className="list-group-item" >{newMenu.category}</ol>
                                </ul>
                            </div>
                        )}
                    </Route>

                    <Route path="/china">
                        {china.map(newMenu =>
                            <div className="card" style={{ width: "18rem", display: "block" }} key={newMenu.id}>
                                <img src={newMenu.img} className="card-img-top" alt="..." />
                                <div className="card-header">
                                    {newMenu.title}
                                </div>
                                <p className="card-text">{newMenu.desc}</p>
                                <ul className="list-group list-group-flush">
                                    <ol className="list-group-item" >{newMenu.price}</ol>
                                    <ol className="list-group-item" >{newMenu.category}</ol>
                                </ul>
                            </div>
                        )}
                    </Route>

                    {/* Giriş sayfasında tüm menü'nün gözükmesi için / ile buraya yönlendirme yapıyoruz !*/}
                    <Route path="/">
                        {menu.map(newMenu =>
                            <div className="card" style={{ width: "18rem", display: "block" }} key={newMenu.id}>
                                <img src={newMenu.img} className="card-img-top" alt="..." />
                                <div className="card-header">
                                    {newMenu.title}
                                </div>
                                <p className="card-text">{newMenu.desc}</p>
                                <ul className="list-group list-group-flush">
                                    <ol className="list-group-item" >{newMenu.price}</ol>
                                    <ol className="list-group-item" >{newMenu.category}</ol>
                                </ul>
                            </div>
                        )}
                    </Route>
                </Switch>
            </div>

        </Router>
    )
}




export default Card;