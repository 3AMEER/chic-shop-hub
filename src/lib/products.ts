import b1 from "@/assets/bags/Bag1.jpeg";
import b2 from "@/assets/bags/Bag2.jpeg";
import b3 from "@/assets/bags/Bag3.jpeg";
import b4 from "@/assets/bags/Bag4.jpeg";
import b5 from "@/assets/bags/Bag5.jpeg";
import b6 from "@/assets/bags/Bag6.jpeg";
import b7 from "@/assets/bags/Bag7.jpeg";
import b8 from "@/assets/bags/Bag8.jpeg";
import b9 from "@/assets/bags/Bag9.jpeg";
import b10 from "@/assets/bags/Bag10.jpeg";
import b11 from "@/assets/bags/Bag11.jpeg";
import b12 from "@/assets/bags/Bag12.jpeg";
import b13 from "@/assets/bags/Bag13.jpeg";
import b14 from "@/assets/bags/Bag14.jpeg";
import b15 from "@/assets/bags/Bag15.jpeg";
import b16 from "@/assets/bags/Bag16.jpeg";
import b17 from "@/assets/bags/Bag17.jpeg";
import b18 from "@/assets/bags/Bag18.jpeg";
import b19 from "@/assets/bags/Bag19.jpeg";
import b20 from "@/assets/bags/Bag20.jpeg";
import b21 from "@/assets/bags/Bag21.jpeg";
import b22 from "@/assets/bags/Bag22.jpeg";
import b23 from "@/assets/bags/Bag23.jpeg";
import b24 from "@/assets/bags/Bag24.jpeg";
import b25 from "@/assets/bags/Bag25.jpeg";
import b26 from "@/assets/bags/Bag26.jpeg";
import b27 from "@/assets/bags/Bag27.jpeg";
import b28 from "@/assets/bags/Bag28.jpeg";
import b29 from "@/assets/bags/Bag29.jpeg";
import b30 from "@/assets/bags/Bag30.jpeg";
import b31 from "@/assets/bags/Bag31.jpeg";
import b32 from "@/assets/bags/Bag32.jpeg";
import b33 from "@/assets/bags/Bag33.jpeg";
import b34 from "@/assets/bags/Bag34.jpeg";
import b35 from "@/assets/bags/Bag35.jpeg";
import b36 from "@/assets/bags/Bag36.jpeg";
import b37 from "@/assets/bags/Bag37.jpeg";
import b38 from "@/assets/bags/Bag38.jpeg";
import b39 from "@/assets/bags/Bag39.jpeg";
import b40 from "@/assets/bags/Bag40.jpeg";
import a41 from "@/assets/accessories/accessories1.jpeg";
import a42 from "@/assets/accessories/accessories2.jpeg";
import a43 from "@/assets/accessories/accessories3.jpeg";
import a44 from "@/assets/accessories/accessories4.jpeg";
import a45 from "@/assets/accessories/accessories5.jpeg";
import a46 from "@/assets/accessories/accessories6.jpeg";
import a47 from "@/assets/accessories/accessories7.jpeg";
import a48 from "@/assets/accessories/accessories8.jpeg";
import a49 from "@/assets/accessories/accessories9.jpeg";
import a50 from "@/assets/accessories/accessories10.jpeg";
import a51 from "@/assets/accessories/accessories11.jpeg";
import a52 from "@/assets/accessories/accessories12.jpeg";
import a53 from "@/assets/accessories/accessories13.jpeg";
import a54 from "@/assets/accessories/accessories14.jpeg";
import a55 from "@/assets/accessories/accessories15.jpeg";
import a56 from "@/assets/accessories/accessories16.jpeg";
import a57 from "@/assets/accessories/accessories17.jpeg";
import a58 from "@/assets/accessories/accessories18.jpeg";
import a59 from "@/assets/accessories/accessories19.jpeg";
import a60 from "@/assets/accessories/accessories20.jpeg";
import a61 from "@/assets/accessories/accessories21.jpeg";
import a62 from "@/assets/accessories/accessories22.jpeg";
import a63 from "@/assets/accessories/accessories23.jpeg";
import a64 from "@/assets/accessories/accessories24.jpeg";
import a65 from "@/assets/accessories/accessories25.jpeg";
import a66 from "@/assets/accessories/accessories26.jpeg";
import a67 from "@/assets/accessories/accessories27.jpeg";
import a68 from "@/assets/accessories/accessories28.jpeg";
import a69 from "@/assets/accessories/accessories29.jpeg";
import a70 from "@/assets/accessories/accessories30.jpeg";
import a71 from "@/assets/accessories/accessories31.jpeg";

export type Category = "accessories" | "bags";

export type Product = {
  id: string;
  name: string;
  price: number;
  category: Category;
  image: string;
  tagline: string;
};

export const PRODUCTS: Product[] = [
  { id: "b1", name: "شانطة كلاسيك", price: 600, category: "bags", image: b1, tagline: "جلد طبيعي" },
  { id: "b2", name: "شانطة كروس", price: 633, category: "bags", image: b2, tagline: "جلد PU فاخر" },
  { id: "b3", name: "شانطة سهرة", price: 361, category: "bags", image: b3, tagline: "تصميم إيطالي" },
  { id: "b4", name: "شانطة يومية", price: 433, category: "bags", image: b4, tagline: "تشطيب يدوي" },
  { id: "b5", name: "شانطة هوبو", price: 720, category: "bags", image: b5, tagline: "قماش متين" },
  { id: "b6", name: "شانطة ساتشيل", price: 425, category: "bags", image: b6, tagline: "جلد لامع" },
  { id: "b7", name: "شانطة بَكِت", price: 568, category: "bags", image: b7, tagline: "ساتان فاخر" },
  { id: "b8", name: "شانطة توتي", price: 444, category: "bags", image: b8, tagline: "قماش مبطن" },
  { id: "b9", name: "شانطة كلتش", price: 372, category: "bags", image: b9, tagline: "حواف ذهبية" },
  { id: "b10", name: "شانطة ميني", price: 699, category: "bags", image: b10, tagline: "سحاب معدني" },
  { id: "b11", name: "شانطة شولدر", price: 659, category: "bags", image: b11, tagline: "جلد طبيعي" },
  { id: "b12", name: "شانطة باجيت", price: 770, category: "bags", image: b12, tagline: "جلد PU فاخر" },
  { id: "b13", name: "شانطة دائرية", price: 763, category: "bags", image: b13, tagline: "تصميم إيطالي" },
  { id: "b14", name: "شانطة جلد فاخر", price: 749, category: "bags", image: b14, tagline: "تشطيب يدوي" },
  { id: "b15", name: "شانطة مبطنة", price: 403, category: "bags", image: b15, tagline: "قماش متين" },
  { id: "b16", name: "شانطة بسلسلة ذهبية", price: 432, category: "bags", image: b16, tagline: "جلد لامع" },
  { id: "b17", name: "شانطة مخملية", price: 528, category: "bags", image: b17, tagline: "ساتان فاخر" },
  { id: "b18", name: "شانطة كاجوال", price: 728, category: "bags", image: b18, tagline: "قماش مبطن" },
  { id: "b19", name: "شانطة أنيقة", price: 700, category: "bags", image: b19, tagline: "حواف ذهبية" },
  { id: "b20", name: "شانطة مزخرفة", price: 438, category: "bags", image: b20, tagline: "سحاب معدني" },
  { id: "b21", name: "شانطة كبيرة", price: 557, category: "bags", image: b21, tagline: "جلد طبيعي" },
  { id: "b22", name: "شانطة صغيرة", price: 601, category: "bags", image: b22, tagline: "جلد PU فاخر" },
  { id: "b23", name: "شانطة مدرسية", price: 630, category: "bags", image: b23, tagline: "تصميم إيطالي" },
  { id: "b24", name: "شانطة سفر", price: 485, category: "bags", image: b24, tagline: "تشطيب يدوي" },
  { id: "b25", name: "شانطة عملية", price: 350, category: "bags", image: b25, tagline: "قماش متين" },
  { id: "b26", name: "شانطة عصرية", price: 455, category: "bags", image: b26, tagline: "جلد لامع" },
  { id: "b27", name: "شانطة تركواز", price: 746, category: "bags", image: b27, tagline: "ساتان فاخر" },
  { id: "b28", name: "شانطة كحلية", price: 446, category: "bags", image: b28, tagline: "قماش مبطن" },
  { id: "b29", name: "شانطة بيج", price: 717, category: "bags", image: b29, tagline: "حواف ذهبية" },
  { id: "b30", name: "شانطة وردية", price: 716, category: "bags", image: b30, tagline: "سحاب معدني" },
  { id: "b31", name: "شانطة سوداء", price: 410, category: "bags", image: b31, tagline: "جلد طبيعي" },
  { id: "b32", name: "شانطة بنية", price: 560, category: "bags", image: b32, tagline: "جلد PU فاخر" },
  { id: "b33", name: "شانطة حمراء", price: 359, category: "bags", image: b33, tagline: "تصميم إيطالي" },
  { id: "b34", name: "شانطة بيضاء", price: 678, category: "bags", image: b34, tagline: "تشطيب يدوي" },
  { id: "b35", name: "شانطة ذهبية", price: 589, category: "bags", image: b35, tagline: "قماش متين" },
  { id: "b36", name: "شانطة فضية", price: 399, category: "bags", image: b36, tagline: "جلد لامع" },
  { id: "b37", name: "شانطة مزدوجة", price: 445, category: "bags", image: b37, tagline: "ساتان فاخر" },
  { id: "b38", name: "شانطة بحزام", price: 670, category: "bags", image: b38, tagline: "قماش مبطن" },
  { id: "b39", name: "شانطة ناعمة", price: 554, category: "bags", image: b39, tagline: "حواف ذهبية" },
  { id: "b40", name: "شانطة لامعة", price: 364, category: "bags", image: b40, tagline: "سحاب معدني" },
  { id: "a41", name: "عقد ذهبي", price: 217, category: "accessories", image: a41, tagline: "ذهب 18 قيراط" },
  { id: "a42", name: "سوار كلوفر", price: 282, category: "accessories", image: a42, tagline: "ستانلس مقاوم" },
  { id: "a43", name: "أقراط لؤلؤ", price: 168, category: "accessories", image: a43, tagline: "لمسة كلاسيكية" },
  { id: "a44", name: "خاتم أنيق", price: 285, category: "accessories", image: a44, tagline: "تصميم عصري" },
  { id: "a45", name: "سلسلة ناعمة", price: 163, category: "accessories", image: a45, tagline: "لمعان ناعم" },
  { id: "a46", name: "سوار ذهبي", price: 264, category: "accessories", image: a46, tagline: "ستيل ذهبي" },
  { id: "a47", name: "عقد كلوفر", price: 164, category: "accessories", image: a47, tagline: "قطعة فاخرة" },
  { id: "a48", name: "طقم مجوهرات", price: 95, category: "accessories", image: a48, tagline: "طقم متكامل" },
  { id: "a49", name: "حلق دائري", price: 233, category: "accessories", image: a49, tagline: "ذهب وردي" },
  { id: "a50", name: "خاتم متعدد", price: 214, category: "accessories", image: a50, tagline: "حجر زركون" },
  { id: "a51", name: "سلسلة قلب", price: 295, category: "accessories", image: a51, tagline: "تصميم أنيق" },
  { id: "a52", name: "سوار لؤلؤ", price: 132, category: "accessories", image: a52, tagline: "تشطيب لامع" },
  { id: "a53", name: "عقد دلاية", price: 284, category: "accessories", image: a53, tagline: "لون شامبانيا" },
  { id: "a54", name: "حلق نجمي", price: 249, category: "accessories", image: a54, tagline: "صدف طبيعي" },
  { id: "a55", name: "خاتم زركون", price: 210, category: "accessories", image: a55, tagline: "حجر فيروزي" },
  { id: "a56", name: "سوار رفيع", price: 162, category: "accessories", image: a56, tagline: "ذهب لامع" },
  { id: "a57", name: "عقد متعدد", price: 286, category: "accessories", image: a57, tagline: "لؤلؤ صناعي" },
  { id: "a58", name: "حلق طويل", price: 236, category: "accessories", image: a58, tagline: "لمسة عصرية" },
  { id: "a59", name: "خاتم وردة", price: 218, category: "accessories", image: a59, tagline: "تصميم ملكي" },
  { id: "a60", name: "سلسلة كاحل", price: 218, category: "accessories", image: a60, tagline: "ستايل بسيط" },
  { id: "a61", name: "سوار ساعة", price: 143, category: "accessories", image: a61, tagline: "ذهب 18 قيراط" },
  { id: "a62", name: "عقد فراشة", price: 114, category: "accessories", image: a62, tagline: "ستانلس مقاوم" },
  { id: "a63", name: "حلق صدف", price: 218, category: "accessories", image: a63, tagline: "لمسة كلاسيكية" },
  { id: "a64", name: "خاتم خاتم", price: 173, category: "accessories", image: a64, tagline: "تصميم عصري" },
  { id: "a65", name: "سلسلة عريضة", price: 194, category: "accessories", image: a65, tagline: "لمعان ناعم" },
  { id: "a66", name: "سوار ذهب وردي", price: 82, category: "accessories", image: a66, tagline: "ستيل ذهبي" },
  { id: "a67", name: "عقد قمر", price: 97, category: "accessories", image: a67, tagline: "قطعة فاخرة" },
  { id: "a68", name: "حلق متدلي", price: 142, category: "accessories", image: a68, tagline: "طقم متكامل" },
  { id: "a69", name: "خاتم خاتمي", price: 278, category: "accessories", image: a69, tagline: "ذهب وردي" },
  { id: "a70", name: "سوار سحر", price: 276, category: "accessories", image: a70, tagline: "حجر زركون" },
  { id: "a71", name: "عقد نجمة", price: 254, category: "accessories", image: a71, tagline: "تصميم أنيق" },
];

export const CATEGORIES: { value: Category | "all"; label: string }[] = [
  { value: "all", label: "الكل" },
  { value: "accessories", label: "إكسسوارات" },
  { value: "bags", label: "شنط" },
];
