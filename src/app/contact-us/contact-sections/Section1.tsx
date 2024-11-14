import '../contact.css';
import { TextGenerateEffect } from "../../../components/ui/TextGenerateEffect";

export default function Section1() {
    return (
        <div className="contact-sec1-container" >
            <div className="flex justify-center items-center h-full">
                <TextGenerateEffect color={"contact-us-main-head"} words={"Contact Us"} />
            </div>
        </div>
    )
}