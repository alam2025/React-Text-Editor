import "react-quill/dist/quill.snow.css";
import "./App.css";
import ReactQuill from "react-quill";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");

  const handleChange = (content) => {
    setValue(content);
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
  ];

  const editorStyles = {
    fontFamily: `Helvetica', sans-serif`,
    fontSize: "16px",
  };

  return (
    <>
      <div className="w-1/2 flex flex-col justify-center items-center h-screen mx-auto">
        <ReactQuill
          theme="snow"
          value={value}
          onChange={handleChange}
          modules={modules}
          formats={formats}
          placeholder="Start typing here..."
          style={{ ...editorStyles, height: "300px" }}
        />
      </div>
    </>
  );
}

export default App;
