import React, { useState, useEffect } from 'react';

const Typewriter = ({ texts, tag, className }) => {
const [displayTexts, setDisplayTexts] = useState([]);
const [currentTexts, setCurrentTexts] = useState(Array(texts.length).fill(''));
const [currentIndex, setCurrentIndex] = useState(0);
const [cursorPosition, setCursorPosition] = useState(0);
const cursor = '|';

useEffect(() => {
    const timer = setTimeout(() => {
    const updatedTexts = currentTexts.map((text, index) => {
        if (index === currentIndex && text.length < texts[currentIndex].length) {
            return texts[currentIndex].substring(0, text.length + 1);
        }
        return text;
        });

        setCurrentTexts(updatedTexts);
        setCursorPosition(updatedTexts[currentIndex].length);
    }, tag[currentIndex] === 'h1' || tag[currentIndex] === 'h2' ? 90 : 50);

    if (currentIndex < texts.length && currentTexts[currentIndex].length === texts[currentIndex].length) {
        if (currentIndex < texts.length - 1) {
        setCurrentIndex(currentIndex + 1);
        }
    }

    return () => clearTimeout(timer);
    }, [currentTexts, currentIndex, texts, tag]);

    useEffect(() => {
    setDisplayTexts(
        currentTexts.map((text, index) => {
        const Tag = tag[index] || tag[tag.length - 1];
        const tagClass = tag[index] === 'h1' || tag[index] === 'h2' ? 'transition-opacity duration-500 ease-in-out' : '';
        const showCursor = currentIndex === index;

        return (
            <React.Fragment key={index}>
            <Tag className={`${className[index]} ${tagClass}`}>
                {showCursor ? (
                <>
                    {text.substring(0, cursorPosition)}
                    <span className="cursor">{cursor}</span>
                </>
                ) : (
                text
                )}
            </Tag>
            </React.Fragment>
            );
        })
    );
}, [currentTexts, tag, className, currentIndex, cursorPosition]);

return <div style={{ display: 'inline' }}>{displayTexts}</div>;
};

export { Typewriter };
