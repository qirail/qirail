import maastro1 from "./photos/maastro1.jpeg";
import maastro2 from "./photos/maastro2.jpeg";
import ari_farewell from "./photos/ari_farewell.jpg";
import mgru from "./photos/mgru.jpeg";
import rt1 from "./photos/rt1.jpg";
import aisymposium from "./photos/aisymposium.jpeg";
import outing from "./photos/outing.jpeg";
import indo_dutch_workshop from "./photos/cadc_pune.jpg";
import rt2 from "./photos/rt2.jpeg";
import AROI_TNPY from "./photos/AROI_TNPY.jpeg";
import caho from "./photos/caho.jpeg";
import Research_day_2025 from "./photos/Research_day_2025.jpeg";

import Workshop from "./photos/Workshop.jpeg";
import Workshop2 from "./photos/Workshop2.jpeg";
import Workshop3 from "./photos/Workshop3.jpeg";

import n2workshop from "./photos/2workshop.jpeg";
import workshopbks from "./photos/2workshopbks.jpeg";
import federatedlearning from "./photos/federatedlearning.jpeg";
import INDIAAI_AWARD from "./photos/INDIAAI_AWARD.jpeg";


const itemData1 = [
  // {
  //   img: maastro1,
  //   title: 'maastro1',
  // },
  {
    img: federatedlearning,
    title: 'Federated Learning workshop 2026',
  },
  {
    img: workshopbks,
    title: '2nd Workshop on Radiomics and Auto Segmentation 2026',
  },
  {
    img: n2workshop,
    title: '2nd Workshop on Radiomics and Auto Segmentation 2026',
  },
  {
    img: INDIAAI_AWARD,
    title: 'IndiaAI-NCG CATCH Grant for Cancer 2026',
  },
  {
  img: Workshop3,
  title: '1st Workshop on Radiomics and Auto Segmentation 2025',
  },
    {
    img: Workshop2,
    title: '1st Workshop on Radiomics and Auto Segmentation 2025',
  },
];

const itemData = [
  // {
  //   img: maastro1,
  //   title: 'maastro1',
  // },
  {
  img: Research_day_2025,
  title: 'Research Day 2025',
},
  {
    img: AROI_TNPY,
    title: 'AROI TNPY @ CMC 2024',
  },
  {
    img: caho,
    title: 'AI Research and Development Award by CAHO 2024',
  },
    {
    img: rt2,
    title: 'Our RT-2 (Head & Neck) Group',
  },
  {
    img: indo_dutch_workshop,
    title: 'Indo-Dutch workshop @ C-DAC Pune',
  },
  {
    img: outing,
    title: 'Lab Outing',
  },
  {
    img: aisymposium,
    title: '1st National Symposium',
  },
  {
    img: rt1,
    title: 'Our RT-1 (Rectal Cancer) Group',
  },
  {
    img: mgru,
    title: 'AI Conclave by TN Ministry of Health @ MGR Medical University',
  },
  {
    img: ari_farewell,
    title: "Dr. Ari's Farewell",
  },
  {
    img: maastro2,
    title: 'When the MAASTRO team (Dr. Andre Dekker and Dr. Leonard Wee) visited us.',
  },
  
];

const Gallery = () => {
	return (
		<section id='gallery' className="py-6 dark:bg-gray-800 dark:text-gray-50">
			<h1 className="text-4xl font-bold leading-none text-center sm:text-5xl mb-10">Gallery</h1>

			<div className="container p-5 mx-auto gap-5 grid grid-cols-1 md:grid-cols-2">
				{itemData1.map((item) => (
          <div className="relative group">
					<img alt="" className="mb-5" src={item.img} />
          <div className="absolute top-2 right-2 text-xs sm:text-sm invisible group-hover:visible text-gray-900 bg-gray-300 bg-opacity-90 px-2 py-1 rounded max-w-[calc(100%-1rem)] break-words">{item.title}</div>
          </div>
				))}
			</div>

      <div className="container p-5 pb-0 mx-auto">
      <div className="relative group">
        <img alt="" className="" src={Workshop} />
        <div className="absolute bottom-2 left-2 text-xs sm:text-sm md:text-base text-gray-900 bg-gray-300 bg-opacity-90 px-2 py-1 rounded max-w-[calc(100%-1rem)] break-words">1st Workshop on Radiomics and Auto Segmentation 2025.</div>
      </div>
      </div>

			<div className="container p-5 mx-auto gap-5 grid grid-cols-1 md:grid-cols-2">
				{itemData.map((item) => (
          <div className="relative group">
					<img alt="" className="mb-5" src={item.img} />
          <div className="absolute top-2 right-2 text-xs sm:text-sm invisible group-hover:visible text-gray-900 bg-gray-300 bg-opacity-90 px-2 py-1 rounded max-w-[calc(100%-1rem)] break-words">{item.title}</div>
          </div>
				))}
			</div>

      <div className="container p-5 pb-0 mx-auto">
      <div className="relative group">
        <img alt="" className="" src={maastro1} />
        <div className="absolute bottom-2 left-2 text-xs sm:text-sm md:text-base text-gray-900 bg-gray-300 bg-opacity-90 px-2 py-1 rounded max-w-[calc(100%-1rem)] break-words">When the MAASTRO team (Dr. Andre Dekker and Dr. Leonard Wee) visited us.</div>
      </div>
      </div>
		</section>

	)
}

export default Gallery
