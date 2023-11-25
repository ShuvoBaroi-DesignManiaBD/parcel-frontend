
const primaryButton = (text, href) => {
    return (
        <button href={href?href:''} className={`bg-primary text-white text px-6 py-2.5 rounded-md`}>{text}</button>
    );
};

export default primaryButton

// export const primaryButtonOutlined = (text, href) => {
//     return (
//         <button href={href?href:''} className={`text-primary font-semibold text-4 px-6 py-2.5 rounded-md border border-primary`}>{text}</button>
//     );
// };

// export const primaryButtonText = (text, href) => {
//     return (
//         <button href={href?href:''} className={`bg-primary text-white text px-6 py-2.5 rounded-md`}>{text}</button>
//     );
// };

// export const secondaryButton = (text, bgColor, border, outlined) => {
//     return (
//         <button className={`${bgColor} bg-primary text-white text px-6 py-2.5 rounded-md`}>{text}</button>
//     );
// };

// export const secondaryButtonOutLined = (text, bgColor, border, outlined) => {
//     return (
//         <button className={`${bgColor} bg-primary text-white text px-6 py-2.5 rounded-md`}>{text}</button>
//     );
// };

// export const secondaryButtonText = (text, bgColor, border, outlined) => {
//     return (
//         <button className={`${bgColor} bg-primary text-white text px-6 py-2.5 rounded-md`}>{text}</button>
//     );
// };