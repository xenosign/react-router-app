import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Header from "./Header";

export default function BoardDetail() {
  const { boardID } = useParams();
  const { search, pathname, hash } = useLocation();
  return (
    <>
      <Header />
      <h2>{boardID} 번 게시글 입니다!</h2>
      <p>쿼리 : {search}</p>
      <p>주소 : {pathname}</p>
      <p>해쉬 : {hash}</p>
    </>
  );
}
