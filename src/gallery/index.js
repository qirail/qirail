import maastro1 from "./photos/maastro1.jpeg";
import maastro2 from "./photos/maastro2.jpeg";
import ari_farewell from "./photos/ari_farewell.jpg";
import mgru from "./photos/mgru.jpeg";
import rt1 from "./photos/rt1.jpg";
import aisymposium from "./photos/aisymposium.jpeg";
import outing from "./photos/outing.jpeg";
import indo_dutch_workshop from "./photos/cadc_pune.jpg";

const itemData = [
  // {
  //   img: maastro1,
  //   title: 'maastro1',
  // },
  {
    img: maastro2,
    title: 'When the MAASTRO team (Dr. Andre Dekker and Dr. Leonard Wee) visited us.',
  },
  {
    img: ari_farewell,
    title: "Dr. Ari's Farewell",
  },
  {
    img: mgru,
    title: 'At the MGR Medical University',
  },
  {
    img: rt1,
    title: 'Our RT-1 (Rectal Cancer) Group',
  },
  {
    img: aisymposium,
    title: 'National Symposium',
  },
  {
    img: outing,
    title: 'Lab Outing',
  },
  {
    img: indo_dutch_workshop,
    title: 'Indo-Dutch workshop @ C-DAC Pune',
  },

];

const Gallery = () => {
	return (
		<section id='gallery' className="py-6 dark:bg-gray-800 dark:text-gray-50">
			<h1 className="text-4xl font-bold leading-none text-center sm:text-5xl mb-10">Gallery</h1>
      <div className="container p-5 pb-0 mx-auto">
      <div className="relative group">
        <img alt="" className="" src={maastro1} />
        <div className="absolute bottom-2 left-2 font-medium invisible group-hover:visible text-gray-900 bg-gray-300">When the MAASTRO team (Dr. Andre Dekker and Dr. Leonard Wee) visited us.</div>
      </div>
      </div>
			<div className="container p-5 mx-auto gap-5 md:columns-2">
				{itemData.map((item) => (

          <div className="relative group">
					<img alt="" className="mb-5" src={item.img} />
          <div className="absolute bottom-2 left-2 font-medium invisible group-hover:visible text-gray-900 bg-gray-300">{item.title}</div>
          </div>
				))}
			</div>
		</section>

	)
}

export default Gallery
