export const DeckBtn = ({ details, value, onClick, children }) => {

    return (
        <button
            className='option'
            name='count'
            value={value}
            onClick={onClick}>
            {children}
        </button>
    );
};