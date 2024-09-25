function DocumentLink({ link, label, saveAs }) {
  return (
    <div className='document-link'>
      <span>📄</span>
      <a download={saveAs} href={link}>{label ? label : link}</a>
    </div>
  );
}

export default DocumentLink;
