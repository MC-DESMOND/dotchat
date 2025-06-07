import { useEffect } from "react";
import Alerter from "../addons/alerter";
import { Br, Button, Div, Form, Label } from "../addons/csml";
import CWind from "../addons/cwind";
import BaseHOC, { InputHOC, InputSpiritHOC, SpiritHOC } from "../addons/HOC";
import SliderHOC from "../addons/Slider";
import { rgba } from "../addons/anys";
import { useParams, useSearchParams } from "react-router-dom";



export default function Auth(){
    const base = new BaseHOC()
    const [search] = useSearchParams()
    const params = useParams()
    const gcolor = base.rootdata.access.gcolor
    const current: 'login' | "signup" = "login"
    const slider = new SliderHOC({slideTime:500,fitContent:true,gap:0})
    const buttons = new SpiritHOC({Component:Button, soulprops:{
        padding: "10px 20px",
        backgroundColor: rgba(73, 137, 180, 0.24),
        borderRadius: "10px",
        fontSize:"16px",
        fontWeight:"bold",
        border:" 1px solid"+ rgba(73, 180, 180, 0.24),
    }})
    const inputs = new InputSpiritHOC({soulprops:{
        outline:"none",
        background:"",
        backgroundColor : rgba(255, 255, 255, 0.03),
        // border:"none",
        border :" 1px solid"+ rgba(255, 255, 255, 0.123),
        padding:"13px 20px",
        fontSize:"15px",
        borderRadius:"10px"
    }})

    const labels = new SpiritHOC({Component:Label, soulprops:{
        fontWeight:"bold",
        textTransform:"capitalize"
    }})

    const forms = new SpiritHOC({Component:Form,soulprops:{
        backgroundColor:"rgba(255, 255, 255, 0.048)",
        // border:" 1px solid rgba(255, 255, 255, 0.123)",
        padding:"20px",
        boxSizing:"border-box",
        ...CWind.Square("%"), 
        ...CWind.FlexColumn("10px"),
        maxWidth:"350px",
        maxHeight:"400px",
        borderRadius:"10px",
        action:"/auth" 
    }})
    const alerter = new Alerter({remote:"base"})
    useEffect(()=>{
        if (search.get("error")){
            alerter.Alert(search.get("error"))
        }
        alerter.alert("welcom")
        // slider.slide(2)
        // console.log(search)
        // console.log(search.get("username"))

    })
        return <base._ {...CWind.Square("%")} {...CWind.GridRowCenter("")}>
            <Div {...CWind.Square("90%")} padding="5px" boxSizing="border-box" backgroundColor = "rgba(255, 255, 255, 0.048)"
            borderRadius= "10px" border=" 1px solid rgba(255, 255, 255, 0.123)" >
                <slider._  >
                    <Div {...CWind.FlexColumnAllCenter("30px")} {...CWind.Square("%")}>
                            <Div textAlign="center" fontSize="18px" fontWeight="bolder">LOGIN</Div>
                        <forms.RenderSoul soulId="login" comment={"LOGIN"}  >
                            <labels.RenderSoul soulId="login.username" htmlFor="username">username</labels.RenderSoul>
                            <inputs.RenderSoul soulId="login.username" required placeholder="Username" name="username2"></inputs.RenderSoul>
                            <labels.RenderSoul soulId="login.password" htmlFor="password" marginTop="10px">password</labels.RenderSoul>
                            <inputs.RenderSoul soulId="login.password" required placeholder="Password" name="password"></inputs.RenderSoul>
                            <Div width="100%" {...CWind.FlexRowAllCenter("20px")} marginTop="40px">
                                <buttons.RenderSoul type="submit">Submit</buttons.RenderSoul>
                                <buttons.RenderSoul onClick={()=>{slider.slide(1)}} backgroundColor="transparent">Sign Up</buttons.RenderSoul>
                            </Div>
                        </forms.RenderSoul>
                    </Div>
                    <Div {...CWind.FlexColumnAllCenter("30px")} {...CWind.Square("%")}>
                            <Div textAlign="center" fontSize="18px" fontWeight="bolder">SIGN UP</Div>
                        <forms.RenderSoul soulId="signup" comment={"SIGN UP"}>
                            <labels.RenderSoul soulId="signup.username">username</labels.RenderSoul>
                            <inputs.RenderSoul soulId="signup.username" required placeholder="Username" name="username"></inputs.RenderSoul>
                            <labels.RenderSoul soulId="signup.phone" marginTop="5px">phone Nunber</labels.RenderSoul>
                            <inputs.RenderSoul soulId="signup.phone" required placeholder="Phone Number" type="number" name="phone"></inputs.RenderSoul>
                            <labels.RenderSoul soulId="signup.password" marginTop="5px">password</labels.RenderSoul>
                            <inputs.RenderSoul soulId="signup.password" required placeholder="Password" name="password"></inputs.RenderSoul>
                            <Div width="100%" {...CWind.FlexRowAllCenter("20px")} marginTop="40px">
                                <buttons.RenderSoul onClick={()=>{slider.slide(0)}} backgroundColor="transparent">Login</buttons.RenderSoul>
                                <buttons.RenderSoul type="submit">Submit</buttons.RenderSoul>
                            </Div>
                        </forms.RenderSoul>
                    </Div>

                </slider._>

            </Div>
        </base._>
}