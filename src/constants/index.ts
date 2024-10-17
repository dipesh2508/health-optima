// Blog Images
import blog1 from "@/assets/images/blog 1.png";
import blog2 from "@/assets/images/blog 2.png";
import blog3 from "@/assets/images/blog 3.png";
import blog4 from "@/assets/images/blog 4.png";
// cta Images
import bmi1 from "@/assets/images/bmi1.jpg";
import sleep1 from "@/assets/images/sleep1.png";
import water1 from "@/assets/images/water1.jpg";

export const navLinks = [
	{
		id: "",
		title: "Home"
	},
	{
		id: "blogs",
		title: "Blogs",
	},
	{
		id: "apps",
		title: "Apps",
	},
	{
		id: "about",
		title: "About",
	},
	{
		id: "contact",
		title: "Contact",
	},
]

export const blogData = [
  {
    no: "01",
    image: blog1,
    category: "Food",
    title: "The Power of Plant-Based Eating: A Guide to Meals",
    description:
      "Discover the benefits of a plant-based diet and learn how to create balanced, flavorful meals that nourish your body and delight your taste buds. From protein-packed legumes to nutrient-dense greens, explore the world of plant-based cuisine.",
    link: "/blogs/power-of-plant-based-eating",
  },
  {
    no: "02",
    image: blog2,
    category: "fitness",
    title: "The Ultimate Guide to a Healthy Workout Routine",
    description:
      "Achieve your fitness goals with our expert tips and personalized workout plans. Whether you're a beginner or a seasoned athlete, our guide will help you stay motivated and achieve your best results.",
    link: "/blogs/ultimate-guide-to-a-healthy-workout-routine",
  },
  {
    no: "03",
    category: "Health",
    title: "The Lifesaving Elixir: Why Staying Hydrated is Vital for Your Health",
    description:
      "Water is essential for life with many health benefits. Stay hydrated by drinking enough water, eating fruits and vegetables, avoiding sugary drinks, and paying attention to your thirst cues.",
    link: "/blogs/The-Lifesaving-Elixir",
    image: blog3,
  },
  {
    no: "04",
    image: blog4,
    category: "Wellness",
    title: "The Silent Struggle: Insomnia and How to Overcome It",
    description:
      "A pervasive sleep disorder that can have a devastating impact on your health, work, and relationships. Learn about the causes, effects, and practical solutions in this comprehensive blog.",
    link: "/blogs/The-Silent-Struggle", 
  },
];

export const ctaData = [
  {
    no: "01",
    image: sleep1,
    title: "Sleep Tracker",
  },
  {
    no: "02",
    image: bmi1,
    title: "BMI Calculator",
  },
  {
    no: "03",
    image: water1,
    title: "Water Tracker",
  },
];
