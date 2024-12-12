import React from "react";

const FaqItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className={`${isOpen ? '' : 'closed'}`}>
      <button
        onClick={onToggle}
      >
        <h3 className="">{question}</h3>
        {isOpen ? (
          <span>
            hide
          </span>
        ) : (
          <span>
            show
          </span>
        )}
      </button>

      <div className="answer">
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default FaqItem;