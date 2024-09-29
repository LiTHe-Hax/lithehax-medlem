import '../styles/components/document-link.css';

interface DocumentLinkProps {
  link: string,
  label: string,
  saveAs?: string,
};

function DocumentLink({ link, label, saveAs }: DocumentLinkProps) {
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
