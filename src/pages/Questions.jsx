import React, { useState, useRef } from 'react';
import './Questions.css';
import Card from '../assets/components/card';

function Questions() {
    const [answer, setAnswer] = useState('');
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [showShopWindows, setShowShopWindows] = useState(false); 
    const descriptions = useRef("");

    const shopWindows = [
        { id: 1, name: 'Shop 1', category: 'Category 1', description: 'Description for Shop 1' },
        { id: 2, name: 'Shop 2', category: 'Category 2', description: 'Description for Shop 2' },
        { id: 3, name: 'Shop 3', category: 'Category 3', description: 'Description for Shop 3' },
        { id: 4, name: 'Shop 4', category: 'Category 4', description: 'Description for Shop 4' },
        { id: 5, name: 'Shop 5', category: 'Category 5', description: 'Description for Shop 5' },
        { id: 6, name: 'Shop 6', category: 'Category 6', description: 'Description for Shop 6' },
        { id: 7, name: 'Shop 7', category: 'Category 7', description: 'Description for Shop 7' },
        { id: 8, name: 'Shop 8', category: 'Category 8', description: 'Description for Shop 8' },
        { id: 9, name: 'Shop 9', category: 'Category 9', description: 'Description for Shop 9' }
    ];

    const questions = [
      {
        title: "1. Startup Stage and Goals",
        questions:
          "Are you looking for help with refining your product, gaining customers, or raising funding?",
      },
      {
        title: "2. Industry Focus",
        questions:
          "Does your startup operate in a specific industry (e.g., tech, healthcare, fintech, social impact)?",
        
      },
      {
        title: "3. Location and Market",
        questions: 
          "Are you targeting a specific market, and would you prefer an accelerator with strong connections there?"
        
      },
      {
        title: "4. Funding Needs",
        questions:
          "Are you seeking direct investment or venture capital opportunities?",
        
      },
      {
        title: "5. Program Structure and Duration",
        questions:
          "Are you looking for marketing automation, email marketing, business analytics, etc?",
      },
      {
        title: "All questions answered.",
        questions: 
          "You're done."
        
      }
  
      
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        descriptions.current = descriptions.current + " " + answer;
        console.log('Submitted answer:', descriptions.current);
        setAnswer('');

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(a => a+1);
        } else {
                console.log("All questions answered.");
        }
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        console.log('Search submitted:', answer);
        setShowShopWindows(true); // Show shop windows on search
        setAnswer('');
    };

    const showWindows = () => {
        return (
            <div className="shopAllWindows flex-container overflow-y-auto">
                {shopWindows.map((shop) => (
                    <Card 
                        key={shop.id} 
                        name={shop.name} 
                        category={shop.category} 
                        description={shop.description} 
                    />
                ))}
            </div>
        );
    };

    return (
        <>
            <div className="questionContents">
                <div className="actualQuestionContents">
                    <div className="questionHeading">DISCOVER ACCELERATION ENGINES</div>
                    <div className="questionSubHeading">
                        To use the recommendation engine, simply input your company’s key information—such as product categories, entitlements, and industry.
                        The system will then process this data through its vector search algorithm to identify the most relevant accelerator programs tailored to your specific needs.
                    </div>
                    <div className="contentContainer">
                        <div className="questionSection">
                            <h2>{questions[currentQuestionIndex].title}</h2>
                            <div className="question">
                                {questions[currentQuestionIndex].questions}
                            </div>
                        </div>
                        <form className="answerSection" onSubmit={handleSubmit}>
                            <div className="answer">
                                <textarea
                                    value={answer}
                                    onChange={(e) => setAnswer(e.target.value)}
                                    placeholder="Enter your answer..."
                                    rows="5"
                                    style={{ width: '100%', resize: 'none' }} 
                                    className='p-3'
                                />
                            </div>
                            <button id="answerMe" type="submit">SUBMIT</button>
                        </form>
                    </div>
                </div>
                <img className="thisHandHatesReact" src="./thisHandHatesReact.png" alt="Hand" />
            </div>
        </>
    );
}

export default Questions;
