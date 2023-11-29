
const Container = ({children}, className) => {
    return (
        <section className={`container mx-auto py-20 ${className}`}>
            {children}
        </section>
    );
};

export default Container;