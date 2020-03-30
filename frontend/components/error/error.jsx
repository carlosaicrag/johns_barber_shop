import React from "react"

function Error(){
      
    const jokes = [
        {
            'question': 'What do you call a group of men waiting for a haircut?',
            'answer': 'A barbercue'
        },

        {
            'question': 'I went to a fortune teller for a haircut.',
            'answer': 'I got crystal bald.'
        },
        {
            'question': 'I got a haircut today, but I am never going back to that barber.',
            'answer': 'I asked for one hair cut, and he cut all of them.'
        },
        {
            'question': 'How does a barber give the Sun a haircut?',
            'answer': 'Eclipse it'
        },
        {
            'question': 'Haircuts are great...',
            'answer': 'Because I did none of the work but get all the credit'
        },
    ];

    let joke = jokes[Math.floor(Math.random() * jokes.length)];
    
    return(
        <div className="errors">
            <h2 className="error_text">
                Oops, this page doesn't exist. Jokes on us! 
            </h2>
            <div className="error_question">
                {joke.question}
            </div>
            <div className="error_answer">
                {joke.answer}
            </div>
            <div>
                <img className="gif" src="./funny_haircut.gif" alt="" />
            </div>
        
        </div>
    )

}

export default Error