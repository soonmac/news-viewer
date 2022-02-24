
import styled from 'styled-components';
import axios from '../node_modules/axios/index';
import usePromise from './lib/usePromise';
import NewsItem from './NewsItem';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
function NewsList({ category }) {
  // const [articles, setArticles] = useState(null);
  // const [loading, setLoading] = useState(false);
  const [loading, response, error] = usePromise(() => {
      //어이.. 이 밑은 promiseCreator다...
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=a5ee1fb9d67341ec941a37c89cfc3283`,
    );
  }, [category]);
  //category가 달라질 때마다 렌더링해야함


  // useEffect(()=>{
  //     //async를 사용하는 함수 따로 선언
  //     const fetchData = async() => {
  //         setLoading(true);
  //         try {
  //             const query = category === 'all' ? '': `&category=${category}`;
  //             const response = await axios.get(
  //                 `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=a5ee1fb9d67341ec941a37c89cfc3283`
  //             );
  //             setArticles(response.data.articles)
  //         } catch(err) {
  //             console.log(err)
  //         }
  //         setLoading(false);
  //     }
  //     fetchData();
  // },[category])

  // 대기중일 때
  if (loading) {
    return <NewsListBlock>대기중</NewsListBlock>;
  }
  //아직 response 값이 설정되지 않았을 때(article 값이 null일 때)
  if (!response) {
    return null;
  }
  // 아직 response 값이 설정되지 않을때
  if (error) {
    return <NewsListBlock>에러 발생!</NewsListBlock>;
  }
  //article 값이 잇음 (article 값이 잇음)
  const { articles } = response.data;
  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
}

export default NewsList;
