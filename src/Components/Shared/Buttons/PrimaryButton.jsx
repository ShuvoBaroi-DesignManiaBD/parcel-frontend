
const PrimaryButton = ({text, href}) => {
    return (
        <a href={href?href:''} className={`bg-primary text-white text px-6 py-2.5 rounded-md hover:bg-secondary`}>{text}</a>
    );
};

export default PrimaryButton

