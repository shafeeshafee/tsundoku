import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "../Css/BookView.css";

const BookView = (props) => {
	return (
		<div className={`book-body absolute z-10 ${props.toggleShow} font-title`}>
			<ScrollAnimation duration={2} animateOnce={true} animateIn="fadeIn">
				<div className="cover">
					<div className="book">
						<label for="page-1" className="book__page book__page--1">
							<img src="https://i.imgur.com/VzDAnR0.jpg" alt="" />
						</label>

						<label for="page-2" className="book__page book__page--4">
							<div className="page__content">
								<h1 className="page__content-title">I</h1>

								<div className="page__content-blockquote">
									<p className="page__content-blockquote-text font-title text-dark">
										JAMES BALDWIN — . . . You think your pain and your heartbreak are unprecedented in the history of the world, but then
										you read. It was Dostoevsky and Dickens who taught me that the things that tormented me most were the very things that
										connected me with all the people who were alive, or who ever had been alive. Only if we face these open wounds in
										ourselves can we understand them in other people. . .{" "}
									</p>

									<span className="page__content-blockquote-reference pt-5">
										The Doom and Glory of Knowing Who You Are, — <br />
										<em>Life Magazine, May 24, 1963</em>.
									</span>
								</div>
								<div className="page__number">3</div>
							</div>
						</label>

						<input type="radio" name="page" id="page-1" />

						<input type="radio" name="page" id="page-2" />
						<label className="book__page book__page--2">
							<div className="book__page-front">
								<div className="page__content">
									<h1 className="page__content-book-title font-title">tsundoku</h1>
									<h2 className="page__content-author">BOOKS ARE HERE TO STAY</h2>

									<p className="page__content-credits">
										A PROJECT by
										<span>Jahaziel Israel</span>
										<span>Shan Siddiqui</span>
										<span>Diana Gaona</span>
										<span>Shafee Ahmed</span>
									</p>

									<p className="page__content-credits">
										BASED in
										<span>NEW YORK CITY</span>
									</p>

									<div className="page__content-copyright">
										<p>THE SAVE BOOKS SOCIETY</p>
										<p>NYC - MMXXI</p>
									</div>
								</div>
							</div>
							<div className="book__page-back">
								<div className="page__content">
									<h1 className="page__content-title">Contents</h1>
									<table className="page__content-table">
										<tr>
											<td align="left">Part I</td>
											<td align="left">Strand Book Store</td>
											<td align="right">3</td>
										</tr>
										<tr>
											<td align="left">Part II</td>
											<td align="left">Three Lives & Company</td>
											<td align="right">43</td>
										</tr>
										<tr>
											<td align="left">Part III</td>
											<td align="left">Mysterious Book Shop</td>
											<td align="right">87</td>
										</tr>
										<tr>
											<td align="left">Part IV</td>
											<td align="left">The Corner Bookstore</td>
											<td align="right">147</td>
										</tr>
										<tr>
											<td align="left">Part V</td>
											<td align="left">East Village Books</td>
											<td align="right">173</td>
										</tr>
									</table>

									<div className="page__number">2</div>
								</div>
							</div>
						</label>
					</div>
				</div>
			</ScrollAnimation>
		</div>
	);
};

export default BookView;
