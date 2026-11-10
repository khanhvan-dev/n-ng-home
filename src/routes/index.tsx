import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BedDouble,
  Building2,
  Check,
  ChevronDown,
  Heart,
  House,
  MapPin,
  Maximize2,
  Menu,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Waves,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { listings } from "@/lib/listing-data";
import heroImage from "@/assets/da-nang-coastal-hero.jpg";
import apartmentImage from "@/assets/da-nang-city-apartment.jpg";
import familyImage from "@/assets/da-nang-family-home.jpg";
import beachImage from "@/assets/da-nang-beach-lifestyle.jpg";
import coastalImage from "@/assets/da-nang-coastal-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "An Cư Đà Nẵng — Tìm nơi chốn thuộc về" },
      {
        name: "description",
        content: "Khám phá nhà bán, căn hộ cho thuê và nhịp sống Đà Nẵng cùng An Cư.",
      },
      { property: "og:title", content: "An Cư Đà Nẵng — Tìm nơi chốn thuộc về" },
      {
        property: "og:description",
        content: "Khám phá nhà bán, căn hộ cho thuê và nhịp sống Đà Nẵng cùng An Cư.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const reviews = [
  {
    name: "Ngọc Anh",
    role: "Tìm thuê nhà tại Sơn Trà",
    quote: "Mình tìm được căn hộ vừa vặn chỉ sau một cuối tuần. Thông tin rõ ràng, khu vực đúng với điều mình cần.",
    initials: "NA",
  },
  {
    name: "Minh Khoa",
    role: "Chủ nhà tại Hải Châu",
    quote: "Đăng tin đơn giản và gặp được người thuê phù hợp. Mình thích cách An Cư hiểu từng khu vực ở Đà Nẵng.",
    initials: "MK",
  },
  {
    name: "Thu Hà",
    role: "Mua căn nhà đầu tiên",
    quote: "Những gợi ý theo phong cách sống giúp hai vợ chồng thu hẹp lựa chọn và tìm thấy căn nhà đầu tiên.",
    initials: "TH",
  },
];

const guides = [
  { category: "CẨM NANG MUA NHÀ", title: "Lần đầu mua nhà ở Đà Nẵng: bắt đầu từ đâu?", image: familyImage, date: "12.06.2025" },
  { category: "SỐNG Ở ĐÀ NẴNG", title: "Một ngày thật chậm bên bờ biển Mỹ Khê", image: beachImage, date: "08.06.2025" },
  { category: "CẨM NANG THUÊ NHÀ", title: "Chọn khu vực thuê nhà theo nhịp sống của bạn", image: apartmentImage, date: "02.06.2025" },
];

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [reviewIndex, setReviewIndex] = useState(0);
  const activeReview = reviews[reviewIndex] ?? {
    name: "Ngọc Anh",
    role: "Người tìm nhà tại Đà Nẵng",
    quote: "Mình tìm được căn hộ vừa vặn chỉ sau một cuối tuần.",
    initials: "NA",
  };

  return (
    <main>
      <header className="site-header">
        <div className="site-header__inner page-shell">
          <a className="brand" href="#trang-chu" aria-label="An Cư, về đầu trang">
            <span className="brand__mark"><House size={20} strokeWidth={1.6} /></span>
            <span><strong>an cư</strong><small>ĐÀ NẴNG · NHÀ CỦA BẠN</small></span>
          </a>
          <nav className={`main-nav ${menuOpen ? "main-nav--open" : ""}`} aria-label="Điều hướng chính">
            <a href="#trang-chu" onClick={() => setMenuOpen(false)}>Trang chủ</a>
            <Link to="/tin-dang" onClick={() => setMenuOpen(false)}>Tin đăng</Link>
            <a href="#gioi-thieu" onClick={() => setMenuOpen(false)}>Giới thiệu</a>
            <a href="#lien-he" onClick={() => setMenuOpen(false)}>Liên hệ</a>
          </nav>
          <div className="site-header__actions">
            <a className="login-link" href="#lien-he">Đăng nhập</a>
            <Button asChild className="button-pill"><a href="#lien-he">Đăng tin <ArrowUpRight /></a></Button>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="mobile-menu-toggle"
            aria-label={menuOpen ? "Đóng menu" : "Mở menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </header>

      <section className="hero-section" id="trang-chu" aria-labelledby="hero-title">
        <img className="hero-section__image" src={heroImage} alt="Ngôi nhà ven biển nhìn ra vịnh Đà Nẵng" width={1920} height={1200} fetchPriority="high" />
        <div className="hero-section__shade" />
        <div className="hero-content page-shell">
          <div className="hero-content__copy">
            <span className="eyebrow eyebrow--light"><span className="eyebrow__dot" /> CHỌN MỘT NƠI, BẮT ĐẦU MỘT ĐỜI SỐNG</span>
            <h1 id="hero-title">Có một nơi<br />gọi là <em>nhà.</em></h1>
            <p>Giữa biển xanh, sông hiền và phố thị đầy sức sống — tìm không gian hợp với câu chuyện của bạn ở Đà Nẵng.</p>
            <Button asChild size="lg" className="button-pill button-pill--light">
              <Link to="/tin-dang">Khám phá tin đăng <ArrowRight /></Link>
            </Button>
          </div>
          <div className="hero-note"><span>16°04′B · 108°13′Đ</span><span>ĐÀ NẴNG, VIỆT NAM</span></div>
          <a className="hero-scroll" href="#tong-quan"><span>Cuộn để khám phá</span><ArrowDown size={15} /></a>
        </div>
        <a className="hero-caption" href="#khong-gian-song"><Waves size={15} /> Sơn Trà, nơi núi gặp biển</a>
      </section>

      <section className="stats-section" id="tong-quan" aria-label="An Cư qua những con số">
        <div className="page-shell stats-grid">
          <div className="stats-intro"><span className="eyebrow">AN CƯ · ĐÀ NẴNG</span><h2>Một thành phố.<br /><em>Muôn nơi chốn.</em></h2></div>
          <div className="stat-item"><strong>1.280<span>+</span></strong><span>Tin đăng đang khám phá</span></div>
          <div className="stat-item"><strong>860</strong><span>Nhà và căn hộ mua bán</span></div>
          <div className="stat-item"><strong>420</strong><span>Không gian cho thuê</span></div>
          <div className="stat-item"><strong>5.600<span>+</span></strong><span>Người tìm chốn an cư</span></div>
        </div>
        <p className="stats-disclaimer page-shell">Số liệu minh họa cho giao diện mẫu</p>
      </section>

      <section className="needs-section section-pad" aria-labelledby="needs-title">
        <div className="page-shell">
          <div className="section-heading section-heading--row">
            <div><span className="eyebrow">MỘT NỀN TẢNG · NHIỀU HÀNH TRÌNH</span><h2 id="needs-title">Bắt đầu từ điều<br /><em>bạn đang tìm.</em></h2></div>
            <p>Một mái nhà mới, một nơi thuê vừa vặn hay một cơ hội chia sẻ — mọi hành trình đều có điểm bắt đầu.</p>
          </div>
          <div className="needs-grid">
            <a className="need-card need-card--sale" href="/tin-dang?loai=ban">
              <span className="need-card__number">01 / MUA</span><div className="need-card__icon"><Building2 /></div>
              <h3>Tìm nhà<br />để thuộc về.</h3><p>Những lựa chọn mua bán được tuyển chọn cho hành trình an cư lâu dài.</p><span className="need-card__link">Khám phá nhà bán <ArrowUpRight /></span>
            </a>
            <a className="need-card need-card--rent" href="/tin-dang?loai=thue">
              <span className="need-card__number">02 / THUÊ</span><div className="need-card__icon"><Waves /></div>
              <h3>Thuê một<br />nhịp sống mới.</h3><p>Căn hộ, nhà phố và nơi nghỉ ngơi theo đúng nhịp sống của bạn.</p><span className="need-card__link">Khám phá nhà thuê <ArrowUpRight /></span>
            </a>
            <a className="need-card need-card--post" href="#lien-he">
              <span className="need-card__number">03 / CHIA SẺ</span><div className="need-card__icon"><House /></div>
              <h3>Đưa ngôi nhà<br />đến đúng người.</h3><p>Chia sẻ tin đăng để người đang tìm kiếm sớm tìm thấy tổ ấm.</p><span className="need-card__link">Đăng tin cùng An Cư <ArrowUpRight /></span>
            </a>
          </div>
        </div>
      </section>

      <section className="about-section section-pad" id="gioi-thieu" aria-labelledby="about-title">
        <div className="page-shell">
          <div className="about-intro"><span className="eyebrow">MỘT CÁCH TÌM NHÀ KHÁC ĐI</span><h2 id="about-title">Không chỉ tìm một địa chỉ.<br /><em>Tìm đúng cảm giác.</em></h2><p>An Cư đưa người tìm nhà và người có nhà đến gần nhau hơn — bằng thông tin rõ ràng, cảm hứng sống và sự am hiểu từng góc phố Đà Nẵng.</p></div>
          <div className="about-grid">
            <article className="about-card about-card--finder">
              <img src={apartmentImage} alt="Căn hộ thoáng sáng nhìn ra sông Hàn" width={1280} height={960} loading="lazy" />
              <div className="about-card__overlay"><span>01 · DÀNH CHO BẠN</span><h3>Người tìm<br />bất động sản</h3><a href="/tin-dang">Tìm nơi phù hợp <ArrowUpRight /></a></div>
            </article>
            <article className="about-card about-card--owner">
              <img src={familyImage} alt="Ngôi nhà trong khu vườn xanh tại Đà Nẵng" width={1280} height={960} loading="lazy" />
              <div className="about-card__overlay"><span>02 · DÀNH CHO BẠN</span><h3>Người đăng tin</h3><a href="#lien-he">Chia sẻ không gian <ArrowUpRight /></a></div>
            </article>
          </div>
        </div>
      </section>

      <section className="city-section" id="khong-gian-song" aria-labelledby="city-title">
        <div className="city-visual"><img src={beachImage} alt="Bờ biển Mỹ Khê trong nắng sớm" width={1280} height={960} loading="lazy" /><div className="city-stamp">ĐÀ NẴNG<br /><span>16°03′N</span></div></div>
        <div className="city-story"><span className="eyebrow eyebrow--light">KHÔNG GIAN SỐNG · ĐÀ NẴNG</span><h2 id="city-title">Sáng nghe<br />sóng vỗ.<br /><em>Chiều qua<br />cầu về nhà.</em></h2><p>Có thành phố dịu dàng trong vị mặn của biển, trong dòng sông lặng trôi và những con phố đủ gần để thấy mình thuộc về. Ở Đà Nẵng, mỗi khu phố mở ra một cách sống rất riêng.</p><a className="text-link text-link--light" href="#phong-cach-song">Cảm nhận thành phố <ArrowRight /></a><div className="city-story__coordinates">SƠN TRÀ &nbsp;·&nbsp; HẢI CHÂU &nbsp;·&nbsp; NGŨ HÀNH SƠN</div></div>
      </section>

      <section className="listings-section section-pad" id="tin-dang-moi" aria-labelledby="listings-title">
        <div className="page-shell">
          <div className="section-heading section-heading--row listings-heading">
            <div><span className="eyebrow">NHỮNG LỰA CHỌN VỪA LÊN SÓNG</span><h2 id="listings-title">Tin đăng <em>mới nhất.</em></h2></div>
            <Link className="text-link" to="/tin-dang">Xem tất cả tin đăng <ArrowRight /></Link>
          </div>
          <p className="sample-note">Tin và mức giá dưới đây là nội dung minh họa.</p>
          <div className="property-grid">
            {listings.map((listing, index) => <PropertyCard key={listing.id} listing={listing} index={index} />)}
          </div>
          <div className="center-action"><Button asChild variant="outline" className="button-pill button-pill--outline"><Link to="/tin-dang">Xem thêm tin đăng <ArrowRight /></Link></Button></div>
        </div>
      </section>

      <section className="match-section section-pad" aria-labelledby="match-title">
        <div className="page-shell match-grid">
          <div className="match-copy"><span className="eyebrow">GỢI Ý CÓ CHỌN LỌC</span><h2 id="match-title">Một nơi bạn thích.<br /><em>Những nơi tương tự.</em></h2><p>Khi một căn nhà khiến bạn dừng lại, An Cư gợi mở thêm những lựa chọn có cùng nhịp sống, diện tích và khoảng cách bạn quan tâm.</p><ul className="match-benefits"><li><Check /> Gợi ý theo khu vực yêu thích</li><li><Check /> So sánh diện tích và mức giá</li><li><Check /> Khám phá thêm, không bỏ lỡ</li></ul><Button asChild className="button-pill"><Link to="/tin-dang">Tìm ngôi nhà phù hợp <ArrowRight /></Link></Button></div>
          <div className="match-demo">
            <div className="match-demo__topline"><span><Sparkles size={15} /> AN CƯ GỢI Ý</span><span>01 / 03</span></div>
            <article className="match-feature">
              <div className="match-feature__image"><img src={apartmentImage} alt="Căn hộ đang được xem bên sông Hàn" width={1280} height={960} loading="lazy" /><span className="listing-badge">ĐANG XEM</span></div>
              <div className="match-feature__details"><span className="eyebrow">HẢI CHÂU · ĐÀ NẴNG</span><h3>Căn hộ bên sông Hàn, ánh sáng dịu mỗi sớm</h3><div className="match-feature__meta"><span><BedDouble /> 2 phòng ngủ</span><span><Maximize2 /> 92 m²</span></div><strong>4,6 tỷ</strong></div>
            </article>
            <div className="match-similar-label"><span>CÓ THỂ BẠN CŨNG THÍCH</span><span>3 lựa chọn gần đây</span></div>
            <div className="similar-list">
              <div className="similar-row"><img src={familyImage} alt="Nhà vườn xanh tại Ngũ Hành Sơn" width={1280} height={960} loading="lazy" /><div><strong>Nhà vườn yên tĩnh giữa Sơn Trà</strong><span>Sơn Trà · 118 m²</span></div><b>5,1 tỷ</b></div>
              <div className="similar-row"><img src={coastalImage} alt="Nhà phố gần biển Đà Nẵng" width={1920} height={1200} loading="lazy" /><div><strong>Nhà phố gần biển, ban công thoáng</strong><span>Ngũ Hành Sơn · 86 m²</span></div><b>4,2 tỷ</b></div>
            </div>
            <span className="match-demo__footnote">Gợi ý minh họa · không phải dữ liệu cá nhân</span>
          </div>
        </div>
      </section>

      <section className="lifestyle-section section-pad" id="phong-cach-song" aria-labelledby="lifestyle-title">
        <div className="page-shell">
          <div className="section-heading section-heading--row"><div><span className="eyebrow">ĐÀ NẴNG THEO CÁCH CỦA BẠN</span><h2 id="lifestyle-title">Bạn muốn sống<br /><em>như thế nào?</em></h2></div><p>Chọn một nhịp sống — bắt đầu hành trình tìm nơi chốn mang cảm giác của riêng mình.</p></div>
          <div className="lifestyle-grid">
            <a className="life-card life-card--large" href="/tin-dang?loai=gan-bien"><img src={beachImage} alt="Nhà và bãi biển Mỹ Khê" width={1280} height={960} loading="lazy" /><span className="life-card__number">01</span><span className="life-card__copy"><small>BIỂN Ở NGAY BÊN</small><strong>Sống gần biển</strong><span>Mở cửa là nghe sóng vỗ <ArrowUpRight /></span></span></a>
            <a className="life-card life-card--city" href="/tin-dang?quan=hai-chau"><img src={apartmentImage} alt="Căn hộ trung tâm nhìn ra sông và phố" width={1280} height={960} loading="lazy" /><span className="life-card__number">02</span><span className="life-card__copy"><small>NHỊP PHỐ THÂN QUEN</small><strong>Sống giữa trung tâm</strong><span>Chạm gần mọi điều <ArrowUpRight /></span></span></a>
            <a className="life-card life-card--family" href="/tin-dang?loai=nha-pho"><img src={familyImage} alt="Nhà có khoảng sân xanh cho gia đình" width={1280} height={960} loading="lazy" /><span className="life-card__number">03</span><span className="life-card__copy"><small>THÊM KHOẢNG THỞ</small><strong>Không gian gia đình</strong><span>Một khoảng xanh cho nhau <ArrowUpRight /></span></span></a>
          </div>
        </div>
      </section>

      <section className="reviews-section section-pad" aria-labelledby="reviews-title">
        <div className="page-shell reviews-grid">
          <div className="reviews-heading"><span className="eyebrow">NHỮNG NGƯỜI ĐÃ TÌM THẤY</span><h2 id="reviews-title">Từ những<br /><em>câu chuyện thật.</em></h2><div className="review-controls"><Button variant="outline" size="icon" aria-label="Đánh giá trước" onClick={() => setReviewIndex((index) => (index + reviews.length - 1) % reviews.length)}><ArrowLeft /></Button><span>0{reviewIndex + 1} <i>/ 03</i></span><Button variant="outline" size="icon" aria-label="Đánh giá tiếp" onClick={() => setReviewIndex((index) => (index + 1) % reviews.length)}><ArrowRight /></Button></div></div>
          <article className="review-quote"><div className="review-quote__stars" aria-label="5 trên 5 sao"><Star /><Star /><Star /><Star /><Star /></div><blockquote>“{activeReview.quote}”</blockquote><div className="review-person"><span className={`review-avatar review-avatar--${reviewIndex}`}>{activeReview.initials}</span><span><strong>{activeReview.name}</strong><small>{activeReview.role}</small></span><ShieldCheck className="review-verified" aria-label="Người dùng mẫu" /></div><span className="review-demo-note">Chia sẻ minh họa cho giao diện mẫu</span></article>
        </div>
      </section>

      <section className="journal-section section-pad" aria-labelledby="journal-title">
        <div className="page-shell">
          <div className="section-heading section-heading--row"><div><span className="eyebrow">GÓC NHÌN AN CƯ</span><h2 id="journal-title">Sống tốt hơn,<br /><em>bắt đầu từ hiểu biết.</em></h2></div><a className="text-link" href="#lien-he">Khám phá cẩm nang <ArrowRight /></a></div>
          <div className="journal-grid">{guides.map((guide, index) => <article className={`journal-card ${index === 0 ? "journal-card--featured" : ""}`} key={guide.title}><a className="journal-card__image" href="#lien-he"><img src={guide.image} alt={guide.title} width={1280} height={960} loading="lazy" /><span><ArrowUpRight /></span></a><div className="journal-card__meta"><span>{guide.category}</span><time>{guide.date}</time></div><h3><a href="#lien-he">{guide.title}</a></h3></article>)}</div>
        </div>
      </section>

      <footer className="site-footer" id="lien-he">
        <div className="page-shell">
          <div className="footer-main"><div className="footer-brand"><a className="brand brand--footer" href="#trang-chu"><span className="brand__mark"><House size={20} strokeWidth={1.6} /></span><span><strong>an cư</strong><small>ĐÀ NẴNG · NHÀ CỦA BẠN</small></span></a><p>Nơi những không gian sống gặp đúng người đang tìm kiếm chúng.</p></div><div className="footer-column"><span>KHÁM PHÁ</span><a href="#trang-chu">Trang chủ</a><Link to="/tin-dang">Tin đăng</Link><a href="#gioi-thieu">Giới thiệu</a><a href="#phong-cach-song">Phong cách sống</a></div><div className="footer-column"><span>KẾT NỐI</span><a href="mailto:xinchao@ancudanang.vn">xinchao@ancudanang.vn</a><a href="tel:+842363555888">+84 236 355 5888</a><span className="footer-note">Thông tin liên hệ minh họa</span></div><div className="footer-cta"><span className="eyebrow eyebrow--light">MỘT NƠI ĐANG CHỜ BẠN</span><h3>Chuyến về nhà<br />bắt đầu từ đây.</h3><Button asChild className="button-pill button-pill--light"><Link to="/tin-dang">Khám phá ngay <ArrowRight /></Link></Button></div></div>
          <div className="footer-bottom"><span>© 2025 AN CƯ ĐÀ NẴNG · BẢN MẪU GIAO DIỆN</span><div><a href="#lien-he">Chính sách bảo mật</a><a href="#lien-he">Điều khoản sử dụng</a></div><a className="back-top" href="#trang-chu">Lên đầu trang <ArrowUpRight /></a></div>
        </div>
      </footer>
    </main>
  );
}

function PropertyCard({ listing, index }: { listing: (typeof listings)[number]; index: number }) {
  const [saved, setSaved] = useState(false);
  return (
    <article className="property-card">
      <a className="property-card__image" href="/tin-dang" aria-label={`Xem ${listing.title}`}>
        <img src={listing.image} alt={listing.title} width={index === 3 ? 1920 : 1280} height={index === 3 ? 1200 : 960} loading="lazy" />
        <span className={`property-tag property-tag--${listing.type === "Bán" ? "sale" : "rent"}`}>{listing.type}</span>
      </a>
      <Button variant="ghost" size="icon" className={`property-save ${saved ? "property-save--active" : ""}`} aria-label={saved ? "Bỏ lưu tin" : "Lưu tin đăng"} aria-pressed={saved} onClick={() => setSaved((value) => !value)}><Heart fill={saved ? "currentColor" : "none"} /></Button>
      <div className="property-card__body"><span className="property-card__place"><MapPin /> {listing.location}</span><h3><a href="/tin-dang">{listing.title}</a></h3><div className="property-card__detail"><span><Maximize2 /> {listing.area}</span><span><BedDouble /> {listing.detail.split(" · ")[0]}</span></div><div className="property-card__footer"><strong>{listing.price}</strong><span>#{listing.id.slice(0, 5).toUpperCase()}</span></div></div>
    </article>
  );
}
