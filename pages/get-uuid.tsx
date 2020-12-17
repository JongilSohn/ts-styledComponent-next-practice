import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import axios from 'axios';
import Link from 'next/link';

const Center = styled.div`
  display:flex;
  justify-content: center;
`;

function GetUuid(props) {
  console.log("render")
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
  // useEffect(() => {
  //   getData()
  // },[])

  console.log(props.debug)

  return (
    <>
      <Center>
        <h1>{props.label} :   </h1>
        <h1>{props.uuid}</h1>
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

// getInitialProps

// SSR을 할 때, 데이터를 미리 받아서 끼운 상태로 마운트 되게 하려면
// getInitialProps를 이용하여 props로 받아 데이터받은 후 SSR시킬 수 있다.

// 즉 getInitialProps에서 동작한 함수는 서버와 클라이언트에서 둘 다 동작한다.
// 또한 pages 아래에서만 getInitialProps 동작 가능하다.
// 즉 페이지스에서 데이터를 받아서 props로 컴포넌츠 폴더로 넘겨주는 식이 되어야한다.
GetUuid.getInitialProps = async function() {
  console.log("getInitialProps")
  const result = await axios.get('http://localhost:3000' + '/api/uuid/')
  return {
    label: "UUID",
    uuid: result.data.uuid
  }
}

export default GetUuid;