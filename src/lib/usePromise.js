import { useEffect, useState } from "react";

export default function usePromise(promiseCreator,deps) {
    // 대기중/완료/실패에 대한 상태관리
    const [loading,setLoading] = useState(false);
    const [resolved, setResolved] = useState(null);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const process = async () => {
            setLoading(true); //로딩중입니다.
            try{
                // promiseCreator() 함수(아마도 axois나 fetch)로 데이터를 가져와라
                const resolved = await promiseCreator();
                // 데이터 입력완.
                setResolved(resolved);
            } catch(err) {
                //에러낫다 ㅅㅂ
                //에러세팅완.
                setError(err)
            }
            //로딩끝^^
            setLoading(false);
        };
        process();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },deps);
    //deps는 useEffect의 의존배열이다... 나중에 이 usePromise 함수가 쓰일 때마다 달라지지...
    
    return[loading,resolved,error]
}