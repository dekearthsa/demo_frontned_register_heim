import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";


const PageRegister = () => {
    const {userid} = useParams();

    const [selectPlant, setSelectPlant] = useState("Rangsit");
    const [userId, setUserId] = useState(userid);
    const [isFristName, setIsFristName] = useState("");
    const [isLastName, setIsLastName] = useState("");
    const [isEmail, setIsEmail] = useState("");
    const [isPhone, setIsPhone] = useState("");
    const [isMainUserID, setIsMainUserID] = useState("");
    const [isProduct, setIsProduct] = useState("");


    const haddleRegister = async () => {
        // console.log(selectPlant,userId)
        let setProduct = [];

        if(isProduct === "air_factory"){
            setProduct.push("air_factory")
        }else if(isProduct === "solar_roof"){
            setProduct.push("solar_roof")
        }else if(isProduct === "air_factory_solar_roof"){
            setProduct.push("air_factory")
            setProduct.push( "solar_roof")
        }

        const date = new Date();
        const ms = date.getTime();
        const payload = {
            email: isEmail,
            fristName: isFristName,
            lastName: isLastName,
            tel: isPhone,
            userID: isMainUserID,
            getMilisec: ms,
            product: setProduct,
            lineUserId: userId,
            plantName: selectPlant,
        }
        const status = await axios.post("https://backend-smartfm-line-zt27agut7a-as.a.run.app/api/register",payload);
        if(status.data.isSave){
            alert(status.data.desc)
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
                    <div className="c-f-name">
                        <label>First name</label>
                        <input 
                            onChange={(evt) => {setIsFristName(evt.target.value)}}
                            value={isFristName}
                        />
                    </div>
                    <div className="c-f-name">
                        <label>Last name</label>
                        <input
                            onChange={(evt) => {setIsLastName(evt.target.value)}}
                            value={isLastName}
                        />
                    </div>
                    <div className="c-f-name">
                        <label>Email</label>
                        <input
                            onChange={(evt) => {setIsEmail(evt.target.value)}}
                            value={isEmail}
                        />
                    </div>
                    <div className="c-f-name">
                        <label>Phone</label>
                        <input
                            onChange={(evt) => {setIsPhone(evt.target.value)}}
                            value={isPhone}
                        />
                    </div>
                    <div className="c-f-name">
                        <label>UserID</label>
                        <input
                            onChange={(evt) => {setIsMainUserID(evt.target.value)}}
                            value={isMainUserID}
                        />
                    </div>
                    <div className="c-f-name">
                        <label>Product</label>
                        <select onChange={(evt) => {setIsProduct(evt.target.value)}}
                        value={isProduct}  >
                            <option value="air_factory">Air factroy</option>
                            <option value="solar_roof">Solar roof</option>
                            <option value="air_factory_solar_roof">Air fac & Solar</option>
                        </select>
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

