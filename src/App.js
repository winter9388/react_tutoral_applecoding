import React, { useState } from "react";
import "./App.css";

function App() {
	let [textTitle, chTextTitle] = useState([
		"남자 코트 추천",
		"남자 바지 추천",
		"곱창 맛집",
	]);
	let [like, chLike] = useState([0, 0, 0]);
	let [modal, chModal] = useState(false);
	let [titleNum, chTitleNum] = useState(0);
	let [input, chInput] = useState("");

	// 좋아요 버튼 개별 동작 기능 개발 - like = [...like] 강제 리랜더링 (참조값 변경을 통해서)
	function upLike(i) {
		like[i] = like[i] + 1;
		like = [...like];
		return like;
	}
	// 게시글 새로 등록
	function makeTitle() {
		let newTextTitle = [...textTitle];
		newTextTitle.unshift(input);
		return newTextTitle;
	}
	// 게시글 등록에 따른 like함수 배열 추가
	function makeLike() {
		let newLike = [...like];
		newLike.unshift(0);
		return newLike;
	}

	return (
		<div className="App">
			<div className="black-nav">개발 blog</div>

			{textTitle.map(function (text, i) {
				return (
					<div className="list" key={i}>
						<h3
							onClick={() => {
								chTitleNum(i);
							}}
						>
							{text}
							<span
								onClick={() => {
									chLike(upLike(i));
								}}
							>
								{" "}
								👍
							</span>{" "}
							{like[i]}
						</h3>
						<p>2월 18일 등록</p>
						<hr></hr>
					</div>
				);
			})}

			<div className="publish">
				<input
					onChange={(e) => {
						chInput(e.target.value);
					}}
				/>
				<button
					onClick={() => {
						chTextTitle(makeTitle);
						chLike(makeLike);
					}}
				>
					저장
				</button>
			</div>

			<button
				onClick={() => {
					chModal(!modal);
				}}
			>
				열고닫기
			</button>
			{modal === true ? (
				<Modal textTitle={textTitle} titleNum={titleNum}></Modal>
			) : null}
		</div>
	);
}

function Modal(props) {
	return (
		<div className="modal">
			<h3>{props.textTitle[props.titleNum]}</h3>
			<p>날짜</p>
			<p>상세 내용</p>
		</div>
	);
}

export default App;
