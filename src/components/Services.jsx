import { services } from '../data';

import PropTypes from 'prop-types'

function Service({ title, description }) {
    return (
        <div className=" flex flex-col items-center gap-2 max-w-sm">
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

function Services() {
    return (
        <section className=' flex flex-wrap gap-32 py-20 px-5 justify-center items-center lg:justify-between w-full'>
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
