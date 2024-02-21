import PropTypes from 'prop-types'

function Service({ title, description }) {
    return (
        <div className=" flex flex-col items-center gap-2">
            <p id={title.split(" ")[0]} className=' w-20 h-20 mb-5'></p>
            <h3 className=' text-white font-bold text-lg'>{title}</h3>
            <p className=' text-slate-200 text-center text-sm'>{description}</p>
        </div>
    );
}

Service.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
}

const services = [
    {
        title: "Access your files, anywhere",
        description:
            "The ability to use smartphone, tablet, or computer to access your amount means your files follow you everywhere.",
    },
    {
        title: "Security you can trust",
        description:
            "2-factor authentication and user-controlled encription are just a couple of the security features we allow to help secure your files.",
    },
    {
        title: "Real-time collaboration",
        description:
            "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
    },
    {
        title: "Store any type of file",
        desscription:
            "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing, for all file types to be securely stored and shared.",
    },
];

function Services() {
    return (
        <section className=' flex flex-wrap gap-10 py-20 px-5 justify-center items-center'>
            {services.map((service, index) => (
                <Service
                    key={index}
                    title={service.title}
                    description={service.description}
                />
            ))}
        </section>
    );
}

export default Services;
