
const FeatureCard = ({className:styles, Icon, IconSize, title, description}) => {
    return (
        <div className={styles}>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <Icon size={IconSize} className="text-white bg-primary p-2 w-[60px] h-[60px] rounded-lg"/>
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">{title}</h3>
            <p className="text-text opacity-90 dark:text-gray-400">
            {description}
            </p>
        </div>
    );
};

export default FeatureCard;