import React, { useState, useEffect } from 'react';

const Typewriter = ({ texts, tag, className }) => {
    const [displayTexts, setDisplayTexts] = useState([]);
    const [currentTexts, setCurrentTexts] = useState(Array(texts.length).fill(''));
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showCursor, setShowCursor] = useState(true);
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

            if (currentIndex < texts.length && updatedTexts[currentIndex].length === texts[currentIndex].length) {
                if (currentIndex < texts.length - 1) {
                    setCurrentIndex(currentIndex + 1);
                } else {
                    setTimeout(() => {
                        setShowCursor(false);
                    }, 500);
                }
            }
        }, tag[currentIndex] === 'h1' || tag[currentIndex] === 'h2' ? 90 : 50);

        return () => clearTimeout(timer);
    }, [currentTexts, currentIndex, texts, tag]);

    useEffect(() => {
        const cursorTimer = setTimeout(() => {
            setDisplayTexts(
                currentTexts.map((text, index) => {
                    const Tag = tag[index] || tag[tag.length - 1];
                    const tagClass = tag[index] === 'h1' || tag[index] === 'h2' ? 'transition-opacity duration-500 ease-in-out' : '';

                    return (
                        <React.Fragment key={index}>
                            <Tag className={`${className[index]} ${tagClass}`}>
                                {index === currentIndex ? (
                                    <>
                                        {text}
                                        {showCursor && cursor}
                                    </>
                                ) : (
                                    text
                                )}
                            </Tag>
                        </React.Fragment>
                    );
                })
            );
        }, tag[currentIndex] === 'h1' || tag[currentIndex] === 'h2' ? 90 : 50);

        return () => clearTimeout(cursorTimer);
    }, [currentTexts, currentIndex, tag, className, showCursor]);

    return <div style={{ display: 'inline' }}>{displayTexts}</div>;
};

export { Typewriter };
