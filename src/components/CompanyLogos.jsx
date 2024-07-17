import { companyLogos } from "../constants";

export const CompanyLogos = ({ className }) => {
    return (
        <div className={className}>
            <h5 className="tagline mb-6 text-center text-n-1/50 p-10">
                Helping people create beautiful content at{" "}
            </h5>
            <ul className="flex">
                {companyLogos.map((logo, index) => (
                    <li
                        key={index}
                        className="flex justify-center items-center flex-1 h-[8.5rem]"
                    >
                        <img src={logo} alt={logo} height={28} width={134} />
                    </li>
                ))}
            </ul>
        </div>
    );
};
