import '../styles/components/board-member-card.css';

function BoardMemberCard({ fullName, hackerTag, position, imageSrc, email }) {
  return (
    <div className='board-member-card'>
      <img src={imageSrc} alt={fullName} />
      <div className='board-member-info'>
        <span className='name'>{fullName} @{hackerTag}</span>
        <span className='position'>{position}</span>
        {email
          ? <a className='email' href={`mailto:${email}`}>{email}</a>
          : <span className='email'>(mail comming soon)</span>}
      </div>
    </div>
  )
}

export default BoardMemberCard;
