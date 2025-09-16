import { useState } from 'react';
import './App.css'
import Modal from './Modal';
import Blog from './Blog';
import Title from './Title';

function App() {
  const [title, setTitle] = useState([
    '남자코트추천',
    '강남우동맛집',
    '자바스터디'
  ]);

  const [createDate, setCreateDate] = useState([
    '2025-05-01',
    '2025-06-01',
    '2025-07-01',
  ]);

  const [details, setDetails] = useState([
    '겨울에 입기 좋은 남자 코트 추천 모음',
    '강남에서 진짜 맛있는 우동집',
    '스터디 모임: 자바 기초부터 심화까지'
  ]);

  const [like, setLike] = useState([0, 0, 0]);
  const [modal, setModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');

  function handleTitle(index) {
    if (!modal) {
      setModal(true);
      setCurrentIndex(index);
    } else if (currentIndex === index) {
      setModal(false);
    } else {
      setCurrentIndex(index);
    }
  }

  function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  function addPost() {
    if (newTitle.trim() === '') {
      alert('제목이 비어있어요');
      return;
    }
    if (newContent.trim() === '') {
      alert('내용이 비어있어요');
      return;
    }

    setTitle([newTitle, ...title]);
    setDetails([newContent, ...details]);
    setCreateDate([getCurrentDate(), ...createDate]);
    setLike([0, ...like]);

    setNewTitle('');
    setNewContent('');
  }

  return (
    <div className='App'>
      <Title />

      <button onClick={() => {
        const sortedTitle = [...title].sort();
        setTitle(sortedTitle);
      }}>
        글 정렬하기
      </button>

      <Blog
        title={title}
        like={like}
        createDate={createDate}
        details={details}
        handleTitle={handleTitle}
        setLike={setLike}
      />

      {modal ? (
        <Modal
          color="lightblue"
          title={title}
          currentIndex={currentIndex}
          createDate={createDate}
          details={details}
        />
      ) : null}

      <input
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        type='text'
        placeholder='글 제목을 입력하세요'
      />
      <br />
      <input
        onChange={(e) => setNewContent(e.target.value)}
        value={newContent}
        type='text'
        placeholder='내용을 입력하세요'
      />
      <button onClick={addPost}>등록하기</button>
    </div>
  );
}

export default App;
