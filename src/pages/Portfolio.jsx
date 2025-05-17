import Project from "../components/Project";
import projects from "../data/projects";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Portfolio = () => {
	return (
		<section id="how-we-work" className="how-we-work section">
			<section id="portfolio" className="portfolio section">
				<div className="container section-title" data-aos="fade-up">
					<h2>Portfolio</h2>
					<p>
						Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
						consectetur velit
					</p>
				</div>
				<div className="container">
					<Swiper slidesPerView={2} loop={true} spaceBetween={0} >
						{projects.map((project) => (
							<SwiperSlide key={project.id}>
								<Project
									title={project.title}
									description={project.description}
									image={project.image}
									link={project.link}
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</section>
		</section>
	);
};

export default Portfolio;
