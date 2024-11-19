import '../styles/components/board-member-card.css';

interface BoardMemberProps {
  fullName: string,
  hackerTag: string,
  position: string,
  imageSrc?: string,
  email?: string,
};

function BoardMemberCard({ fullName, hackerTag, position, imageSrc, email }: BoardMemberProps) {
  return (
    <div className='board-member-card'>
      {imageSrc
        ? <img src={imageSrc} alt={fullName} />
        : <img src='/contact/placeholder.png' alt={fullName} />}
      <div className='board-member-info'>
        <span className='name'>{fullName} @{hackerTag}</span>
        <span className='position'>{position}</span>
        {email
          ? <a className='email' href={`mailto:${email}`}>{email}</a>
          : <span className='email'>(mail coming soon)</span>}
      </div>
    </div>
  )
}

export default BoardMemberCard;
