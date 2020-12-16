import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import axios from 'axios';
import Link from 'next/link';

const Center = styled.div`
  display:flex;
  justify-content: center;
`;

function GetUuid() {
  const [uuid, setUuid] = useState('');

  const  getData = async () => { 
    const result = await axios.get('/api/uuid/')
    setUuid(result.data.uuid)
}

  // "화면" 에 마운트가 된 이후 동작한다.
  // 중요한점은 useEffect를 사용하면 화면이 렌더가 된 후 데이터를 불러오기 때문에
  // SSR에서는 해당 데이터를 받을 수가 없다.

  // 그렇기때문에 서버사이드 렌더링에 반영이 되어야 하는 내용인지,
  // 안되어도 되는 내용인지 판단하고 구현해야한다.
  useEffect(() => {
    getData()
  },[])


  return (
    <>
      <Center>
        {uuid}
      </Center>
      <Center>
        <Link href="/">
          <a>
            돌아가기
          </a>
        </Link>
      </Center>
    </>
  )
}

export default GetUuid;