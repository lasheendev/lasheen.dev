<script>
	function onSubmit(e) {}
</script>

<div class="contact">
	<form on:submit|preventDefault={onSubmit}>
		<header>
			<h2>Get in Touch!</h2>
			<p>We provide a price quote within 2 hours</p>
		</header>
		<div class="row">
			<div class="input-wrapper">
				<div class="input-wrapper__label">
					<label for="name" class="input__label">Your name</label>
				</div>
				<div class="input-container">
					<input name="Name" type="text" placeholder="Joe Doe" />
				</div>
			</div>
			<div class="input-wrapper">
				<div class="input-wrapper__label">
					<label for="email" class="input__label">Email Address</label>
				</div>
				<div class="input-container">
					<input name="Email" type="email" placeholder="mail@example.com" />
				</div>
			</div>
		</div>
		<div class="input-wrapper">
			<div class="input-wrapper__label">
				<label for="subject" class="input__label">Subject </label>
			</div>
			<div class="input-container">
				<input name="Subject" type="subject" placeholder="I have an amazing app idea" />
			</div>
		</div>
		<div class="input-wrapper">
			<div class="input-wrapper__label">
				<label for="name" class="input__label">Message</label>
			</div>
			<div class="input-container">
				<textarea name="Message" placeholder="Body" rows="8" />
			</div>
		</div>

		<button type="submit" class="btn">Send Message</button>
	</form>
</div>

<style lang="scss">
	.row {
		flex-direction: row;
		display: flex;
	}
	.btn {
		transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
		padding: 0.8rem 1.8rem;
		border-radius: 0.5rem;

		cursor: pointer;

		color: $clr-fg-2;
		font-size: 0.8rem;
		line-height: 1.7;
		font-weight: bold;
		text-transform: uppercase;
		letter-spacing: 0.188em;
		flex-wrap: nowrap;
		white-space: nowrap;
		background: $accent-1;
		margin-inline: auto;
		margin-top: 3rem;

		@include hover {
			background-color: $accent-2;
		}
	}

	.contact {
		width: 70%;
		margin-block: 1rem;
		padding-inline: 10vw;
	}

	.input-wrapper {
		padding-top: 1.5rem;
		padding-right: 1rem;
		box-sizing: border-box;
		width: 100%;
	}

	h2 {
		color: $fg;

		font-weight: 500;
		font-size: 2rem;
		line-height: 1.7;
	}

	.contact p {
		font-family: $body-font;
		font-weight: 400;
		line-height: 1.5;
		color: $fg;
		letter-spacing: 0.0313em;
		margin-bottom: 1rem;
	}

	label {
		font-family: $body-font;
		font-size: 10px;
		line-height: 2.4;
		color: #bfc0cc;
		text-transform: uppercase;
		letter-spacing: 0.125em;
		user-select: none;
	}

	input,
	textarea {
		color: $fg;
		font-family: $body-font;
		font-size: 16px;
		background: transparentize($clr-bg-350, 0.5);
		width: 100%;
		height: 56px;
		border: 1px solid $accent-3;
		border-radius: 8px;
		padding: 16px 56px 16px 16px;
		transition: box-shadow 0.2s ease-in-out;
		outline: none;
	}

	input::placeholder,
	textarea::placeholder {
		color: $clr-fg-450;
	}

	input:-webkit-autofill {
		-webkit-text-fill-color: $clr-fg-4 !important;
		-webkit-box-shadow: 0 0 0px 300px #1e1a2c inset !important;
		border: 1px solid $accent-0 !important;
	}

	textarea {
		resize: vertical;
		height: auto;
	}

	input:focus,
	textarea:focus {
		box-shadow: 0px 0px 0px 2px $clr-fg-5;
	}

	@media only screen and (max-width: $tablet) {
		.input-wrapper {
			padding-top: 1rem;
		}

		.contact {
			margin-inline: 0;
			padding-inline: 3vmin;
			width: 100%;
		}

		button {
			width: 100%;
		}
	}

	@media only screen and (max-width: $mobile) {
		textarea {
			height: 10rem;
		}
		input {
			height: 2.8rem;
		}
	}
</style>
