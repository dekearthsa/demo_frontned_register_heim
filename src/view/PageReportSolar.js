import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";


const PageReportSolar = () => {
    const {lineID} = useParams()
    const [isReport, setIsReport] = useState("");

    const haddleSendReport = async () => {
        const payload = {
            lineUserID: lineID,
            systemType: "solar_roof",
            report: isReport,
            typeReport: "other"
        }
        const status = await axios.post("https://backend-smartfm-line-zt27agut7a-as.a.run.app/api/report/other", payload)
        if(status.data.isErr === false){
            alert("Send report sucess.")
            setIsReport("")
        }else{
            alert(status.data.desc)
            setIsReport("")
        }
    }

    return( 
        <>
            <div>
                <div className="c-title">Report solar roof</div>
                <div className="c-detail">
                    <textarea className="c-textarea"
                        onChange={(evt) => {setIsReport(evt.target.value)}}
                    >

                    </textarea>
                </div>
                <div>
                    <button className="btn-send-report" onClick={haddleSendReport}>Send</button>
                </div>
            </div>
        </>
    )
}

export default PageReportSolar