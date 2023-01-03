import Printmap from "./Printmap";
import img1 from '../img/img1.jpg'
import img2 from '../img/img2.jpg'
import img3 from '../img/img3.jpg'
import './Home.css'

const Commap = () => {
    const componentMap = ([
        {
            place: "컴포넌트 map 사진1",
            image: `${img1}`
        },
        {
            place: "컴포넌트 map 사진2",
            image: `${img2}`
        },
        {
            place: "컴포넌트 map 사진3",
            image: `${img3}`
        },
    ]);
    return (  
        <div  className="combox">
            {
                componentMap.map((m)=>(
                <div><Printmap place={m.place} image={m.image} /></div>
                ))
            }
        </div>
    );
}

export default Commap;