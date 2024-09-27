import '../styles/components/document-link.css';

function DocumentLink({ link, label, saveAs }) {
  return (
    <span className='document-link'>
      <a download={saveAs} href={link}>
        <span className='icon'>📄</span>
        <span className='label'>{label ? label : link}</span>
      </a>
    </span>
  );
}

export default DocumentLink;
