import { useState } from "react";
import { MdAdd, MdClose } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";
import PropTypes from "prop-types";

const TagInput = ({ tags, setTags }) => {
  const [inputValue, setInputValue] = useState("");

  const addNewTag = () => {
    if (inputValue.trim() !== "")
    {setTags([...tags, inputValue.trim()]);
    setInputValue("");}
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addNewTag();
    }
  }

    const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  }
  return (
    <div>
        {tags.length > 0 && (
            <div className="flex items-center flex-wrap gap-2 mt-2">
            {tags.map((tag, index) => (
                <span key={index} 
                    className="flex items-center gap-2 text-cyan-600 px-3 py-1 rounded text-sm bg-cyan-200/40"
                >
                    <GrMapLocation className="text-cyan-500" />
                    {tag}
                    <button onClick={() => handleRemoveTag(tag)}
                        // className="text-slate-400 hover:text-slate-600"
                    >
                        <MdClose className="text-lg" />
                    </button>
                </span>
            ))}
            </div>
        )}
            
      <div className="flex items-center gap-4 mt-3">
        <input
          type="text"
          value={inputValue}
          className="text-sm bg-transparent border px-3 py-2 rounded outline-none"
          placeholder="Add Location"
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />

        <button className="w-8 h-8 flex items-center justify-center rounded border border-cyan-500 hover:bg-cyan-500" onClick={addNewTag}>
          <MdAdd className="text-2xl text-cyan-500 hover:text-white" />
        </button>
      </div>
    </div>
  );
};
TagInput.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  setTags: PropTypes.func.isRequired,
};

export default TagInput;
