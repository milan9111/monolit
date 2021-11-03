import React from "react";
import './../styles/MapAddress.css';


const MapAddress = (props) => {
    return(
        <section className="mapAddress">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1442.5291728583793!2d35.02406745198822!3d48.46400458556853!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe2fd4fa8996b%3A0xeffc573a419887ff!2z0KLRgNC10L3QsNC20LXRgNC90YvQuSDQt9Cw0LsgTW9ub2xpdCBHeW0!5e0!3m2!1sru!2sua!4v1635794429558!5m2!1sru!2sua" allowFullScreen={''} loading={"lazy"}></iframe>
        </section>
    );
}

export default MapAddress;