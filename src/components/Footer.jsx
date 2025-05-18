import React from "react";
import {
	BiLogoTwitter,
	BiLogoFacebook,
	BiLogoInstagram,
	BiLogoLinkedin,
} from "react-icons/bi";

const Footer = () => {
	return (
		<footer id="footer" className="footer">
			<div className="container footer-top">
				<div className="row gy-4">
					<div className="col-lg-4 col-md-6 footer-about">
						<a href="index.html" className="logo d-flex align-items-center">
							<span className="sitename">WebStride</span>
						</a>
						<div className="footer-contact pt-3">
							<p>43 Ojileru Street</p>
							<p>Oworoshoki, Lagos, Nigeria</p>
							<p className="mt-3">
								<strong>Phone:</strong> <span>+234 812 666 0484</span>
							</p>
							<p>
								<strong>Email:</strong> <span>info@webstride.com</span>
							</p>
						</div>
						<div className="social-links d-flex my-4">
							<a
								href="https://twitter.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								<BiLogoTwitter className="bi bi-twitter-x" />
							</a>
							<a
								href="https://facebook.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								<BiLogoFacebook className="bi bi-facebook" />
							</a>
							<a
								href="https://instagram.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								<BiLogoInstagram className="bi bi-instagram" />
							</a>
							<a
								href="https://linkedin.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								<BiLogoLinkedin className="bi bi-linkedin" />
							</a>
						</div>
					</div>
					<div className="col-lg-2 col-md-3 footer-links">
						<h4>Useful Links</h4>
						<ul>
							<li>
								<a href="#">Home</a>
							</li>
							<li>
								<a href="#">About Us</a>
							</li>
							<li>
								<a href="#">Services</a>
							</li>
							<li>
								<a href="#">Terms of Service</a>
							</li>
							<li>
								<a href="#">Privacy Policy</a>
							</li>
						</ul>
					</div>
					<div className="col-lg-2 col-md-3 footer-links">
						<h4>Our Services</h4>
						<ul>
							<li>
								<a href="#">Web Design</a>
							</li>
							<li>
								<a href="#">Web Development</a>
							</li>
							<li>
								<a href="#">Backend Support</a>
							</li>
							<li>
								<a href="#">Software as a Service</a>
							</li>
						</ul>
					</div>
					<div className="col-lg-2 col-md-3 footer-links">
						<h4>Resources</h4>
						<ul>
							<li>
								<a href="#">Blog</a>
							</li>
							<li>
								<a href="#">Case Studies</a>
							</li>
							<li>
								<a href="#">FAQs</a>
							</li>
							<li>
								<a href="#">Tutorials</a>
							</li>
						</ul>
					</div>
					<div className="col-lg-2 col-md-3 footer-links">
						<h4>Company</h4>
						<ul>
							<li>
								<a href="#">About Us</a>
							</li>
							<li>
								<a href="#">Careers</a>
							</li>
							<li>
								<a href="#">Press</a>
							</li>
							<li>
								<a href="#">Contact</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="container copyright text-center mt-4">
				<p>
					© <span>Copyright</span>{" "}
					<strong className="px-1 sitename">WebStride</strong>
					<span>All Rights Reserved</span>
				</p>
				<div className="credits">
					Designed by <a href="https://webstride.com">WebStride</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
