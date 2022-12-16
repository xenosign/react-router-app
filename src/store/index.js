// 통합 관리 파일
import { combineReducers } from "redux";
import mbti from "./modules/mbti";
import todo from "./modules/todo";

export default combineReducers({
  todo,
  mbti,
});
