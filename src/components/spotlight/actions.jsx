import React from 'react';

const ActionAdd = props => {
  return(
    <ul className='spotlight-actions'>
      <li className='spotlight-actions-item'>
        <button
          type='button'
          className='svg-icon-btn tooltip'
          data-tooltip="Add to"
          onClick={ props.onAddTheShowToQueue }
        >
          <svg className="svg-icon svg-icon-add" focusable="false" height="1em" width="1em" viewBox="0 0 12 12" aria-hidden="true"><path d="M6 1.5v9M1.5 6h9" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
        </button>
      </li>
      <li className='spotlight-actions-item'>
        <button
          type='button'
          className='svg-icon-btn tooltip'
          data-tooltip="Add to favorite"
          onClick={ props.onAddTheShowToQueue }
        >
          <svg className="svg-icon svg-icon-love-outline" focusable="false" height="1em" width="1em" viewBox="0 0 12 12" aria-hidden="true">
            <path className="svg-path" fill="none" strokeWidth="1.2" d="M6 10.77a26.815 26.815 0 0 0 2.595-2.087c.996-.913 1.78-1.8 2.267-2.612.356-.594.538-1.124.538-1.571 0-1.734-1.207-2.9-2.65-2.9-.616 0-1.17.229-1.656.619a3.006 3.006 0 0 0-.595.614L6 3.582l-.5-.75a3.006 3.006 0 0 0-.593-.613C4.42 1.829 3.867 1.6 3.25 1.6 1.807 1.6.6 2.766.6 4.5c0 .447.182.977.538 1.571.488.812 1.271 1.699 2.267 2.612A26.815 26.815 0 0 0 6 10.77z"></path>
          </svg>
        </button>
      </li>
    </ul>
  )
}

export default ActionAdd;