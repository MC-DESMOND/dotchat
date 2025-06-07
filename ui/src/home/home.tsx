import { Div } from "../addons/csml"
import CWind from "../addons/cwind"
import BaseHOC from "../addons/HOC"



export default function Home(){
    const base = new BaseHOC()
    return <base._ {...CWind.Square("%")} {...CWind.GridRowCenter("")}>
        <Div {...CWind.Square("90%")} backgroundColor = "rgba(255, 255, 255, 0.048)"
    borderRadius= "10px" border=" 1px solid rgba(255, 255, 255, 0.123)">


        </Div>
    </base._>
}