function Blog({ title, like, createDate, details, handleTitle, setLike, deletePost }) {
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
              {/* 삭제 이미지 넣기 */}
            
              &nbsp;
              <span onClick={(e) => {
  e.stopPropagation(); // 제목 클릭 이벤트랑 충돌 방지
  deletePost(index);
}}>🔥</span>
          </h4>
          <p>작성일 : {createDate[index]}</p>
          <p>내용 : {details[index]}</p>
        </div>
      ))}
    </div>
  );
}

export default Blog;