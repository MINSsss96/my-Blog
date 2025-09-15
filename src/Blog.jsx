function Blog({ title, like, createDate, handleTitle, setLike }) {
  return (
    <div className='list'>
      {title.map((item, index) => (
        <div key={index}>
          <h4 onClick={() => handleTitle(index)}>
            {item}
            <span
              onClick={(e) => {
                e.stopPropagation(); // 제목 클릭과 좋아요 클릭 충돌 방지
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
        </div>
      ))}
    </div>
  );
}

export default Blog;