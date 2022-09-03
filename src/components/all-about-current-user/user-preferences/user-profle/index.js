import { Editor } from '@tinymce/tinymce-react';
import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom';
import './styles.css'

function UserProfile() {
   useEffect(() => {
    let brandEl = document.querySelector(".tox-statusbar__branding svg");
    brandEl?.remove()
  }, [])

  return (
    <div className='up-container'>
      <AboutMe />      
    </div>
  )
}

let AboutMe = () => {
  const editorRef = useRef(null);
  // let params = useParams();

  // useEffect(() => {
  //   let brandEl = document.querySelector("span.tox-statusbar__branding");
  //   brandEl?.remove()
  // }, [params.tabName])

  // console.log(params, "<<params>>")

  return (
    <div className='am-wrapper'>
      <h2>About Me</h2>
      <Editor
        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue='<p>Remove Me First And Happy WISIWYG-ing.</p>'
        init={{
          height: 270,
          menubar: false,
          plugins: ['emoticons', 'lists', 'link', 'preview', 'help', 'wordcount'],
          toolbar: 
            'bold italic | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | link image emoticons |',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />
    </div>
  );
}

// let AboutMe = () => {
//   const editorRef = useRef(null);
//   const log = () => {
//     if (editorRef.current) {
//       console.log(editorRef.current.getContent());
//     }
//   };
//   return (
//     <>
//       <Editor
//         tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
//         onInit={(evt, editor) => editorRef.current = editor}
//         initialValue='<p>This is the initial content of the editor.</p>'
//         init={{
//           height: 170,
//           menubar: false,
//           plugins: [
//             'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
//             'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
//             'insertdatetime', 'media', 'table', 'preview', 'help', 'wordcount',
//             'emoticons'
//           ],
//           toolbar: 'undo redo | blocks | ' +
//             'bold italic forecolor | alignleft aligncenter ' +
//             'alignright alignjustify | bullist numlist outdent indent | ' +
//             'forecolor backcolor emoticons | help',
//           content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
//         }}
//       />
//       {/* <button onClick={log}>Log editor content</button> */}
//     </>
//   );
// }

// let AboutMe = () => {
//   let [html, setHtml] = useState(null);
//   let updateHtmlChange = evt => setHtml(evt.target.value)

//   return (
//     <div className='am-wrapper'>
//       <h2>About Me</h2>
//       <DefaultEditor value={html} onChange={updateHtmlChange} style={{textAlign: "justify", minHeight: "170px"}} />
//     </div>
//   )
// }

export default UserProfile