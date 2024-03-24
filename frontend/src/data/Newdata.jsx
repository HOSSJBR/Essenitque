import img1 from "../images/newpagepics/2024-02-14-HA+B5-Packshot_30mL.webp";
import img2 from "../images/newpagepics/ORD-Product-Daily-Set.webp";
import img3 from "../images/newpagepics/rdn-smooth-skin-collection.webp";
import img4 from "../images/newpagepics/rdn-hair-scalp-collection.webp";
// import img4 from "../images/newpagepics/ORD-Product-Most-Loved-Set-30ml.webp";
import img5 from "../images/newpagepics/rdn-barrier-support-collection.webp";
import img6 from "../images/newpagepics/rdn-squalane-cleanser-50ml.webp";
import img7 from "../images/newpagepics/2023-12-01-ORD-Groupshot-Mlt-Pptd-Eye-Pptd-HA-01-RL.webp";
import img8 from "../images/newpagepics/rdn-antioxidant-collection.webp";
import img9 from "../images/newpagepics/2023-12-01-ORD-Groupshot-Mlt-Pptd-Lash+Mlt-Pptd-Eye-01-RL.webp";
import img10 from "../images/newpagepics/rdn-uneven-skin-tone-collection.webp";
import img11 from "../images/newpagepics/rdn-glycolic-acid-7pct-exfoliating-toner-100ml.webp";
import img12 from "../images/bestsellerpagepics/rdn-natural-moisturizing-factors-ha-30ml.webp";
import img13 from "../images/bestsellerpagepics/rdn-squalane-cleanser-50ml.webp";
import img14 from "../images/bestsellerpagepics/rdn-multi-peptide-ha-serum-30ml.webp";
import img15 from "../images/bestsellerpagepics/rdn-niacinamide-10pct-zinc-1pct-30ml.webp";
import img16 from "../images/bestsellerpagepics/rdn-glycolic-acid-7pct-exfoliating-toner-100ml.webp";
import img17 from "../images/bestsellerpagepics/rdn-multi-peptide-eye-serum-15ml.webp";
import img18 from "../images/bestsellerpagepics/rdn-multi-peptide-copper-peptides-1pct-serum-30ml.webp";
import img19 from "../images/bestsellerpagepics/SBSS PackShot.webp";
import img20 from "../images/bestsellerpagepics/rdn-multi-peptide-lash-and-brow-serum-eu-5ml.webp";
import img21 from "../images/bestsellerpagepics/rdn-azelaic-acid-suspension-10pct-30ml.webp";

const Newdata = [
  {
    id: 1,
    type: "newpage",
    name: "Hyaluronic Acid 2% + B5",
    price: 12,
    targets: "Dryness",
    suited: "All skin Types",
    img: img1,
  },
  {
    id: 2,
    type: "newpage",
    name: "The Daily Set",
    price: 27,
    targets: "Dryness",
    suited: "All skin Types",
    img: img2,
  },
  {
    id: 3,
    type: "newpage",
    name: "The Smooth Skin Collection",
    price: 52.5,
    description: "A regimen that includes some well-loved formulas for ",
    img: img3,
  },
  {
    id: 4,
    type: "newpage",
    name: "The Hair & Scalp Collection",
    price: 44.8,
    description:
      "A daily collection dedicated to promoting healthier-looking hair and scalp.",
    img: img4,
  },
  {
    id: 5,
    type: "newpage",
    name: "The Most Loved Collection",
    price: 30.5,
    description: "A collection of our most-loved products.",
    img: img5,
  },
  {
    id: 6,
    type: "newpage",
    name: "The Barrier Support Collection",
    price: 79.1,
    description: "A regimen that includes products designed to rebuild ",
    img: img6,
  },
  {
    id: 7,
    type: "newpage",
    name: "Squalane Cleanser",
    price: 13.1,
    Targets: "CLeansing",
    img: img7,
  },

  {
    id: 8,
    type: "newpage",
    name: "The Multi-Peptide Collection",
    price: 53.1,
    description:
      "A collection of multi-peptide formulas for comprehensive age support across the face and eyes.",
    img: img8,
  },
  {
    id: 9,
    type: "newpage",
    name: "The Antioxidant Collection",
    price: 48.0,
    description:
      "A collection featuring three different types of antioxidant formulas",
    img: img9,
  },
  {
    id: 10,
    type: "newpage",
    name: "The Eye, Lash & Brow Collection",
    price: 48.2,
    description:
      "A collection of eye care formulations designed to target signs of aging, and support fuller, thicker, healthier-looking lashes and brows.",
    img: img10,
  },
  {
    id: 11,
    type: "newpage",
    name: "The Uneven Skin Tone Collection",
    price: 57.9,
    description:
      "A collection featuring key ingredients for a more even skin tone and a radiant complexion.",
    img: img11,
  },
  {
    id: 12,
    type: "bestsellerspage",
    name: "Natural Moisturizing Factors + HA",
    price: 8.7,
    Targets: "Dryness",
    suited: "All Skin Types",
    img: img12,
  },
  {
    id: 13,
    type: "bestsellerspage",
    name: "Squalane Cleanser",
    price: 13.1,
    Targets: "Cleansing",
    suited: "All Skin Types",
    img: img13,
  },
  {
    id: 14,
    type: "bestsellerspage",
    name: "Multi-Peptide + HA Serum (`Buffet`)",
    price: 23.5,
    Targets: "Signs Of Aging",
    suited: "All Skin Types",
    img: img14,
  },

  {
    id: 15,
    type: "bestsellerspage",
    name: "Niacinamide 10% + Zinc 1%",
    price: 6.6,
    Targets: "Textural Irregularities",
    suited: "All Skin Types",
    img: img15,
  },
  {
    id: 16,
    type: "bestsellerspage",
    name: "Multi-Peptide Eye Serum",
    price: 29.6,
    Targets: "Signs Of Aging",
    img: img16,
  },
  {
    id: 17,
    type: "bestsellerspage",
    name: "Multi-Peptide + Copper Peptides 1% Serum",
    price: 39.5,
    Targets: "Signs Of Aging",
    suited: "All Skin Types",
    img: img17,
  },

  {
    id: 18,
    type: "bestsellerspage",
    name: "Soothing & Barrier Support Serum",
    price: 25.8,
    Targets: "Barrier Support",
    suited: "All Skin Types",
    img: img18,
  },

  {
    id: 19,
    type: "bestsellerspage",
    name: "Multi-Peptide Lash and Brow Serum",
    price: 18.6,
    Targets: "Hair",
    suited: "All Skin Types",
    img: img19,
  },
  {
    id: 20,
    type: "bestsellerspage",
    name: "Multi-Peptide Lash and Brow Serum",
    price: 18.6,
    Targets: "Hair",
    suited: "All Skin Types",
    img: img20,
  },
  {
    id: 21,
    type: "bestsellerspage",
    name: "Azelaic Acid Suspension 10%",
    price: 15.8,
    Targets: "Textural Irregularities",
    suited: "All Skin Types",
    img: img21,
  },
];

export default Newdata;
