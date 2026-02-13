export interface Product {
  id: string;
  name: string;
  category: string;
  categorySlug: string;
  price: number;
  additionalCharges: number;
  description: string;
  image: string;
  status: "available" | "coming-soon";
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  image: string;
}

export const WHATSAPP_NUMBER = "919491530079";
export const PHONE_NUMBER = "+919491530079";
export const PHONE_NUMBER_ALT = "+919491520079";
export const EMAIL = "SarvantrahOrganicfoods@Gmail.com";
export const ADDRESS = "Kakathiya Nagar, Kondapalli, Andhra Pradesh, India";
export const INSTAGRAM_URL = "https://www.instagram.com/zyva_power_of_millets";
export const LINKEDIN_URL = "https://www.linkedin.com/company/sarvantrah-organic-foods-pvt-ltd/";
export const FREE_DELIVERY_THRESHOLD = 1000;
export const BUSINESS_HOURS = "Monday to Sunday: 9 AM to 9 PM";

export const categories: Category[] = [
  {
    name: "Millet Chikkis",
    slug: "millet-chikkis",
    description: "Traditional chikkis made with nutritious millets and natural sweeteners. A perfect healthy snack for all ages.",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&h=400&fit=crop",
  },
  {
    name: "Cheesy Crunchy Hots",
    slug: "cheesy-crunchy-hots",
    description: "Crispy millet balls loaded with real cheese flavor. Healthy snacking meets cheesy indulgence.",
    image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=600&h=400&fit=crop",
  },
  {
    name: "Healthy Mix",
    slug: "healthy-mix",
    description: "Nutritious millet-based health drink mixes and energy blends for a power-packed day.",
    image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=600&h=400&fit=crop",
  },
  {
    name: "Classy Cookies",
    slug: "classy-cookies",
    description: "Delicious millet cookies baked to perfection with wholesome ingredients. Guilt-free indulgence!",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600&h=400&fit=crop",
  },
  {
    name: "Millet Chapathis",
    slug: "millet-chapathis",
    description: "Ready-to-cook millet chapathis for a wholesome and convenient meal option.",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&h=400&fit=crop",
  },
];

export const products: Product[] = [
  // Millet Chikkis
  {
    id: "mc-1",
    name: "Real Millet Chikki",
    category: "Millet Chikkis",
    categorySlug: "millet-chikkis",
    price: 250,
    additionalCharges: 35,
    description: "Made with 100% real millet grains and natural jaggery, this traditional chikki delivers a crunchy, wholesome snack experience. Rich in fiber and essential minerals, it is the perfect guilt-free treat for any time of day.",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=400&fit=crop",
    status: "available",
  },
  {
    id: "mc-2",
    name: "Multi-Millet Power Chikki",
    category: "Millet Chikkis",
    categorySlug: "millet-chikkis",
    price: 250,
    additionalCharges: 35,
    description: "A powerful blend of multiple millets combined with pure jaggery for the ultimate nutritious chikki. Packed with protein, iron, and calcium to fuel your day with natural energy.",
    image: "https://images.unsplash.com/photo-1604467707321-70d009801bf4?w=400&h=400&fit=crop",
    status: "available",
  },
  {
    id: "mc-3",
    name: "Dry Fruit Millet Chikki",
    category: "Millet Chikkis",
    categorySlug: "millet-chikkis",
    price: 250,
    additionalCharges: 35,
    description: "Premium millet chikki loaded with cashews, almonds, and raisins. A luxurious twist on the classic, offering the combined goodness of dry fruits and millets in every bite.",
    image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=400&fit=crop",
    status: "coming-soon",
  },
  {
    id: "mc-4",
    name: "Sesame Millet Chikki",
    category: "Millet Chikkis",
    categorySlug: "millet-chikkis",
    price: 250,
    additionalCharges: 35,
    description: "The classic combination of sesame seeds and millets, bound together with natural jaggery. Rich in calcium and iron, this chikki is a powerhouse of nutrition with an irresistible crunch.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=400&fit=crop",
    status: "coming-soon",
  },
  // Cheesy Crunchy Hots
  {
    id: "ch-1",
    name: "Real Cheese Millet Balls",
    category: "Cheesy Crunchy Hots",
    categorySlug: "cheesy-crunchy-hots",
    price: 250,
    additionalCharges: 35,
    description: "Crispy millet balls coated with real cheese for an unforgettable taste. Made with whole grain millets, these snacks deliver a perfect balance of health and cheesy goodness.",
    image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=400&h=400&fit=crop",
    status: "available",
  },
  {
    id: "ch-2",
    name: "Peri-Peri Cheese Millet Balls",
    category: "Cheesy Crunchy Hots",
    categorySlug: "cheesy-crunchy-hots",
    price: 250,
    additionalCharges: 35,
    description: "Spicy peri-peri seasoning meets creamy cheese on crispy millet balls. A fiery, flavorful snack that packs a punch while keeping things nutritious and wholesome.",
    image: "https://images.unsplash.com/photo-1621447504864-d8686e12698c?w=400&h=400&fit=crop",
    status: "available",
  },
  {
    id: "ch-3",
    name: "Creamy Cheese Millet Balls",
    category: "Cheesy Crunchy Hots",
    categorySlug: "cheesy-crunchy-hots",
    price: 250,
    additionalCharges: 35,
    description: "Indulge in the rich, creamy cheese coating over perfectly crunchy millet balls. A smooth, melt-in-your-mouth experience that redefines healthy snacking.",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=400&fit=crop",
    status: "coming-soon",
  },
  {
    id: "ch-4",
    name: "Tangy Tomato Cheese Millet Balls",
    category: "Cheesy Crunchy Hots",
    categorySlug: "cheesy-crunchy-hots",
    price: 250,
    additionalCharges: 35,
    description: "A tangy tomato twist on cheesy millet balls. The perfect combination of tangy, cheesy, and crunchy that will leave you craving more.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop",
    status: "coming-soon",
  },
  // Healthy Mix
  {
    id: "hm-1",
    name: "Multi-Millet Health Drink Mix",
    category: "Healthy Mix",
    categorySlug: "healthy-mix",
    price: 250,
    additionalCharges: 35,
    description: "A carefully crafted blend of multiple millets designed for a nutritious daily health drink. Rich in essential vitamins and minerals, it supports immunity and overall wellness.",
    image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=400&h=400&fit=crop",
    status: "available",
  },
  {
    id: "hm-2",
    name: "Protein Millet Energy Mix",
    category: "Healthy Mix",
    categorySlug: "healthy-mix",
    price: 250,
    additionalCharges: 35,
    description: "High-protein millet energy mix designed for active lifestyles. Packed with plant-based protein and complex carbohydrates for sustained energy throughout the day.",
    image: "https://images.unsplash.com/photo-1610725664285-7c57e6eeac3f?w=400&h=400&fit=crop",
    status: "coming-soon",
  },
  // Classy Cookies
  {
    id: "cc-1",
    name: "Multi-Millet Cookies",
    category: "Classy Cookies",
    categorySlug: "classy-cookies",
    price: 250,
    additionalCharges: 35,
    description: "Wholesome cookies made with a blend of nutritious millets. Perfectly baked for a delightful crunch with every bite, these cookies make healthy snacking truly enjoyable.",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=400&fit=crop",
    status: "available",
  },
  {
    id: "cc-2",
    name: "Chocolate Millet Cookies",
    category: "Classy Cookies",
    categorySlug: "classy-cookies",
    price: 250,
    additionalCharges: 35,
    description: "Rich chocolate flavor meets the goodness of millets in these irresistible cookies. A chocolaty delight that satisfies your sweet tooth while keeping nutrition in check.",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=400&fit=crop",
    status: "available",
  },
  {
    id: "cc-3",
    name: "Jaggery Millet Cookies",
    category: "Classy Cookies",
    categorySlug: "classy-cookies",
    price: 250,
    additionalCharges: 35,
    description: "Traditional jaggery-sweetened millet cookies that offer a natural, earthy sweetness. Free from refined sugar, these cookies are a healthier way to enjoy your tea-time treat.",
    image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=400&h=400&fit=crop",
    status: "coming-soon",
  },
  {
    id: "cc-4",
    name: "Oats & Millet Cookies",
    category: "Classy Cookies",
    categorySlug: "classy-cookies",
    price: 250,
    additionalCharges: 35,
    description: "The perfect blend of oats and millets baked into a hearty cookie. High in fiber and naturally nutritious, these cookies fuel your day the healthy way.",
    image: "https://images.unsplash.com/photo-1618923850107-d1a234ef1082?w=400&h=400&fit=crop",
    status: "coming-soon",
  },
  {
    id: "cc-5",
    name: "Dry Fruit Millet Cookies",
    category: "Classy Cookies",
    categorySlug: "classy-cookies",
    price: 250,
    additionalCharges: 35,
    description: "Premium cookies loaded with crunchy dry fruits and wholesome millets. Every bite is a mix of nutty flavors and millet goodness for the ultimate snacking experience.",
    image: "https://images.unsplash.com/photo-1532499016263-f2c3e89de9cd?w=400&h=400&fit=crop",
    status: "coming-soon",
  },
  // Millet Chapathis
  {
    id: "mch-1",
    name: "Ready-to-Cook Millet Chapathi",
    category: "Millet Chapathis",
    categorySlug: "millet-chapathis",
    price: 250,
    additionalCharges: 35,
    description: "Convenient ready-to-cook millet chapathis made with whole grain millets. Simply heat and serve for a nutritious, wholesome meal that saves time without compromising on health.",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=400&fit=crop",
    status: "available",
  },
  {
    id: "mch-2",
    name: "Multi-Millet Soft Chapathi",
    category: "Millet Chapathis",
    categorySlug: "millet-chapathis",
    price: 250,
    additionalCharges: 35,
    description: "Soft and fluffy chapathis made from a special multi-millet blend. These chapathis stay soft for hours and pair perfectly with any curry or dal.",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=400&fit=crop",
    status: "coming-soon",
  },
  {
    id: "mch-3",
    name: "Ragi Chapathi",
    category: "Millet Chapathis",
    categorySlug: "millet-chapathis",
    price: 250,
    additionalCharges: 35,
    description: "Nutritious ragi (finger millet) chapathis rich in calcium and iron. A traditional South Indian staple made convenient for modern kitchens.",
    image: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=400&h=400&fit=crop",
    status: "coming-soon",
  },
];

export const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=1400&h=600&fit=crop",
    title: "Pure Millet Goodness",
    subtitle: "Discover the power of millets with Sarvantrah Organics",
  },
  {
    image: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=1400&h=600&fit=crop",
    title: "Healthy Snacking Redefined",
    subtitle: "From farm to your table - 100% organic millet snacks",
  },
  {
    image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=1400&h=600&fit=crop",
    title: "Taste the Tradition",
    subtitle: "Handcrafted with love using ancient grains",
  },
  {
    image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=1400&h=600&fit=crop",
    title: "Nutrition in Every Bite",
    subtitle: "Buy 4 boxes (above Rs.1000) and get FREE delivery!",
  },
];

export const galleryImages = [
  { src: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&h=400&fit=crop", alt: "Millet farming fields" },
  { src: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&h=400&fit=crop", alt: "Traditional millet chikkis" },
  { src: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600&h=400&fit=crop", alt: "Millet cookies freshly baked" },
  { src: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=600&h=400&fit=crop", alt: "Healthy food spread" },
  { src: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&h=400&fit=crop", alt: "Millet chapathis preparation" },
  { src: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=600&h=400&fit=crop", alt: "Health drink mixes" },
  { src: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=600&h=400&fit=crop", alt: "Organic ingredients" },
  { src: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=600&h=400&fit=crop", alt: "Fresh nutritious food" },
  { src: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=600&h=400&fit=crop", alt: "Cheese millet balls" },
  { src: "https://images.unsplash.com/photo-1610725664285-7c57e6eeac3f?w=600&h=400&fit=crop", alt: "Energy mix preparations" },
  { src: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&h=400&fit=crop", alt: "Fresh chapathis" },
  { src: "https://images.unsplash.com/photo-1604467707321-70d009801bf4?w=600&h=400&fit=crop", alt: "Millet snacks variety" },
];

export const aboutContent = {
  title: "About Sarvantrah Organic Foods",
  description: `Sarvantrah Organic Foods Pvt. Ltd. is a purpose-driven millet-based FMCG company from Andhra Pradesh, India, founded with a bold vision: to transform the global snacking industry by making nutritious, affordable, and natural food accessible to everyone.

In a world where chemical-laden processed snacks are increasingly harming public health, Sarvantrah was created to offer a healthier alternative. We specialize in millet-based chikkis, cookies, rotis, flours, and functional snacks that combine traditional Indian nutrition with modern food innovation. Every product is crafted with carefully sourced ingredients, strict hygiene standards, and a deep commitment to quality.

Our mission goes beyond food. Sarvantrah stands as a bridge between farmers and consumers, supporting sustainable agriculture while promoting awareness about the power of millets. Through our growing distributor network, we are empowering entrepreneurs, generating employment, and strengthening local communities.

Guided by our founder's vision to build a global leader in affordable organic FMCG, Sarvantrah is driven by three core principles: health, sustainability, and accessibility. We believe nutritious food should not be a luxury — it should be a daily right.

With innovation, ethical sourcing, and a passion for wellness, Sarvantrah Organic Foods is building a future where healthy snacking becomes the global standard.`,
  values: [
    { title: "Health First", description: "Every product is crafted to deliver maximum nutrition without compromising on taste." },
    { title: "Sustainability", description: "Supporting sustainable agriculture and empowering farming communities across India." },
    { title: "Accessibility", description: "Making nutritious food affordable and available to everyone, everywhere." },
    { title: "Quality", description: "Strict hygiene standards and carefully sourced ingredients in every product." },
  ],
};
