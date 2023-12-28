'use client';
import "@/app/globals.css";
import ContactComponent from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
const Contact = () => {
    return (
        <>
        <Header active="Contact" />
        <div className="bg-black w-full overflow-scroll">
            <div className="mt-20">
                <ContactComponent/>
            </div>
            <Footer/>
        </div>
        </>
    )
};
export default Contact;