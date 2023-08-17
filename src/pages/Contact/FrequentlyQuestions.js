import React, { useState } from 'react';
import { FaCaretRight, FaCaretUp } from 'react-icons/fa';
import '../Contact.css';

const FrequentlyQuestions = () => {
    const faqData = [
        {
            question: 'Pulvinar nostrud class cum facilis?',
            answer: 'I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar leo.'
        },
        {
            question: 'Pon excepturi numquam, facilis?',
            answer: 'I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, adipiscing elit. Ut elit tellus, luctus nec mattis, pulvinar dapibus leo.'
        },
        {
            question: 'Pon excepturi numquam, facilis?',
            answer: 'I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, adipiscing elit. Ut elit tellus, luctus nec mattis, pulvinar dapibus leo.'
        },
        {
            question: 'Pon excepturi numquam, facilis?',
            answer: 'I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, adipiscing elit. Ut elit tellus, luctus nec mattis, pulvinar dapibus leo.'
        },
        {
            question: 'Pon excepturi numquam, facilis?',
            answer: 'I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, adipiscing elit. Ut elit tellus, luctus nec mattis, pulvinar dapibus leo.'
        },
        {
            question: 'Pon excepturi numquam, facilis?',
            answer: 'I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, adipiscing elit. Ut elit tellus, luctus nec mattis, pulvinar dapibus leo.'
        },
    ];

    const [openQuestionIndexes, setOpenQuestionIndexes] = useState([]);

    const handleQuestionClick = (index) => {
        if (openQuestionIndexes.includes(index)) {
            setOpenQuestionIndexes(openQuestionIndexes.filter(item => item !== index));
        } else {
            setOpenQuestionIndexes([...openQuestionIndexes, index]);
        }
    };

    return (
        <div className='container home-bg'>
            <div className='faq-items'>
                {faqData.map((faq, index) => (
                    <div key={index} className='faq-item'>
                        <div
                            className={`faq-question ${openQuestionIndexes.includes(index) ? 'active' : ''}`}
                            onClick={() => handleQuestionClick(index)}
                        >
                            {faq.question}
                            <span className='faq-icon'>
                                {openQuestionIndexes.includes(index) ? <FaCaretUp /> : <FaCaretRight />}
                            </span>
                        </div>
                        {openQuestionIndexes.includes(index) && (
                            <div className='faq-answer'>{faq.answer}</div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FrequentlyQuestions;
