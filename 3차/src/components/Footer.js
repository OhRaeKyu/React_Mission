import React from "react";
import styled from "styled-components";

export default function Footer() {
	return (
		<FooterContainer>
			<div className="footer-content">
				<h2>넷플릭스 대한민국</h2>
				<ul>
					<li>
						<a href="#">넷플릭스 소개</a>
					</li>
					<li>
						<a href="#">고객 센터</a>
					</li>
					<li>
						<a href="#">미디어 센터</a>
					</li>
					<li>
						<a href="#">이용약관</a>
					</li>
					<li>
						<a href="#">개인정보</a>
					</li>
					<li>
						<a href="#">회사정보</a>
					</li>
					<li>
						<a href="#">문의하기</a>
					</li>
					<li>
						<a href="#">법적 고지</a>
					</li>
				</ul>
				<p>@Netflix Rights Reserved.</p>
			</div>
		</FooterContainer>
	);
}

const FooterContainer = styled.div`
	position: relative;
	padding: 4rem 0;
	border-top: 1px solid rgba(25, 25, 25, 1);

	z-index: 100;

	.footer-content {
		width: 50rem;
		max-width: calc(100% - 6rem);
		margin: 0 auto;
		h2 {
			color: gray;
			font-size: 1.8rem;
		}
		ul {
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			margin-top: 3rem;

			li {
				a {
					display: block;
					color: gray;
					font-size: 1.4rem;
					padding: 1rem 0;
					&:hover {
						text-decoration: underline;
					}
				}
			}
		}

		p {
			color: #fff;
			text-align: center;
			margin-top: 3rem;
			font-size: 1.4rem;
		}
	}
`;
