import PropTypes from "prop-types";
import { testimonials } from "../data";

function Testimony({ comment, clientInformation }) {
    return (
        <div className="testimony text-slate-100 py-8 px-6 w-80">
            <p className=" leading-6 text-sm">{comment}</p>
            <Client
                imageUrl={clientInformation.imageUrl}
                name={clientInformation.name}
                career={clientInformation.career}
            />
        </div>
    );
}

Testimony.propTypes = {
    comment: PropTypes.string,
    clientInformation: PropTypes.objectOf(PropTypes.string),
};

function Client({ imageUrl, name, career }) {
    return (
        <div className=" flex gap-4 mt-8">
            <img
                src={imageUrl}
                alt={"Picture of " + name}
                className=" w-14 h-14 rounded-full"
            />
            <div>
                <p className=" text-white text-lg font-black">{name}</p>
                <p className=" text-sm">{career}</p>
            </div>
        </div>
    );
}

Client.propTypes = {
    imageUrl: PropTypes.string,
    name: PropTypes.string,
    career: PropTypes.string,
};

function Testimonials() {
    return (
        <section
            id="testimonials"
            className=" max-w-screen-lg flex flex-wrap mb-60 py-16 px-10 gap-20 justify-center items-end"
        >
            {testimonials.map((testimony, index) => (
                <Testimony
                    key={index}
                    comment={testimony.comment}
                    clientInformation={testimony.clientInformation}
                />
            ))}
        </section>
    );
}

export default Testimonials;
