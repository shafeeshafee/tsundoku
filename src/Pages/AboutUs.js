import ScrollAnimation from "react-animate-on-scroll";
import TeamMember from "../Components/TeamMember";

function AboutUs() {
	return (
		<ScrollAnimation duration={1} animateIn="fadeIn">
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
							bio="Hello fellow readers! My name is Diana. Growing up reading books in Spanish and eventually transitioning to reading books in English, literature has been and continues to be a past time that allows me to see into other people's minds and learn many lessons I may have not learned in my day-to-day routine. As I have grown older, I have seen my favorite genre change many times, and at the moment I find myself reading self-help and business books."
							github="https://github.com/dianacg93"
							linkedin="https://www.linkedin.com/in/dianacgaona/"
						/>
						<TeamMember
							name="Shafee Ahmed"
							title="The Brothers Karamazov"
							author="Fyodor Dostoevsky"
							image="https://prodimage.images-bn.com/pimages/9780140449242_p0_v2_s600x595.jpg"
							alt="The Brothers Karamazov"
							url="https://www.barnesandnoble.com/w/the-brothers-karamazov-fyodor-dostoevsky/1124439113"
							bio="Hey, Shafee here. My love for literature started when I read a book by Haruki Murakami called 'Kafka on the Shore'. His works led me to one of my favorite genres of literature, Russian, with authors like Dostoevsky and Bulgakov."
							github="https://github.com/shafeeshafee"
							linkedin="https://www.linkedin.com/in/shafeelinks/"
						/>
						<TeamMember
							name="Shan Siddiqui"
							title="Guns, Germs, and Steel"
							author="Jared Diamond"
							image="https://prodimage.images-bn.com/pimages/9780393354324_p0_v3_s600x595.jpg"
							alt="Guns, Germs, and Steel by Jared Diamond"
							url="https://www.barnesandnoble.com/w/guns-germs-and-steel-jared-diamond/1100290895"
							bio="Hi my name is Shan Siddiqui, I am a Web Developer and currently I am enrolled in The Knowledge House 2020 Web Development Fellowship."
							github="https://github.com/shansiddiqui94"
							linkedin="https://www.linkedin.com/in/ssiddiqui007/"
						/>
						<TeamMember
							name="Jahaziel Israel"
							title="Between the World and Me"
							author="Ta-Nehisi Coates"
							image="https://prodimage.images-bn.com/pimages/9780812993547_p0_v5_s600x595.jpg"
							alt="Between the World and Me, by Ta-Nehisi Coates"
							url="https://www.barnesandnoble.com/w/between-the-world-and-me-ta-nehisi-coates/1121816158"
							bio="Hi, I'm Jahaziel and when I'm not rummaging through the dozens of sidewalk carts of discounted books at Strand Bookstore or Center for Fiction in Brooklyn, you can certainly find me breaking all sorts of stereotypes while reading or journaling on the subway, or in my freetime writing hand-lettered calligraphy cards and letters to close friends."
							github="https://github.com/blaquebeardcoder"
							linkedin="https://www.linkedin.com/in/jahazielbenisrael/"
						/>
					</ul>
				</div>
			</div>
		</ScrollAnimation>
	);
}

export default AboutUs;
