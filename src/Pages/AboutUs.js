import ScrollAnimation from "react-animate-on-scroll";
import TeamMember from "../Components/TeamMember";

function AboutUs() {
	return (
		<ScrollAnimation duration={2} animateIn="fadeIn">
			<div className="bg-offwhite flex flex-col">
				<div className="py-20 font-headings">
					<h1 className="flex justify-center bg-offwhite text-2xl font-headings font-bold uppercase">team's favorite reads</h1>
					<br />
					<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-20">
						<TeamMember
							name="Diana Gaona"
							title="Kitchen"
							author="Banana Yoshimoto"
							image="https://prodimage.images-bn.com/pimages/9780802142443_p0_v1_s600x595.jpg"
							alt="Kitchen by Banana Yoshimoto"
							url="https://www.barnesandnoble.com/w/kitchen-yoshimoto/1101584261"
						/>
						<TeamMember
							name="Shafee Ahmed"
							title="The Brothers Karamazov"
							author="Fyodor Dostoevsky"
							image="https://prodimage.images-bn.com/pimages/9780140449242_p0_v2_s600x595.jpg"
							alt="The Brothers Karamazov"
							url="https://www.barnesandnoble.com/w/the-brothers-karamazov-fyodor-dostoevsky/1124439113"
						/>
						<TeamMember
							name="Shan Siddiqui"
							title="Guns, Germs, and Steel"
							author="Jared Diamond"
							image="https://prodimage.images-bn.com/pimages/9780393354324_p0_v3_s600x595.jpg"
							alt="Guns, Germs, and Steel by Jared Diamond"
							url="https://www.barnesandnoble.com/w/guns-germs-and-steel-jared-diamond/1100290895"
						/>
						<TeamMember
							name="Jahaziel Israel"
							title="Between the World and Me"
							author="Ta-Nehisi Coates"
							image="https://prodimage.images-bn.com/pimages/9780812993547_p0_v5_s600x595.jpg"
							alt="Between the World and Me, by Ta-Nehisi Coates"
							url="https://www.barnesandnoble.com/w/between-the-world-and-me-ta-nehisi-coates/1121816158"
						/>
					</ul>
				</div>
			</div>
		</ScrollAnimation>
	);
}

export default AboutUs;
