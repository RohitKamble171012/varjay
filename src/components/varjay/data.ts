<<<<<<< HEAD

import fluteImg from "@/assets/instruments/flute.png";
import vocalImg from "@/assets/hero/vocal.jpg";

export const INSTRUMENTS = [
  { name: "Tabla", category: "Indian Classical Percussion", color: "#F59E0B", height: 380, img: "https://images.unsplash.com/photo-1568219656418-15c329312bf1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Dholak", category: "Indian Folk Percussion", color: "#F43F5E", height: 280, img: "https://www.carvedculture.in/cdn/shop/articles/Indian-Dholak_Drum-The-Complete-Guide_68f25b2e-b994-460f-8768-2da4673398ac.jpg?v=1774273778&width=900" },
  { name: "Guitar", category: "Acoustic & Electric", color: "#0D9488", height: 420, img: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=800&q=80" },
  { name: "Piano", category: "Western Classical", color: "#7C3AED", height: 320, img: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=800&q=80" },
  { name: "Harmonium", category: "Indian Classical Keys", color: "#0EA5E9", height: 350, img: "https://images.unsplash.com/photo-1695473379092-95a482d9bd11?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
 
  { name: "Vocal", category: "Hindustani,Carnatic & Western Singing", color: "#65A30D", height: 300, img: vocalImg },
  
  { name: "Violin", category: "Hindustani,Carnatic & Western Strings", color: "#DB2777", height: 400, img: "https://images.unsplash.com/photo-1624367171718-14026220ee35?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
=======
import tablaImg from "@/assets/instruments/tabla.png";
import dholakImg from "@/assets/instruments/dholak.png";
import harmoniumImg from "@/assets/instruments/harmonium.png";
import ukuleleImg from "@/assets/instruments/ukulele.png";
import violinImg from "@/assets/instruments/violin.png";
import fluteImg from "@/assets/instruments/flute.png";
import mandolinImg from "@/assets/instruments/mandolin.png";

export const INSTRUMENTS = [
  { name: "Tabla", category: "Indian Classical Percussion", color: "#F59E0B", height: 380, img: tablaImg },
  { name: "Dholak", category: "Indian Folk Percussion", color: "#F43F5E", height: 280, img: dholakImg },
  { name: "Guitar", category: "Acoustic & Electric", color: "#0D9488", height: 420, img: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=800&q=80" },
  { name: "Piano", category: "Western Classical", color: "#7C3AED", height: 320, img: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=800&q=80" },
  { name: "Harmonium", category: "Indian Classical Keys", color: "#0EA5E9", height: 350, img: harmoniumImg },
  { name: "Ukulele", category: "Strings", color: "#65A30D", height: 300, img: ukuleleImg },
  { name: "Mandolin", category: "Strings", color: "#EA580C", height: 360, img: mandolinImg },
  { name: "Violin", category: "Western Classical Strings", color: "#DB2777", height: 400, img: violinImg },
>>>>>>> cd17ad2ae7ed554cbec92fe20594040b40d4bbf9
  { name: "Flute", category: "Wind", color: "#4F46E5", height: 290, img: fluteImg },
];

export const TESTIMONIALS = [
<<<<<<< HEAD
  {
    quote: "I am getting classes for classical music here. The atmosphere is very musical. Teacher is well trained and versatile and the owner himself is very kind genuine and visharad in Tabla. Great experience.",
    name: "Ayush Kumar",
    instrument: "Classical Music / Tabla"
  },
  {
    quote: "I started going to this class 2 yeas back and now I have successfully passed my 1st tabla exam. The Sir us very general and gentle and hears The opinions of others before deciding . Thank for teaching me so good.",
    name: "Vivek Kulkarni",
    instrument: "Tabla"
  },
  {
    quote: "It's a great music academy.The the sirs pay ful attention and correct you when required.It is fun and exiting to learn music at this academy.",
    name: "Vishal Gavhane",
    instrument: "Music"
  },
  {
    quote: "Varjay music academy is best for learning singing and Tabla the teacher's vishal sir and arvind sir are exceptionally good at teaching and are masters in their field overall this academy is best",
    name: "Nikita Pawar",
    instrument: "Singing / Tabla"
  },
  {
    quote: "This class is very good for learning tabla and keyboard, also guitar. Overall teaching is good and the sir is very kind.this is a great class for kids to learn instruments.",
    name: "Swapna Gunjal",
    instrument: "Tabla / Keyboard / Guitar"
  },
  {
    quote: "Learning Guitar since last one year. Great faculty and flexibility of timings as well... Overall a great experience ...",
    name: "Rakesh Patil",
    instrument: "Guitar"
  },
  {
    quote: "My kid started going to Varjay music academy since March for keyboard class. The teaching approach is very good, it starts with the basic and progresses as per kids learning capacity. My experience with the academy is very satisfactory.",
    name: "Rutuja Wabgaonkar",
    instrument: "Keyboard"
  },
  {
    quote: "My Son Advait is learning Tabla from Arvind sir and Parth is learning singing from Vishal sir and we are very happy with the teachers.. Highly recommended.... Dedicated teachers",
    name: "Dr. Amit Saxena",
    instrument: "Tabla / Singing"
  },
  {
    quote: "It is a very good music class even shivansh learns a lot of things and also he enjoys it thanks you sir",
    name: "Vijay Shinde",
    instrument: "Music"
  },
  {
    quote: "A talented passionate teacher & motivator.Best wishes Arvind. Rao.",
    name: "AumShreesainam Sainath",
    instrument: "Music"
  }
];
=======
  { quote: "Arvind sir's teaching is exceptional. Within months I was playing tabla compositions I never imagined.", name: "Arnav Shinde", instrument: "Tabla" },
  { quote: "The small batch size means real attention. My daughter learnt keyboard from absolute zero in 6 months.", name: "Priya Mehta", instrument: "Piano" },
  { quote: "Best music academy in Navi Mumbai. Online classes feel as personal as offline.", name: "Rohan Kapoor", instrument: "Guitar" },
  { quote: "I started learning harmonium at 45. They made me feel like a beginner is a beautiful thing.", name: "Sunita Gupta", instrument: "Harmonium" },
  { quote: "My son performed on stage within his first year. Varjay gives confidence, not just lessons.", name: "Vikram Pandey", instrument: "Tabla" },
  { quote: "I take classes from London. The connection, the discipline, the music — it all reaches me.", name: "Neha Patel", instrument: "Vocals" },
  { quote: "No admission fee, no nonsense. Just pure music education. Rare these days.", name: "Aditya Kulkarni", instrument: "Guitar" },
  { quote: "Republic Day performance was magical. Every student got their moment.", name: "Ritika Shah", instrument: "Keyboard" },
  { quote: "10 stars if I could. The Sanskrit shloka they share every class still gives me goosebumps.", name: "Manish Verma", instrument: "Flute" },
];

>>>>>>> cd17ad2ae7ed554cbec92fe20594040b40d4bbf9
export const GALLERY = [
  "https://varjaymusic.com/wp-content/uploads/2024/07/tabla.jpg",
  "https://varjaymusic.com/wp-content/uploads/2024/05/SRG_1204-copy-scaled-1-1024x576.jpg",
  "https://varjaymusic.com/wp-content/uploads/2024/07/arvind1.jpg",
  "https://varjaymusic.com/wp-content/uploads/2024/05/how-to-play-acous123tic-guitar.jpg",
<<<<<<< HEAD
=======
  "https://varjaymusic.com/wp-content/uploads/2024/08/tabla-details.jpg",
>>>>>>> cd17ad2ae7ed554cbec92fe20594040b40d4bbf9
  "https://varjaymusic.com/wp-content/uploads/2025/11/gp17-1024x458.jpg",
];
