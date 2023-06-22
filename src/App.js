import {useState} from "react";
import {Header} from "./components/Header/Header";
import {Content} from "./components/Content/Content";
import macbook from "./assets/images/mack-book-card-1.jpg";
import Galaxy from "./assets/images/Galaxy-card-2.jpg";
import Skuter from "./assets/images/skuter-card-3.jpg";
import SamsungTV from "./assets/images/samsung-Tv-card-4.jpg";
import Mask from "./assets/images/mask-card-5.jpg";
import WashMashine from "./assets/images/wasch-maschine-card-6.jpg";
import Holodilnik from "./assets/images/holodilnik-card-7.jpg";
import SubCard from "./assets/images/sub-card-8.jpg";
import Naushniki from "./assets/images/nauschniki-card-9.jpg";
import Video from "./assets/images/video-carta.png";


function App() {
    const [database, setDataBase] = useState([
        {
            id: 1,
            name: "MacBook",
            price: 100000,
            bought: false,
            rating: 5,
            image: `${macbook}`
        },
        {
            id: 2,
            name: "Galaxy",
            price: 35999,
            bought: false,
            rating: 4,
            image: `${Galaxy}`
        },
        {
            id: 3,
            name: "Скутер",
            price: 65500,
            bought: false,
            rating: 5,
            image: `${Skuter}`
        },
        {
            id: 4,
            name: "Монитор Samsung",
            price: 12000,
            bought: false,
            rating: 3,
            image: `${SamsungTV}`
        },
        {
            id: 5,
            name: "Респераторная маска",
            price: 500,
            bought: false,
            rating: 5,
            image: `${Mask}`
        },
        {
            id: 6,
            name: "Стиральная машина",
            price: 100000,
            bought: false,
            rating: 3,
            image: `${WashMashine}`
        },
        {
            id: 7,
            name: "Белый холодильник",
            price: 43100,
            bought: false,
            rating: 5,
            image: `${Holodilnik}`
        },
        {
            id: 8,
            name: "Колонка",
            price: 3000,
            bought: false,
            rating: 4,
            image: `${SubCard}`
        },
        {
            id: 9,
            name: "Наушники",
            price: 1500,
            bought: false,
            rating: 5,
            image: `${Naushniki}`
        },
        {
            id: 10,
            name: "Видеокарта RTX 3060",
            price: 41000,
            bought: false,
            rating: 8,
            image: `${Video}`
        }
    ])

    const setBought = (id) => {
        const newId = database.map((item) => {
            if(item.id === id) {
                return {
                    ...item,
                    bought: !item.bought
                }
            }
            return item
        })
        setDataBase(newId)
    }
  return (
    <div className="container">
      <Header database={database} />
      <Content database={database} setBought={setBought}/>
    </div>
  );
}

export default App;
