function Blog({ title, like, createDate, details, handleTitle, setLike }) {
  return (
    <div className='list'>
      {title.map((item, index) => (
        <div key={index}>
          <h4 onClick={() => handleTitle(index)}>
            {item}
            <span
              onClick={(e) => {
                e.stopPropagation();
                const newLikes = [...like];
                newLikes[index]++;
                setLike(newLikes);
              }}
            >
              👍
            </span>
            {like[index]}
          </h4>
          <p>작성일 : {createDate[index]}</p>
          <p>내용 : {details[index]}</p>
        </div>
      ))}
    </div>
  );
}

export default Blog;