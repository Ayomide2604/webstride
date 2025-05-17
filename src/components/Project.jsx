import { FaRegEye } from "react-icons/fa";
const Project = ({ title, description, category, image, link }) => {
	return (
		<div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-web">
			<div className="portfolio-card ">
				<div className="portfolio-image">
					<img src={image} className="img-fluid" alt="" loading="lazy" />
					<div className="portfolio-overlay">
						<div className="portfolio-actions">
							<a
								href={link}
								target="_blank"
								className="glightbox preview-link"
								data-gallery="portfolio-gallery-web"
							>
								<FaRegEye />
							</a>
							{link}{" "}
						</div>
					</div>
				</div>
				<div className="portfolio-content">
					<h3>{title}</h3>
					<p>{description}</p>
				</div>
			</div>
		</div>
	);
};

export default Project;
