function BoardMemberCard({ fullName, hackerTag, position, imageSrc, email }) {
  return (
    <div className='board-member-card'>
      <img src={imageSrc} alt={fullName} />
      <span>{fullName} @{hackerTag}</span>
      <span>{position}</span>
      {email
        ? <a href={`mailto:${email}`}>{email}</a>
        : <span>(mail comming soon)</span>}
    </div>
  )
}

export default BoardMemberCard;
