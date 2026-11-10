import { useMemo, useState } from "react";
import { createFileRoute, Link, useSearch } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, MapPin, Maximize2, Search, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { listings } from "@/lib/listing-data";

export const Route = createFileRoute("/tin-dang")({
  validateSearch: (search: Record<string, unknown>): { loai?: string | undefined; quan?: string | undefined } => ({
    loai: typeof search["loai"] === "string" ? search["loai"] : undefined,
    quan: typeof search["quan"] === "string" ? search["quan"] : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Tin nhà đất Đà Nẵng — An Cư" },
      { name: "description", content: "Khám phá nhà bán, căn hộ và nơi thuê tại Đà Nẵng cùng An Cư." },
      { property: "og:title", content: "Tin nhà đất Đà Nẵng — An Cư" },
      { property: "og:description", content: "Khám phá nhà bán, căn hộ và nơi thuê tại Đà Nẵng cùng An Cư." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ListingsPage,
});

function ListingsPage() {
  const search = useSearch({ from: "/tin-dang" });
  const [typeFilter, setTypeFilter] = useState(search.loai === "ban" ? "Bán" : search.loai === "thue" ? "Cho thuê" : "Tất cả");
  const [districtFilter, setDistrictFilter] = useState(search.quan ?? "Tất cả khu vực");
  const [keyword, setKeyword] = useState("");
  const visibleListings = useMemo(() => listings.filter((listing) => {
    const matchType = typeFilter === "Tất cả" || listing.type === typeFilter;
    const matchDistrict = districtFilter === "Tất cả khu vực" || listing.district.toLowerCase().includes(districtFilter.toLowerCase());
    const query = keyword.trim().toLocaleLowerCase("vi");
    const matchKeyword = !query || `${listing.title} ${listing.location}`.toLocaleLowerCase("vi").includes(query);
    return matchType && matchDistrict && matchKeyword;
  }), [districtFilter, keyword, typeFilter]);

  return (
    <main className="listing-page">
      <header className="site-header">
        <div className="site-header__inner page-shell">
          <Link className="brand" to="/"><span className="brand__mark"><span>⌂</span></span><span><strong>an cư</strong><small>ĐÀ NẴNG · NHÀ CỦA BẠN</small></span></Link>
          <nav className="main-nav" aria-label="Điều hướng chính"><Link to="/">Trang chủ</Link><Link to="/tin-dang" className="main-nav__active">Tin đăng</Link><Link to="/" hash="gioi-thieu">Giới thiệu</Link><Link to="/" hash="lien-he">Liên hệ</Link></nav>
          <div className="site-header__actions"><Link className="login-link" to="/" hash="lien-he">Đăng nhập</Link><Button asChild className="button-pill"><Link to="/" hash="lien-he">Đăng tin <ArrowRight /></Link></Button></div>
        </div>
      </header>
      <section className="listings-page-hero"><div className="page-shell"><Link className="back-link" to="/"><ArrowLeft /> Về trang chủ</Link><span className="eyebrow">TÌM NƠI CHỐN PHÙ HỢP</span><h1>Những ngôi nhà<br /><em>đang chờ bạn.</em></h1><p>Khám phá không gian sống được chọn lọc tại Đà Nẵng.</p></div></section>
      <section className="listings-page-content page-shell">
        <div className="listing-tools"><div className="listing-search"><Search /><input aria-label="Tìm theo tên hoặc khu vực" placeholder="Bạn muốn tìm khu vực nào?" value={keyword} onChange={(event) => setKeyword(event.target.value)} /></div><label className="filter-select"><SlidersHorizontal /><span className="sr-only">Lọc theo loại tin</span><select aria-label="Lọc theo loại tin" value={typeFilter} onChange={(event) => setTypeFilter(event.target.value)}><option>Tất cả</option><option>Bán</option><option>Cho thuê</option></select></label><label className="filter-select"><MapPin /><span className="sr-only">Lọc theo khu vực</span><select aria-label="Lọc theo khu vực" value={districtFilter} onChange={(event) => setDistrictFilter(event.target.value)}><option>Tất cả khu vực</option><option>Hải Châu</option><option>Sơn Trà</option><option>Ngũ Hành Sơn</option><option>Cẩm Lệ</option></select></label></div>
        <div className="listing-results-heading"><div><span className="eyebrow">DANH SÁCH GỢI Ý</span><h2>{visibleListings.length} không gian sống</h2></div><span className="sample-note">Tin và giá minh họa</span></div>
        {visibleListings.length ? <div className="property-grid">{visibleListings.map((listing, index) => <PropertyCard key={listing.id} listing={listing} index={index} />)}</div> : <div className="listing-empty"><Search /><h3>Chưa tìm thấy nơi phù hợp</h3><p>Thử thay đổi từ khóa hoặc bộ lọc khu vực.</p><Button variant="outline" className="button-pill button-pill--outline" onClick={() => { setTypeFilter("Tất cả"); setDistrictFilter("Tất cả khu vực"); setKeyword(""); }}>Xóa bộ lọc</Button></div>}
      </section>
      <footer className="listing-page-footer"><div className="page-shell"><Link className="brand brand--footer" to="/"><span className="brand__mark"><span>⌂</span></span><span><strong>an cư</strong><small>ĐÀ NẴNG · NHÀ CỦA BẠN</small></span></Link><span>© 2025 AN CƯ ĐÀ NẴNG · BẢN MẪU GIAO DIỆN</span></div></footer>
    </main>
  );
}

function PropertyCard({ listing, index }: { listing: (typeof listings)[number]; index: number }) {
  const [saved, setSaved] = useState(false);
  return (
    <article className="property-card">
      <Link className="property-card__image" to="/tin-dang" aria-label={`Xem ${listing.title}`}><img src={listing.image} alt={listing.title} width={1280} height={960} loading="lazy" /><span className={`property-tag property-tag--${listing.type === "Bán" ? "sale" : "rent"}`}>{listing.type}</span></Link>
      <Button variant="ghost" size="icon" className={`property-save ${saved ? "property-save--active" : ""}`} aria-label={saved ? "Bỏ lưu tin" : "Lưu tin đăng"} aria-pressed={saved} onClick={() => setSaved((value) => !value)}><span>{saved ? "♥" : "♡"}</span></Button>
      <div className="property-card__body"><span className="property-card__place"><MapPin /> {listing.location}</span><h3><Link to="/tin-dang">{listing.title}</Link></h3><div className="property-card__detail"><span><Maximize2 /> {listing.area}</span><span>{listing.detail}</span></div><div className="property-card__footer"><strong>{listing.price}</strong><span>#{listing.id.slice(0, 5).toUpperCase()}</span></div></div>
    </article>
  );
}