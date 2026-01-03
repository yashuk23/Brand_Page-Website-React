import "./ContactUsHelper.css";
import ContactsIcon from '@mui/icons-material/Contacts';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import HomeIcon from '@mui/icons-material/Home';
export default function ContactUsHelper() {
    return (
        <div className="ContactUsHelper">
            <div className="contact"><ContactsIcon /><span>myniketeam@nike.com</span></div>
            <div className="contact" ><PhoneInTalkIcon /><span> +91 98765 43210</span></div>
            <div className="contact"><HomeIcon/><span>Nike India Pvt. Ltd.Karnataka</span></div>

            <div className="button-container">
                <button>
                    <a href="https://www.nike.com/in/help/" target="_blank" rel="noreferrer">
                        Get Help
                    </a>
                </button>
            </div>
        </div>
    );
}