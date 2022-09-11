import { faImage, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faAngleDown, faAngleUp, faUpRightAndDownLeftFromCenter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Editor } from '@tinymce/tinymce-react';
import React, { useEffect, useRef, useState } from 'react'
import TimezoneSelect from 'react-timezone-select'
import { useOnClickOutside } from '../../../hooks';
import './styles.css'

function UserProfile() {
  useEffect(() => {
    let brandEl = document.querySelector(".tox-statusbar__branding svg");
    brandEl?.remove()
  }, [])

  return (
    <div className='up-container'>
      <AboutMe />
      <TimeZone />
      <InfoComp name={"Location"} />
      <InfoComp name={"Website"} />
      <ImageComp name={'Profile Header'} />
      <ImageComp name={'Use Card Background'} />
      <FeaturedTopic />
      <DateOfBirth />
      <button className='save-btn'>Save Changes</button>
    </div>
  )
}

let DateOfBirth = () => {
  return (
    <div className='dob-wrapper'>
      <RenderMonths />
      <RenderDays />
    </div>
  )
}

let RenderDays = () => {
  let [showDropdown, setShowDropdown] = useState(false);

  let toggleDD = () => setShowDropdown(!showDropdown);

  let closeDD = () => setShowDropdown(false);

  let days = Array.from({ length: 30 }, (_, i) => i + 1)

  let ref = useRef(null)

  // let renderDays = () => days.map(day => <option key={day}>{day}</option>)
  let renderDays2 = () => days.map(day => <li key={day} onClick={closeDD}>{day}</li>)

  useOnClickOutside(ref, closeDD)

  return (
    <div className='rd-wrapper' ref={ref}>
      <FontAwesomeIcon icon={ showDropdown ? faAngleUp : faAngleDown} className='svg-elem' onClick={toggleDD} />
      {
        showDropdown
          ?
          <ul className='render-days'>
            {renderDays2()}
          </ul>
          :
          null
      }
    </div>
  )
}

let RenderMonths = () => {
  let [showDropdown, setShowDropdown] = useState(false);

  let toggleDD = () => setShowDropdown(!showDropdown);

  let closeDD = () => setShowDropdown(false);

  let ref = useRef(null)

  useOnClickOutside(ref, closeDD)

  let months = ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "October", "November", "December"];

  let renderOptions = () => months.map(name => <li key={name} onClick={closeDD}>{name}</li>)

  return (
    <div className='rm-wrapper' ref={ref}>
      <FontAwesomeIcon icon={ showDropdown ? faAngleUp : faAngleDown} className='svg-elem' onClick={toggleDD} />
      {
        showDropdown
          ?
          <ul className='render-months'>
            {renderOptions()}
          </ul>
          :
          null
      }
    </div>
  )
}

let FeaturedTopic = () => {
  return (
    <div className='ft-wrapper'>
      <h2>Featured Topic</h2>
      <button>Select a New Topic</button>
      <p>A link to this topic will be on your user card and profile</p>
    </div>
  )
}

let ImageComp = ({ name }) => {
  let [imageFile, setImageFile] = useState(null)

  let inputRef = useRef(null)

  let activateImageFileSelecton = () => inputRef.current.click()

  let handleImageFileChange = evt => setImageFile(evt.target.files[0])

  return (
    <div className='imgc-wrapper'>
      <h2>{name}</h2>
      <figure className='fig-wrapper'>
        <div className='svgs-div'>
          <span>
            <FontAwesomeIcon icon={faImage} className='svg-icon' onClick={activateImageFileSelecton} />
            <FontAwesomeIcon icon={faTrashCan} className='svg-icon' />
            <UploadFile inputRef={inputRef} changeHandler={handleImageFileChange} />
          </span>
          <span>
            <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} className='svg-icon' />
          </span>
        </div>
        <img className='img-elm' src={handleMediaFileChecks(imageFile)} />
        <figcaption>{name} will be centered</figcaption>
      </figure>
    </div>
  )
}

let UploadFile = ({ changeHandler, inputRef }) => {
  return <input type='file' ref={inputRef} name='image-file' onChange={changeHandler} accept="image/png, image/jpeg, svg, jpg" style={{ display: 'none' }} />
}

let handleMediaFileChecks = (mediaFile) => {
  let mediaSrc = mediaFile;
  if (mediaFile instanceof File || mediaFile instanceof Blob || mediaFile instanceof MediaSource) {
    mediaSrc = URL.createObjectURL(mediaFile)
  }
  return mediaSrc;
}

let InfoComp = ({ name }) => {
  return (
    <label className='ic-wrapper'>
      <h2>{name}</h2>
      <input type={'text'} />
    </label>
  )
}

let TimeZone = () => {
  // let [timezone, setTimezone] = useState('Dhaka')
  // let [timezone, setTimezone] = useState(Intl.DateTimeFormat().resolvedOptions().timeZone)
  let [timezone, setTimezone] = useState(Intl.DateTimeFormat().resolvedOptions().timeZone)
  let [tz, setTz] = useState(null)

  useEffect(() => setTz(timezone), [timezone])

  let currentTimezone = () => setTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone)

  return (
    <div className='tz-wrapper'>
      <h2>Time Zone</h2>

      <TimezoneSelect
        value={timezone}
        onChange={setTimezone}
      />

      <button onClick={currentTimezone}>Current Timezone</button>
      <pre>{JSON.stringify(tz?.value, null, 2)}</pre>

    </div>
  )
}

let AboutMe = () => {
  const editorRef = useRef(null);

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
          plugins: ['emoticons', 'lists', 'link', 'preview', 'help', 'wordcount', 'code'],
          toolbar:
            'preview | bold italic | alignleft aligncenter' +
            'alignright alignjustify | bullist numlist outdent indent | code link image emoticons ',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />

      {/* <div
        dangerouslySetInnerHTML={}
      /> */}
    </div>
  );
}

// let RenderDays = () => {
//   let days = Array.from({length: 30}, (_, i) => i + 1)
//   let renderDays = () => days.map(day => <option key={day}>{day}</option>)
//   return (
//     <select className='render-days'>
//       <option></option>
//       {renderDays()}
//     </select>
//   )
// }

// let RenderMonths = () => {
//   let months = ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "October", "November", "December"];
//   let renderOptions = () => months.map(name => <option key={name}>{name}</option>)
//   return (
//     <select className='render-months'>
//       <option></option>
//       {renderOptions()}
//     </select>
//   )
// }


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