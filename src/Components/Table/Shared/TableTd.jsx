
const TableTd = ({ text, icon, className }) => {
    return (
        <td className="h-px whitespace-nowrap">
            <div className="px-6 py-3 text-center">
                <span className={`block text-sm font-medium text-text dark:text-gray-200 ${className}`}>
                    {icon && icon}
                    {text}
                </span>

            </div>
        </td>
    );
};

export default TableTd;