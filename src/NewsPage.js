import { useParams } from "../node_modules/react-router/index";
import Categories from "./Categories";
import NewsList from "./NewsList";

function NewsPage() {
    const params = useParams();
    //카테고리 기본값: all
    const category = params.category || 'all';
    return (
        <>
            <Categories />
            <NewsList category={category} />
        </>
    )
}

export default NewsPage;