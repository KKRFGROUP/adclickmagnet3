import '../contact.css';
import { TextGenerateEffect } from "../../../components/ui/TextGenerateEffect";

export default function Section1() {
    return (
        <div className="contact-sec1-container flex  items-center" >
            <div className="flex-col justify-center">
                <TextGenerateEffect color={"contact-us-main-head"} words={"Get the help you need."} />
                <p className='contact-us-main-para'>Give us a few details and we’ll offer the best solution. Connect by phone, chat, email, and more.</p>
            </div>
        </div>
    )
}