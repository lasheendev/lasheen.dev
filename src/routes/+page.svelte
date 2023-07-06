<script>
	import editor from '../assets/images/illustration-editor.svg';
	import laptop from '../assets/images/illustration-laptop.svg';

	import phone from '../assets/images/illustration-phones.svg';
</script>

<svelte:head>
	<title>lasheen.dev | Portfolio</title>
	<meta name="title" content="lasheen.dev | portfolio" />
	<meta
		name="description"
		content="Welcome to lasheen.dev, your premier destination for cutting-edge software development solutions. As an up and coming software development agency, we are dedicated to providing our clients with innovative and customized software solutions that empower their businesses in the digital age. With a team of highly skilled and experienced software engineers, designers, and project managers, we offer a wide range of services tailored to meet the unique needs of each client. From concept to deployment, we are committed to delivering top-notch software products that drive efficiency, enhance user experiences, and maximize business potential. Contact us today to discuss your software development needs and let us help you unlock the true potential of your business through innovative technology solutions."
	/>
</svelte:head>

<main>
	<section id="intro">
		<h1>Turn your amazing ideas into reality</h1>
		<div id="eval">
			<h2>Book an evaluation now for free. And get a price quote the same day guarnteed</h2>
			<em>Special prices for NPOs</em>
			<div class="row">
				<a href="/contact" class="btn primary">CONTACT US</a>
				<a href="/projects" class="btn secondary">VIEW WORK</a>
			</div>
		</div>
	</section>
	<section id="design">
		<div class="paragraph">
			<article>
				<div>
					<h2>Cutting-Edge Programming Solutions for Streamlined Development</h2>
					<p>
						At lasheen.dev, we specialize in providing cutting-edge software development services to
						help businesses transform their ideas into reality. Our expert team of programmers is
						well-versed in the latest programming languages and technologies, ensuring that we
						deliver high-quality solutions tailored to meet your specific needs. Whether you require
						a web application, mobile app, or desktop software, we have the expertise to architect
						and design efficient and user-friendly solutions.
					</p>
				</div>
			</article>
			<div class="backgroundImg">
				<img src={editor} alt="Editor" />
				<!-- <img src={editorMobile} alt="Editor" /> -->
			</div>
		</div>
	</section>
	<section id="art">
		<img id="phone" src={phone} alt="Phone" />

		<article>
			<h1>Mobile App Development</h1>
			<p>
				With our expertise in mobile app development, we empower your business to leverage the full
				potential of mobile technology. Whether you need a consumer-facing app, an enterprise
				solution, or a gaming application, we can bring your ideas to life. From concept to
				deployment, we handle every aspect of the development process, ensuring that your app meets
				the highest standards of performance, usability, and security. Partner with us to deliver a
				mobile experience that keeps your customers coming back for more.
			</p>
		</article>
	</section>
	<section id="reason">
		<div class="paragraph">
			<div class="backgroundImg2">
				<img src={laptop} alt="Laptop" />
				<!-- <img src={laptopMobile} alt="Laptop" /> -->
			</div>
			<article>
				<div>
					<h2>Desktop and Web Development</h2>
					<p>
						In addition to mobile app development, we offer
						top-notch desktop and web development services. With our expertise in multiple
						programming languages, frameworks, and platforms, we have the versatility to build
						powerful solutions for any platform. Whether you need a desktop software application, a
						responsive website, or a complex web portal, we have the skills and experience to
						deliver outstanding results.
					</p>
				</div>
			</article>
		</div>
	</section>
</main>

<style lang="scss">
	main {
		margin-left: 7.5rem;
		margin-right: 2.5rem;

		.paragraph {
			margin-block-start: 8rem;
			display: grid;
			grid-template-columns: 50% 50%;

			article {
				padding: 0% 0 15% 0%;
				display: flex;
				flex-direction: column;
				justify-content: center;

				h2 {
					color: var(--very-dark-blue);
					font-size: clamp(1.5rem, 2vw, 2rem);
				}

				p {
					color: var(--very-dark-grayish-blue);
					line-height: 2rem;
				}
			}
		}

		.backgroundImg {
			img {
				width: 60%;
				transform: translate(30%);
			}
		}

		#intro {
			flex-direction: row;
			display: flex;

			h1 {
				margin-block-start: 0;
				font-size: 5vw;
				line-height: 1.2;
				max-width: 50%;
				font-weight: 500;
			}
			#eval {
				margin-left: 5rem;
				margin-top: 10px;
				h2 {
					font-size: 1.5vw;
					font-weight: 300;
					color: rgb(177, 177, 177);
					word-spacing: 0.2rem;
					line-height: 2rem;
					width: 80%;
					margin-top: 2rem;
				}
				em {
					color: #9b9393;
				}
				.row {
					flex-direction: row;
					margin-top: 30px;

					.btn {
						padding: 1rem 1.8rem;
						border-radius: 0.5rem;
						color: $clr-fg-2;
						font-size: 0.8rem;
						font-weight: bold;
						text-decoration: none;
						margin-inline: auto;
						cursor: pointer;
						@include hover {
							filter: brightness(1.2);
							transition: all 0.1s ease-in-out;
						}
						&.primary {
							background: $accent-1;
							margin-right: 5px;
						}
						&.secondary {
							background: gray;
						}
					}
				}
			}
		}
		#art {
			display: flex;
			justify-content: end;
			color: white;
			background-color: $accent;
			border-radius: 0.5rem 8rem 0.5rem 8rem;
			margin-top: 15rem;
			position: relative;
			overflow-y: visible;
			min-height: 50vh;

			#phone {
				position: absolute;
				z-index: 1;
				left: 25%;
				top: 50%;
				transform: translate(-50%, -55%);
				height: 120%;
			}

			article {
				position: relative;
				width: 35%;
				padding: 8% 15% 8% 0;
				z-index: 1;

				h1 {
					margin-block-start: 0;
					font-size: clamp(2rem, 3vw, 3rem);
				}

				p {
					line-height: 2rem;
					margin-block-end: 0;
				}
			}
		}

		#reason {
			padding-bottom: 10%;
			.paragraph {
				article {
					padding: 15% 15% 15% 0;
				}
			}

			.backgroundImg2 {
				img {
					width: 80%;
					transform: translate(-10%);
				}
			}
		}

		@media screen and (max-aspect-ratio: 1) {
			margin: 0;

			#intro {
				flex-direction: column;
				display: flex;
				h1 {
					margin-block-start: 0;
					font-size: 14vw;
					line-height: 1.2;
					max-width: 100%;
				}
				#eval {
					margin-left: 0rem;
					margin-top: 10px;
					h2 {
						font-size: 6vw;
					}
					.row {
						flex-direction: row;
						margin-top: 30px;

						.btn {
							padding: 1rem 1.8rem;
							border-radius: 0.5rem;
							color: $clr-fg-2;
							font-size: 0.8rem;
							font-weight: bold;
							text-decoration: none;
							margin-inline: auto;
							cursor: pointer;
							@include hover {
								filter: brightness(1.2);
								transition: all 0.1s ease-in-out;
							}
							&.primary {
								background: $accent-1;
								margin-right: 5px;
							}
							&.secondary {
								background: gray;
							}
						}
					}
				}
			}
			#design {
				text-align: center;

				h1 {
					top: -10%;
				}
			}

			.paragraph {
				display: flex;
				flex-direction: column-reverse;

				article {
					padding: 2rem;
				}

				.backgroundImg {
					justify-content: center;
					img {
						width: 85%;
						transform: none;
					}
				}
			}

			#art {
				margin-top: 20rem;
				justify-content: center;
				display: flex;
				#phone {
					top: 0;
					height: unset;
					left: 50%;
					width: 75% !important;
				}

				article {
					margin-top: 10rem;
					margin-bottom: 10rem;
					text-align: center;
					width: calc(100% - 3rem);
					padding: 0;
				}
			}

			#reason {
				.paragraph {
					flex-direction: column-reverse;
					text-align: center;

					article {
						padding: 2rem;
					}
				}

				.backgroundImg2 {
					display: flex;
					justify-content: center;
					img {
						width: 85%;
						transform: none;
					}
				}
			}
		}
	}
</style>
