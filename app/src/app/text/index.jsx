

export default function Text({ texts = [] }) {
    return (
        <div>
            {texts.map((text, index) => (
                <p key={index}>{text}</p> 
            ))}
        </div>
    );
}
