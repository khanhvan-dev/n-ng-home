import apartmentImage from "@/assets/da-nang-city-apartment.jpg";
import familyImage from "@/assets/da-nang-family-home.jpg";
import coastalImage from "@/assets/da-nang-coastal-hero.jpg";
import beachImage from "@/assets/da-nang-beach-lifestyle.jpg";

export type Listing = {
  id: string;
  title: string;
  location: string;
  district: string;
  price: string;
  area: string;
  type: "Bán" | "Cho thuê";
  image: string;
  detail: string;
};

// Illustrative listings for the visual prototype, not live market data.
export const listings: Listing[] = [
  {
    id: "an-thuong-apartment",
    title: "Căn hộ sáng thoáng gần biển Mỹ Khê",
    location: "An Thượng, Ngũ Hành Sơn",
    district: "Ngũ Hành Sơn",
    price: "3,2 tỷ",
    area: "78 m²",
    type: "Bán",
    image: apartmentImage,
    detail: "2 phòng ngủ · 2 phòng tắm",
  },
  {
    id: "son-tra-coastal-home",
    title: "Nhà phố yên tĩnh giữa vườn xanh Sơn Trà",
    location: "Thọ Quang, Sơn Trà",
    district: "Sơn Trà",
    price: "18 triệu/tháng",
    area: "120 m²",
    type: "Cho thuê",
    image: familyImage,
    detail: "3 phòng ngủ · Sân vườn",
  },
  {
    id: "hai-chau-river-view",
    title: "Căn hộ bên sông, ngắm nhịp cầu thành phố",
    location: "Hải Châu, Đà Nẵng",
    district: "Hải Châu",
    price: "4,6 tỷ",
    area: "92 m²",
    type: "Bán",
    image: apartmentImage,
    detail: "2 phòng ngủ · View sông",
  },
  {
    id: "my-khe-beach-home",
    title: "Ngôi nhà nghỉ dưỡng cách biển vài bước",
    location: "Mỹ An, Ngũ Hành Sơn",
    district: "Ngũ Hành Sơn",
    price: "28 triệu/tháng",
    area: "165 m²",
    type: "Cho thuê",
    image: coastalImage,
    detail: "3 phòng ngủ · Nội thất đầy đủ",
  },
  {
    id: "cam-le-townhouse",
    title: "Nhà phố hiện đại, khoảng sân cho gia đình",
    location: "Hòa Xuân, Cẩm Lệ",
    district: "Cẩm Lệ",
    price: "5,8 tỷ",
    area: "110 m²",
    type: "Bán",
    image: familyImage,
    detail: "3 phòng ngủ · Nhà mới",
  },
  {
    id: "ngu-hanh-son-condo",
    title: "Căn hộ nghỉ ngơi giữa sắc xanh miền biển",
    location: "Khuê Mỹ, Ngũ Hành Sơn",
    district: "Ngũ Hành Sơn",
    price: "14 triệu/tháng",
    area: "68 m²",
    type: "Cho thuê",
    image: beachImage,
    detail: "1 phòng ngủ · Ban công",
  },
];