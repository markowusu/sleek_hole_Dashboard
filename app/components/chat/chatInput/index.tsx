'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip, faSmile, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { useState,useRef, ChangeEvent } from 'react';
function ChatInput() {
  const [text, setText] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInputChange = (event:ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    setText(value);
    adjustRows();
  };

  const adjustRows = () => {
    const textarea = textareaRef.current;
    if (!textarea) return; 
    (textarea as HTMLTextAreaElement).style.height = 'auto'; 
    (textarea as HTMLTextAreaElement).style.height = `${(textarea as HTMLTextAreaElement).scrollHeight}px`;
    
  };
  return (
    <div className="absolute bottom-0  w-[260px]  right-0  flex items-center justify-between  md:border-t-0 dark:border-white/20 
     md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient bg-white dark:bg-gray-800 md:!bg-transparent
     dark:md:bg-vert-dark-gradient pt-2 md:pl-4 md:mx-8">
  <form className="flex flex-row gap-3 mx-2 stretch last:mb-2 md:mx-4 md:last:mb-2 lg:mx-auto lg:max-w-2xl xl:max-w-3xl">
    <div className="relative flex items-stretch flex-1 h-full md:flex-col" role="presentation">
      <div className="flex flex-col w-full py-[10px] flex-grow md:py-4 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white
       dark:bg-gray-700 rounded-xl shadow-xs dark:shadow-xs">
      <button className="text-[#C8C7C8] pr-2 ml-1 absolute left-0 p-1 rounded-md md:bottom-2 md:p-2  dark:hover:bg-gray-900 dark:disabled:hover:bg-transparent 
           disabled:text-gray-400 enabled:bg-brand-purple  bottom-1.5 transition-colors disabled:opacity-40">
           <FontAwesomeIcon icon={faSmile} className="flex-shrink-0 w-4 h-4" />
         </button>
        <textarea
          id="prompt-textarea"
          tabIndex={0}
          ref={textareaRef}
          data-id="request-:R1j9dm:-57"
          style={{ maxHeight: "100px", height: "24px", overflowY: "hidden" }}
          rows={1}
          value={text}
          onChange={handleInputChange}
          placeholder="Send a message"
          className="h-full p-0 pl-3 pr-10 m-0 mx-4 overflow-y-auto bg-transparent border-0 resize-none dark:bg-transparent md:pr-12 md:pl-0 focus:outline-none"
        ></textarea>

<div className="flex space-x-2 absolute rounded-md md:bottom-2  md:right-2  
          right-2  text-white bottom-1.5 transition-colors disabled:opacity-40">
         <button className="text-[#C8C7C8]  rounded-md p-2 flex-shrink-0 overflow-ellipsis dark:hover:bg-gray-900 dark:disabled:hover:bg-transparent
          disabled:text-gray-400  enabled:bg-brand-purple">
           <FontAwesomeIcon icon={faPaperclip} className="flex-shrink-0 w-4 h-4"/>
         </button>
        
         <button className="text-[#C8C7C8] p-2 rounded-md  dark:hover:bg-gray-900 dark:disabled:hover:bg-transparent disabled:text-gray-400  enabled:bg-brand-purple">
         <span className="flex-shrink-0 w-4 h-4" data-state="closed">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="none"
              className="w-4 h-4 m-1 md:m-0"
              strokeWidth="2"
            >
              <path d="M.5 1.163A1 1 0 0 1 1.97.28l12.868 6.837a1 1 0 0 1 0 1.766L1.969 15.72A1 1 0 0 1 .5 14.836V10.33a1 1 0 0 1 .816-.983L8.5 8 1.316 6.653A1 1 0 0 1 .5 5.67V1.163Z" fill="currentColor"></path>
            </svg>
          </span>
         </button> 
       </div>
      </div>
    </div>
  </form>
</div>
  );
}

export default ChatInput;
