import React from "react";
import Project from "../components/Project";
import projects from "../data/projects";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Portfolio = () => {
	return (
		<section id="portfolio" className="portfolio section">
			<div className="container section-title" data-aos="fade-up">
				<h2>Portfolio</h2>
				<p>
					Explore our portfolio to see how we've helped businesses like yours
					achieve their digital goals.
				</p>
			</div>
			<div className="container">
				<Swiper
					slidesPerView={2}
					loop={true}
					spaceBetween={50}
					pagination={{ clickable: true }}
				>
					{projects.map((project) => (
						<SwiperSlide key={project.id}>
							<Project
								title={project.title}
								image={project.image}
								link={project.link}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
};

export default Portfolio;
