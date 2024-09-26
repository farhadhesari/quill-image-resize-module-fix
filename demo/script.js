var quill = new Quill("#editor", {
	theme: "snow",
	modules: {
		toolbar: {
			container: [
				[{ font: [] }, { size: [] }], // Font and size
				["bold", "italic", "underline", "strike"], // Bold, italic, underline, strikethrough
				[{ color: [] }, { background: [] }], // Font color and background color
				[{ script: "sub" }, { script: "super" }], // Subscript and superscript
				[{ header: 1 }, { header: 2 }], // Headers (1 and 2)
				[{ list: "ordered" }, { list: "bullet" }], // Lists (ordered, bullet)
				[{ indent: "-1" }, { indent: "+1" }], // Indent (outdent, indent)
				[{ direction: "rtl" }], // Text direction
				[{ align: [] }], // Text alignment
				["link", "image", "video"], // Links, images, and videos
				["clean"], // Remove formatting (clean button)
				["blockquote", "code-block"], // Blockquote and code block
			],
		},
		imageResize: {},
	},
});
