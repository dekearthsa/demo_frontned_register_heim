import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";


const PageRegister = () => {
    const {userid} = useParams();

    const [selectPlant, setSelectPlant] = useState("Rangsit");
    const [userId, setUserId] = useState(userid)


    const haddleRegister = async () => {
        // console.log(selectPlant,userId)
        const date = new Date();
        const ms = date.getTime();
        const payload = {
            plantName: selectPlant,
            lineUserId: userId,
            getMilisec: ms
        }
        const status = await axios.post("https://demo-service-line-bot-reply-heim-zt27agut7a-as.a.run.app/api/line/register",payload);
        if(status.true){
            alert(status.desc)
        }else{
            alert("Can't save please try agian.")
        }
    }

    if(userid === "" || userid === undefined){
        <div className="container-register">
            <h2>line user id not found!</h2>
        </div>
    }else{
        return (
            <>
                <div className="container-register">
                    <div className="container-id">
                        <label>Line Id</label>
                        <input className="container-input-id"  
                        onChange={(evt) => {setUserId(evt.target.value)}}
                        value={userId} disabled/>
                    </div>
                    <div className="container-plant">
                        <label htmlFor="plant">Plant Name</label>
                        <select className="container-input-plant" 
                        onChange={(evt) => {setSelectPlant(evt.target.value)}}
                        value={selectPlant} 
                        name="plant" id="plant">
                            <option value="Rangsit">Rangsit</option>
                            <option value="Bangsue">Bangsue</option>
                        </select>
    
                        {/* <input className="container-input-plant" /> */}
                    </div>
                    <div className="container-btn-reg">
                        <button className="btn-reg" onClick={haddleRegister}>
                            REGISTER
                        </button>
                    </div>
                </div>
            </>
        )
    }

    
}

export default PageRegister

