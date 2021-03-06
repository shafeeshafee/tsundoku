import React from "react";
import Bookstore from "../Components/Bookstore";
import ScrollAnimation from "react-animate-on-scroll";

const Bookstores = () => {
	return (
		<div>
			<h1 className="font-headings text-center text-3xl py-5 bg-offwhite font-bold uppercase">Indie Bookstores in NYC</h1>
			<ScrollAnimation animateIn="fadeInUp">
				<div className="flex flex-wrap  justify-around bg-offwhite pb-10">
					<Bookstore
						image="https://static01.nyt.com/images/2019/11/25/t-magazine/art/35tmag-3lives-slide-FY4X/35tmag-3lives-slide-FY4X-superJumbo.jpg"
						storeName="Three Lives & Company"
						storeDescription="Snug neighborhood bookshop selling a well-curated selection of hardcovers & paperbacks since 1968."
						address="238 W 10th St, New York, NY 10014"
						website={<a href="http://threelives.com/">threelives.com</a>}
					/>
					<Bookstore
						image="https://cdn.shopify.com/s/files/1/0162/2182/files/FullSizeRender_large.jpg?v=1492024593"
						storeName="Mysterious Book Shop"
						storeDescription="Bookstore with a floor-to-ceiling stock of new, used, rare & collectible crime & suspense titles."
						address="58 Warren St, New York, NY 10007"
						website={<a href="https://www.mysteriousbookshop.com/">mysteriousbookshop.com</a>}
					/>
					<Bookstore
						image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Strand_Bookstore_%2848072652191%29.jpg/1280px-Strand_Bookstore_%2848072652191%29.jpg"
						storeName="Strand Bookstore"
						storeDescription="Landmark shop specializing in new, used & rare books from philosophy to finance, plus bookish gifts."
						address="828 Broadway, New York, NY 10003"
						website={<a href="https://www.strandbooks.com/">strandbooks.com</a>}
					/>
					<Bookstore
						image="https://cornerbookstorenyc.com/wp-content/uploads/2018/11/corner-storefront.jpg"
						storeName="The Corner Bookstore"
						storeDescription="Compact nook offering a range of adult fiction & nonfiction books, from bestsellers to travel tomes."
						address="1313 Madison Ave, New York, NY 10128"
						website={<a href="https://cornerbookstorenyc.com/">cornerbookstorenyc.com</a>}
					/>
					<Bookstore
						image="https://images.squarespace-cdn.com/content/v1/5424ba9ee4b0c69384ec83e1/1506993923198-JR1TT5VJQBDUG8LXO9QG/ke17ZwdGBToddI8pDm48kJUlZr2Ql5GtSKWrQpjur5t7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UfNdxJhjhuaNor070w_QAc94zjGLGXCa1tSmDVMXf8RUVhMJRmnnhuU1v2M8fLFyJw/East-Village-Books.jpg?format=1500w"
						storeName="East Village Books"
						storeDescription="Long-running, cozy bookstore with an eclectic collection of used books, DVDs & music."
						address="99 St Marks Pl, New York, NY 10009"
						website={<a href="https://www.newyorkcitybookbuyer.com/">newyorkcitybookbuyer.com</a>}
					/>
					<Bookstore
						image="https://static.wixstatic.com/media/9b7bc8_602e0c04e0fe4ab9ab637c8239a09077~mv2.jpg/v1/fill/w_640,h_640,fp_0.50_0.50,q_90/9b7bc8_602e0c04e0fe4ab9ab637c8239a09077~mv2.jpg"
						storeName="Cafe con Libros"
						storeDescription="Small, wood-clad cafe offering special caffeinated beverages & baked goods alongside assorted books."
						address="724 Prospect Pl, Brooklyn, NY 11216"
						website={<a href="https://www.cafeconlibrosbk.com/">cafeconlibrosbk.com</a>}
					/>
					<Bookstore
						image="https://cdn.vox-cdn.com/thumbor/CycmY5V5EmqtF8POQAKwpM-5jLw=/0x0:2239x1960/1200x800/filters:focal(941x801:1299x1159)/cdn.vox-cdn.com/uploads/chorus_image/image/63678631/20190406_153113.0.jpg"
						storeName="The Lit. Bar"
						storeDescription="Cozy neighborhood bookshop/wine bar stocking popular titles & hosting events & readings."
						address="131 Alexander Ave, The Bronx, NY 10454"
						website={<a href="http://www.thelitbar.com/">thelitbar.com</a>}
					/>
					<Bookstore
						image="https://i.imgur.com/Hs3JOju.jpeg"
						storeName="Boogie Down Books"
						storeDescription="Boogie Down Books is a bookstore-without-walls for kids, teens, families, and educators in the Bronx and beyond."
						address="828 Broadway, New York, NY 10003"
						website={<a href="https://boogiedownbooks.indielite.org/">boogiedownbooks.indielite.org</a>}
					/>
				</div>
			</ScrollAnimation>
		</div>
	);
};

export default Bookstores;
