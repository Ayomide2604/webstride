const Team = () => {
	return (
		<>
			<section id="team" className="team section light-background">
				{/* Section Title */}
				<div className="container section-title" data-aos="fade-up">
					<h2>Team</h2>
					<p>
						Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
						consectetur velit
					</p>
				</div>
				{/* End Section Title */}
				<div className="container" data-aos="fade-up" data-aos-delay={100}>
					<div className="row g-5">
						<div
							className="col-md-6 col-lg-3"
							data-aos="zoom-in"
							data-aos-delay={100}
						>
							<div className="team-card">
								<div className="team-image">
									<img
										src="assets/img/person/person-m-1.webp"
										className="img-fluid"
										alt=""
									/>
									<div className="team-overlay">
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											Nulla quam velit, vulputate eu pharetra nec, mattis ac
											neque.
										</p>
										<div className="team-social">
											<a href="">
												<i className="bi bi-twitter-x" />
											</a>
											<a href="">
												<i className="bi bi-facebook" />
											</a>
											<a href="">
												<i className="bi bi-instagram" />
											</a>
											<a href="">
												<i className="bi bi-linkedin" />
											</a>
										</div>
									</div>
								</div>
								<div className="team-content">
									<h4>Daniel Mitchell</h4>
									<span className="position">Creative Director</span>
								</div>
							</div>
						</div>
						{/* End Team Member */}
						<div
							className="col-md-6 col-lg-3"
							data-aos="zoom-in"
							data-aos-delay={200}
						>
							<div className="team-card">
								<div className="team-image">
									<img
										src="assets/img/person/person-f-6.webp"
										className="img-fluid"
										alt=""
									/>
									<div className="team-overlay">
										<p>
											Aliquam tincidunt mauris eu risus. Vestibulum auctor
											dapibus neque. Nunc dignissim risus id metus.
										</p>
										<div className="team-social">
											<a href="">
												<i className="bi bi-twitter-x" />
											</a>
											<a href="">
												<i className="bi bi-facebook" />
											</a>
											<a href="">
												<i className="bi bi-instagram" />
											</a>
											<a href="">
												<i className="bi bi-linkedin" />
											</a>
										</div>
									</div>
								</div>
								<div className="team-content">
									<h4>Rebecca Taylor</h4>
									<span className="position">Lead Developer</span>
								</div>
							</div>
						</div>
						{/* End Team Member */}
						<div
							className="col-md-6 col-lg-3"
							data-aos="zoom-in"
							data-aos-delay={300}
						>
							<div className="team-card">
								<div className="team-image">
									<img
										src="assets/img/person/person-m-6.webp"
										className="img-fluid"
										alt=""
									/>
									<div className="team-overlay">
										<p>
											Cras ornare tristique elit. Integer in dui quis est
											placerat ornare. Phasellus a lacus a risus.
										</p>
										<div className="team-social">
											<a href="">
												<i className="bi bi-twitter-x" />
											</a>
											<a href="">
												<i className="bi bi-facebook" />
											</a>
											<a href="">
												<i className="bi bi-instagram" />
											</a>
											<a href="">
												<i className="bi bi-linkedin" />
											</a>
										</div>
									</div>
								</div>
								<div className="team-content">
									<h4>Marcus Johnson</h4>
									<span className="position">UI/UX Designer</span>
								</div>
							</div>
						</div>
						{/* End Team Member */}
						<div
							className="col-md-6 col-lg-3"
							data-aos="zoom-in"
							data-aos-delay={400}
						>
							<div className="team-card">
								<div className="team-image">
									<img
										src="assets/img/person/person-f-3.webp"
										className="img-fluid"
										alt=""
									/>
									<div className="team-overlay">
										<p>
											Pellentesque habitant morbi tristique senectus et netus et
											malesuada fames ac turpis egestas.
										</p>
										<div className="team-social">
											<a href="">
												<i className="bi bi-twitter-x" />
											</a>
											<a href="">
												<i className="bi bi-facebook" />
											</a>
											<a href="">
												<i className="bi bi-instagram" />
											</a>
											<a href="">
												<i className="bi bi-linkedin" />
											</a>
										</div>
									</div>
								</div>
								<div className="team-content">
									<h4>Jessica Parker</h4>
									<span className="position">Marketing Strategist</span>
								</div>
							</div>
						</div>
						{/* End Team Member */}
					</div>
				</div>
			</section>
			{/* /Team Section */}
		</>
	);
};

export default Team;
