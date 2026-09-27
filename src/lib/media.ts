/* Verified stock imagery pools — all photos served from the official
   Unsplash and Pexels CDNs. */

const PX = (id: string, ext = "jpeg") =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.${ext}?auto=compress&cs=tinysrgb&fit=crop&h=827&w=1400`;
const UN = (id: string) => `https://images.unsplash.com/${id}?q=80&w=1600&auto=format&fit=crop`;

/** Warm interiors — living rooms, kitchens, chalets, open-plan spaces */
export const POOL_INTERIOR = [
  PX("36777507"), // modern fireplace living room
  PX("26546549"), // warm lamp-lit living room
  PX("7746476"), // cozy rustic living room
  PX("7746642"), // living room + kitchen with fireplace
  PX("7746645"), // stairs and tv room
  PX("10855256"), // open-plan with wood beams
  PX("6238679"), // bright modern interior
  PX("6238683"), // dining + living zone
  PX("7746033"), // wooden chalet fireplace
  PX("6238684"), // kitchen + living apartment
  UN("photo-1600585152220-90363fe7e115"), // kitchen
  UN("photo-1600607687920-4e2a09cf159d"), // living room
  UN("photo-1616486338812-3dadae4b4ace"), // scandinavian living
  UN("photo-1618221195710-dd6b41faaea6"), // luxury modern interior
];

/** Jobsite & framing — proof that these buildings get built */
export const POOL_CONSTRUCTION = [
  PX("33405084"), // interior residential framing
  PX("33404353"), // wooden house framing
  PX("8491085"), // roof frame against sky
  PX("33954649"), // renovation with new framing
  PX("37499254"), // worker surveying roof frame
  PX("5484744"), // loft wooden beams
  PX("35974193"), // modern house construction
];

/** Rotating lifestyle detail shots for plan galleries */
export const POOL_LIFESTYLE = [
  POOL_INTERIOR[0],
  POOL_INTERIOR[10],
  POOL_CONSTRUCTION[0],
  POOL_INTERIOR[3],
  POOL_INTERIOR[12],
  POOL_CONSTRUCTION[2],
  POOL_INTERIOR[8],
  POOL_INTERIOR[11],
  POOL_CONSTRUCTION[5],
  POOL_INTERIOR[6],
  POOL_INTERIOR[13],
  POOL_CONSTRUCTION[1],
];

/** Homepage filmstrip — renders, jobsites and completed interiors */
export const MARQUEE_IMAGES = [
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000&auto=format&fit=crop",
  POOL_INTERIOR[0],
  "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1600&auto=format&fit=crop",
  POOL_CONSTRUCTION[1],
  UN("photo-1600596542815-ffad4c1539a9"),
  POOL_INTERIOR[3],
  "https://images.pexels.com/photos/36777966/pexels-photo-36777966.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=827&w=1400",
  POOL_CONSTRUCTION[2],
  POOL_INTERIOR[12],
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1600&auto=format&fit=crop",
];
