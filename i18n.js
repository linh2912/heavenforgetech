// ===== HeavenForge Tech — i18n (VI/EN) =====

const TRANSLATIONS = {
  // ===== SHARED (nav, footer) =====
  'nav.home': { vi: 'Trang chủ', en: 'Home' },
  'nav.products': { vi: 'Sản phẩm', en: 'Products' },
  'nav.guide': { vi: 'Hướng dẫn', en: 'Guide' },
  'nav.contact': { vi: 'Liên hệ', en: 'Contact' },
  'footer.links': { vi: 'Liên kết', en: 'Links' },
  'footer.about': { vi: 'Giới thiệu', en: 'About' },
  'footer.services-title': { vi: 'Dịch vụ', en: 'Services' },
  'footer.dev': { vi: 'Phát triển phần mềm', en: 'Software Development' },
  'footer.erp': { vi: 'Giải pháp ERP', en: 'ERP Solutions' },
  'footer.digital': { vi: 'Chuyển đổi số', en: 'Digital Transformation' },

  // ===== INDEX PAGE =====
  'hero.desc': { vi: 'HeavenForge Tech là đội ngũ chuyên sâu về thiết kế và phát triển phần mềm doanh nghiệp. Sản phẩm chủ lực của chúng tôi là ForgeCore — nền tảng ERP hiện đại, cùng các dịch vụ gia công và tư vấn chuyển đổi số toàn diện.', en: 'HeavenForge Tech is a specialized team in designing and developing enterprise software. Our flagship product is ForgeCore — a modern ERP platform, along with custom development and comprehensive digital transformation consulting services.' },
  'hero.btn.services': { vi: 'Khám phá dịch vụ', en: 'Explore Services' },
  'hero.btn.contact': { vi: 'Liên hệ ngay', en: 'Contact Us' },

  'about.label': { vi: 'VỀ CHÚNG TÔI', en: 'ABOUT US' },
  'about.title': { vi: 'Rèn Giũa Công Nghệ,<br>Kiến Tạo Tương Lai', en: 'Forging Technology,<br>Building the Future' },
  'about.mission': { vi: 'Sứ Mệnh', en: 'Mission' },
  'about.mission.desc': {
    vi: 'Mang đến các giải pháp phần mềm chất lượng cao, giúp doanh nghiệp tối ưu vận hành và tăng trưởng bền vững thông qua công nghệ hiện đại.',
    en: 'Delivering high-quality software solutions to help businesses optimize operations and achieve sustainable growth through modern technology.'
  },
  'about.vision': { vi: 'Tầm Nhìn', en: 'Vision' },
  'about.vision.desc': {
    vi: 'Trở thành đối tác công nghệ tin cậy hàng đầu, tiên phong áp dụng những xu hướng mới nhất để tạo ra giá trị đột phá cho khách hàng.',
    en: 'Becoming a leading trusted technology partner, pioneering the latest trends to create breakthrough value for customers.'
  },
  'about.values': { vi: 'Giá Trị Cốt Lõi', en: 'Core Values' },
  'about.values.desc': {
    vi: 'Chất lượng — Sáng tạo — Cam kết. Mọi sản phẩm đều được xây dựng với tiêu chuẩn cao nhất, đặt lợi ích khách hàng làm trung tâm.',
    en: 'Quality — Innovation — Commitment. Every product is built to the highest standards, putting customer value at the center.'
  },

  'services.label': { vi: 'DỊCH VỤ', en: 'SERVICES' },
  'services.title': { vi: 'Nghiệp Vụ Của Chúng Tôi', en: 'Our Services' },
  'services.sub': {
    vi: 'Chúng tôi cung cấp các giải pháp công nghệ đa dạng, phù hợp với mọi quy mô doanh nghiệp.',
    en: 'We provide diverse technology solutions suitable for businesses of all sizes.'
  },
  'services.dev.title': { vi: 'Phát Triển Phần Mềm', en: 'Software Development' },
  'services.dev.desc': {
    vi: 'Thiết kế và phát triển ứng dụng Web, Mobile, Desktop theo yêu cầu. Sử dụng công nghệ hiện đại, kiến trúc linh hoạt và khả năng mở rộng cao.',
    en: 'Design and develop Web, Mobile, Desktop applications on demand. Using modern technology, flexible architecture and high scalability.'
  },
  'services.erp.title': { vi: 'Giải Pháp ERP — ForgeCore', en: 'ERP Solution — ForgeCore' },
  'services.erp.desc': {
    vi: 'Hệ thống <strong>ForgeCore</strong> quản lý toàn bộ hoạt động doanh nghiệp: kho hàng, bán hàng, đơn hàng, hóa đơn — tích hợp trên một nền tảng duy nhất, đa thiết bị.',
    en: 'The <strong>ForgeCore</strong> system manages all business operations: warehouse, sales, orders, invoices — integrated on a single, multi-device platform.'
  },
  'services.erp.1': { vi: 'Quản lý Kho & Xuất nhập kho', en: 'Warehouse & Import/Export Management' },
  'services.erp.2': { vi: 'Đơn hàng, Hóa đơn & Khách hàng', en: 'Orders, Invoices & Customers' },
  'services.erp.3': { vi: 'Phân quyền & Bảo mật dữ liệu', en: 'Authorization & Data Security' },
  'services.erp.4': { vi: 'Báo cáo & Thống kê trực quan', en: 'Reports & Visual Analytics' },
  'services.digi.title': { vi: 'Tư Vấn Chuyển Đổi Số', en: 'Digital Transformation Consulting' },
  'services.digi.desc': {
    vi: 'Đánh giá hiện trạng, xây dựng lộ trình và triển khai chuyển đổi số toàn diện giúp doanh nghiệp nâng cao năng lực cạnh tranh.',
    en: 'Assess current state, build roadmaps and implement comprehensive digital transformation to enhance business competitiveness.'
  },
  'services.digi.1': { vi: 'Đánh giá & Tư vấn chiến lược', en: 'Assessment & Strategic Consulting' },
  'services.digi.2': { vi: 'Số hóa quy trình nghiệp vụ', en: 'Business Process Digitization' },
  'services.digi.3': { vi: 'Tích hợp hệ thống', en: 'System Integration' },
  'services.digi.4': { vi: 'Đào tạo & Chuyển giao', en: 'Training & Handover' },

  'process.label': { vi: 'QUY TRÌNH', en: 'PROCESS' },
  'process.title': { vi: 'Quy Trình Làm Việc', en: 'Our Workflow' },
  'process.sub': {
    vi: 'Chúng tôi áp dụng quy trình Agile linh hoạt, đảm bảo tiến độ và chất lượng.',
    en: 'We apply flexible Agile processes, ensuring progress and quality.'
  },
  'process.1.title': { vi: 'Khảo Sát & Phân Tích', en: 'Survey & Analysis' },
  'process.1.desc': {
    vi: 'Tìm hiểu yêu cầu, phân tích nghiệp vụ và xác định phạm vi dự án cùng khách hàng.',
    en: 'Understand requirements, analyze business processes and define project scope with clients.'
  },
  'process.2.title': { vi: 'Thiết Kế & Lập Kế Hoạch', en: 'Design & Planning' },
  'process.2.desc': {
    vi: 'Thiết kế kiến trúc hệ thống, giao diện người dùng và lập kế hoạch triển khai chi tiết.',
    en: 'Design system architecture, user interface and create detailed deployment plans.'
  },
  'process.3.title': { vi: 'Phát Triển & Kiểm Thử', en: 'Development & Testing' },
  'process.3.desc': {
    vi: 'Phát triển theo sprint, kiểm thử liên tục và demo định kỳ để nhận phản hồi sớm.',
    en: 'Sprint-based development, continuous testing and regular demos for early feedback.'
  },
  'process.4.title': { vi: 'Triển Khai & Bảo Trì', en: 'Deployment & Maintenance' },
  'process.4.desc': {
    vi: 'Go-live, đào tạo sử dụng, chuyển giao và hỗ trợ bảo trì dài hạn sau triển khai.',
    en: 'Go-live, user training, handover and long-term maintenance support post-deployment.'
  },

  'product.label': { vi: 'SẢN PHẨM', en: 'PRODUCT' },
  'product.title': { vi: 'Sản Phẩm Nổi Bật', en: 'Featured Product' },
  'product.sub': {
    vi: 'Phần mềm quản lý doanh nghiệp được thiết kế dành riêng cho thị trường Việt Nam.',
    en: 'Enterprise management software designed specifically for the Vietnamese market.'
  },
  'product.name': { vi: 'ForgeCore — Quản Lý Kho & Bán Hàng', en: 'ForgeCore — Warehouse & Sales Management' },
  'product.desc': {
    vi: 'Hệ thống quản lý toàn diện giúp doanh nghiệp kiểm soát kho hàng, theo dõi xuất nhập, quản lý đơn hàng và báo cáo doanh thu — tất cả trên một nền tảng duy nhất.',
    en: 'A comprehensive management system helping businesses control inventory, track imports/exports, manage orders and revenue reports — all on a single platform.'
  },
  'product.badge.1': { vi: 'Đa nền tảng', en: 'Multi-platform' },
  'product.badge.2': { vi: 'Bảo mật cao', en: 'High Security' },
  'product.badge.3': { vi: 'Tùy chỉnh linh hoạt', en: 'Highly Customizable' },
  'product.btn': { vi: 'Xem chi tiết sản phẩm', en: 'View Product Details' },

  'tech.label': { vi: 'CÔNG NGHỆ', en: 'TECHNOLOGY' },
  'tech.title': { vi: 'Nền Tảng Công Nghệ Vững Chắc', en: 'Solid Technology Foundation' },
  'tech.sub': {
    vi: 'Sản phẩm được xây dựng trên nền tảng hiện đại, đảm bảo hiệu suất và độ tin cậy cao.',
    en: 'Products built on modern platforms ensuring high performance and reliability.'
  },
  'tech.1': { vi: '🌐 Ứng dụng Web hiện đại', en: '🌐 Modern Web Applications' },
  'tech.2': { vi: '📱 Hỗ trợ đa nền tảng', en: '📱 Multi-platform Support' },
  'tech.3': { vi: '🔒 Bảo mật dữ liệu doanh nghiệp', en: '🔒 Enterprise Data Security' },
  'tech.4': { vi: '⚡ Hiệu suất cao & ổn định', en: '⚡ High Performance & Stability' },
  'tech.5': { vi: '🗄️ Cơ sở dữ liệu mạnh mẽ', en: '🗄️ Powerful Database' },
  'tech.6': { vi: '🎨 Giao diện trực quan & thân thiện', en: '🎨 Intuitive & Friendly Interface' },
  'tech.7': { vi: '📊 Báo cáo & phân tích thông minh', en: '📊 Smart Reports & Analytics' },
  'tech.8': { vi: '🔧 Kiến trúc linh hoạt, dễ mở rộng', en: '🔧 Flexible & Scalable Architecture' },

  'contact.label': { vi: 'LIÊN HỆ', en: 'CONTACT' },
  'contact.title': { vi: 'Hãy Kết Nối Với Chúng Tôi', en: 'Let\'s Connect' },
  'contact.sub': {
    vi: 'Bạn có dự án cần tư vấn? Hãy liên hệ — chúng tôi luôn sẵn sàng hỗ trợ.',
    en: 'Have a project to discuss? Contact us — we\'re always ready to help.'
  },
  'contact.cta.title': { vi: 'Liên hệ với chúng tôi', en: 'Get in Touch' },
  'contact.cta.desc': {
    vi: 'Hãy mô tả dự án hoặc yêu cầu của bạn — chúng tôi sẽ phản hồi trong thời gian sớm nhất.',
    en: 'Describe your project or requirements — we\'ll respond as soon as possible.'
  },
  'contact.hours.title': { vi: 'Giờ làm việc', en: 'Working Hours' },
  'contact.hours.desc': { vi: 'Thứ 2 – Thứ 6: 8:00 – 17:30', en: 'Mon – Fri: 8:00 AM – 5:30 PM' },

  // ===== PRODUCTS PAGE =====
  'products.hero.label': { vi: 'FORGECORE', en: 'FORGECORE' },
  'products.hero.title': { vi: 'Phần Mềm Quản Lý<br><span class="accent">Doanh Nghiệp</span>', en: 'Enterprise<br><span class="accent">Management</span> Software' },
  'products.hero.desc': {
    vi: 'Một nền tảng duy nhất — quản lý toàn bộ hoạt động kinh doanh, từ kho hàng, bán hàng, nhân sự đến tài chính và sản xuất.',
    en: 'A single platform — managing all business operations, from warehouse, sales, HR to finance and production.'
  },
  'products.hero.btn.access': { vi: 'Truy cập ForgeCore', en: 'Access ForgeCore' },
  'products.hero.btn.features': { vi: 'Xem tính năng', en: 'View Features' },
  'products.hero.btn.consult': { vi: 'Nhận tư vấn miễn phí', en: 'Get Free Consultation' },

  'products.overview.label': { vi: 'TỔNG QUAN', en: 'OVERVIEW' },
  'products.overview.title': { vi: 'Hệ Thống Quản Lý Toàn Diện', en: 'Comprehensive Management System' },
  'products.overview.sub': {
    vi: 'Được thiết kế dành riêng cho doanh nghiệp Việt Nam — linh hoạt, dễ tùy chỉnh, vận hành ổn định và bảo mật cao.',
    en: 'Designed specifically for Vietnamese businesses — flexible, customizable, stable operation and high security.'
  },
  'products.ov.1.title': { vi: 'Tích hợp đa module', en: 'Multi-module Integration' },
  'products.ov.1.desc': {
    vi: 'Tất cả các phân hệ được kết nối chặt chẽ trên một nền tảng, giảm thiểu nhập liệu trùng lặp và đồng bộ dữ liệu real-time.',
    en: 'All modules tightly connected on one platform, minimizing duplicate data entry with real-time synchronization.'
  },
  'products.ov.2.title': { vi: 'Tùy chỉnh theo nghiệp vụ', en: 'Business Customization' },
  'products.ov.2.desc': {
    vi: 'Hệ thống được thiết kế modular, cho phép bật/tắt tính năng và tùy chỉnh quy trình theo đặc thù riêng của từng doanh nghiệp.',
    en: 'Modular system design allowing feature toggle and workflow customization for each business\'s unique needs.'
  },
  'products.ov.3.title': { vi: 'Đa nền tảng', en: 'Multi-platform' },
  'products.ov.3.desc': {
    vi: 'Truy cập hệ thống mọi lúc, mọi nơi qua Web, Mobile và Desktop — đảm bảo hoạt động liền mạch trên mọi thiết bị.',
    en: 'Access the system anytime, anywhere via Web, Mobile and Desktop — ensuring seamless operation across all devices.'
  },

  'products.features.label': { vi: 'TÍNH NĂNG', en: 'FEATURES' },
  'products.features.title': { vi: 'Tính Năng Đã Triển Khai', en: 'Deployed Features' },
  
  'products.feat.1.title': { vi: 'Quản lý Kho & Xuất nhập', en: 'Warehouse & Import/Export Management' },
  'products.feat.1.desc': { vi: 'Theo dõi tồn kho real-time, quản lý xuất nhập kho, kiểm kê, cảnh báo hết hàng và quản lý đa kho.', en: 'Track inventory in real-time, manage import/export, inventory counts, out-of-stock alerts and multi-warehouse management.' },
  'products.feat.1.l1': { vi: 'Quản lý đa kho, đa vị trí', en: 'Multi-warehouse, multi-location' },
  'products.feat.1.l2': { vi: 'Xuất/Nhập kho tự động', en: 'Automated import/export' },
  'products.feat.1.l3': { vi: 'Kiểm kê & Cảnh báo tồn kho', en: 'Inventory count & alerts' },
  'products.feat.1.l4': { vi: 'Báo cáo xuất nhập tồn', en: 'Import/Export/Inventory reports' },

  'products.feat.2.title': { vi: 'Báo cáo & Thống kê', en: 'Reports & Analytics' },
  'products.feat.2.desc': { vi: 'Dashboard trực quan, báo cáo tự động, phân tích dữ liệu giúp ban lãnh đạo ra quyết định nhanh chóng.', en: 'Visual dashboard, automated reports, data analysis helping leaders make quick decisions.' },
  'products.feat.2.l1': { vi: 'Dashboard real-time', en: 'Real-time dashboard' },
  'products.feat.2.l2': { vi: 'Báo cáo tùy chỉnh', en: 'Customizable reports' },
  'products.feat.2.l3': { vi: 'Xuất Excel / PDF', en: 'Export to Excel / PDF' },
  'products.feat.2.l4': { vi: 'Phân tích xu hướng kinh doanh', en: 'Business trend analysis' },

  'products.feat.3.title': { vi: 'Quản lý Sản phẩm & Vật tư', en: 'Product & Material Management' },
  'products.feat.3.desc': { vi: 'Quản lý danh mục sản phẩm, vật tư, nguyên liệu toàn diện với mã SKU tự động, phân loại danh mục và hỗ trợ nhập hàng loạt từ Excel.', en: 'Comprehensive product and material catalog management with auto SKU generation, categorization and Excel import.' },
  'products.feat.3.l1': { vi: 'Tự động sinh mã SKU', en: 'Auto SKU generation' },
  'products.feat.3.l2': { vi: 'Phân loại theo danh mục', en: 'Category classification' },
  'products.feat.3.l3': { vi: 'Nhập hàng loạt từ Excel', en: 'Bulk import from Excel' },
  'products.feat.3.l4': { vi: 'Cảnh báo sắp hết & đã hết hàng', en: 'Low stock & out of stock alerts' },

  'products.feat.4.title': { vi: 'Phiếu Nhập & Xuất Kho', en: 'Import & Export Receipts' },
  'products.feat.4.desc': { vi: 'Tạo và quản lý phiếu nhập/xuất kho chuyên nghiệp với quy trình duyệt phiếu, tự động cập nhật tồn kho và thống kê giá trị theo thời gian.', en: 'Create and manage receipts professionally with approval workflow, auto inventory updates and value tracking.' },
  'products.feat.4.l1': { vi: 'Tạo mã phiếu tự động (PN-, PX-)', en: 'Auto receipt ID (PN-, PX-)' },
  'products.feat.4.l2': { vi: 'Quy trình duyệt: Chờ → Hoàn thành / Hủy', en: 'Approval: Pending → Complete / Cancel' },
  'products.feat.4.l3': { vi: 'Thống kê giá trị nhập/xuất theo tháng', en: 'Monthly import/export value stats' },
  'products.feat.4.l4': { vi: 'Lọc phiếu theo khoảng thời gian', en: 'Filter receipts by date range' },

  'products.feat.5.title': { vi: 'Quản lý Người dùng & Phân quyền', en: 'User & Role Management' },
  'products.feat.5.desc': { vi: 'Hệ thống phân quyền theo vai trò (RBAC) chi tiết, hỗ trợ multi-tenant, kiểm soát truy cập từng tính năng và đảm bảo an toàn dữ liệu doanh nghiệp.', en: 'Detailed Role-Based Access Control (RBAC), multi-tenant support, feature-level access control ensuring data security.' },
  'products.feat.5.l1': { vi: 'Phân quyền RBAC theo vai trò', en: 'Role-Based Access Control' },
  'products.feat.5.l2': { vi: 'Quản lý trạng thái tài khoản', en: 'Account status management' },
  'products.feat.5.l3': { vi: 'Audit log theo dõi hành vi', en: 'Audit logs for tracking actions' },
  'products.feat.5.l4': { vi: 'Hỗ trợ multi-tenant', en: 'Multi-tenant support' },

  'products.feat.6.title': { vi: 'Giao dịch Kho & Lịch sử', en: 'Inventory Transactions & History' },
  'products.feat.6.desc': { vi: 'Ghi nhận toàn bộ lịch sử nhập/xuất/điều chỉnh kho với 7 loại giao dịch. Tra cứu theo sản phẩm, khoảng thời gian và truy vết nguồn gốc phiếu.', en: 'Record all inventory history with 7 transaction types. Search by product, time and trace receipt origins.' },
  'products.feat.6.l1': { vi: '7 loại: Nhập, Xuất, Điều chỉnh, Chuyển, Trả, Hư, Mất', en: '7 types: Import, Export, Adjust, Transfer, Return, Damage, Loss' },
  'products.feat.6.l2': { vi: 'Ghi nhận số lượng trước/sau mỗi giao dịch', en: 'Record qty before/after transaction' },
  'products.feat.6.l3': { vi: 'Tra cứu theo sản phẩm & thời gian', en: 'Search by product & time' },
  'products.feat.6.l4': { vi: 'Truy vết người thực hiện', en: 'Trace transaction author' },

  'products.showcase.1.title': { vi: 'Dashboard Quản Lý Kho', en: 'Warehouse Dashboard' },
  'products.showcase.1.desc': { vi: 'Tổng quan toàn bộ hoạt động kho hàng trên một màn hình duy nhất. Theo dõi tổng vật tư, nhập kho, xuất kho và tổng giá trị tồn kho theo thời gian thực.', en: 'Overview of all warehouse activities on a single screen. Track total materials, imports, exports and value in real-time.' },
  'products.showcase.1.l1': { vi: 'Biểu đồ nhập/xuất kho theo thời gian', en: 'Import/export charts over time' },
  'products.showcase.1.l2': { vi: 'Thống kê tổng giá trị tồn kho', en: 'Total inventory value stats' },
  'products.showcase.1.l3': { vi: 'Lịch sử hoạt động gần đây', en: 'Recent activity history' },
  'products.showcase.1.l4': { vi: 'Tổng quan hoạt động kho ổn định', en: 'Stable warehouse overview' },

  'products.showcase.2.title': { vi: 'Danh Sách Vật Tư', en: 'Material List' },
  'products.showcase.2.desc': { vi: 'Quản lý toàn bộ danh mục vật tư với đầy đủ thông tin: mã SKU, danh mục, tồn kho, mức tối thiểu, đơn giá và trạng thái. Hỗ trợ tìm kiếm, lọc nâng cao và nhập/xuất Excel.', en: 'Manage entire material catalog with full info: SKU, category, stock, min stock, price and status. Advanced search, filtering and Excel import/export.' },
  'products.showcase.2.l1': { vi: 'Bộ lọc theo danh mục & trạng thái tồn kho', en: 'Filter by category & stock status' },
  'products.showcase.2.l2': { vi: 'Nhập hàng loạt từ file Excel', en: 'Bulk import from Excel' },
  'products.showcase.2.l3': { vi: 'Xuất dữ liệu ra Excel', en: 'Export data to Excel' },
  'products.showcase.2.l4': { vi: 'Cảnh báo sắp hết hàng & đã hết', en: 'Low & out of stock alerts' },

  'products.showcase.3.title': { vi: 'Thêm Vật Tư Mới', en: 'Add New Material' },
  'products.showcase.3.desc': { vi: 'Giao diện nhập liệu thông minh, cho phép thêm mới vật tư nhanh chóng với tính năng tự động sinh mã SKU theo chuẩn, tải lên hình ảnh và quản lý đơn vị tính linh hoạt.', en: 'Smart data entry interface for quick material addition with auto SKU generation, image upload and flexible unit management.' },
  'products.showcase.3.l1': { vi: 'Tự động tạo mã SKU', en: 'Auto generate SKU code' },
  'products.showcase.3.l2': { vi: 'Quản lý đơn vị tính đa dạng', en: 'Diverse unit of measurement' },
  'products.showcase.3.l3': { vi: 'Thiết lập mức tồn kho tối thiểu', en: 'Set minimum stock level' },
  'products.showcase.3.l4': { vi: 'Upload hình ảnh vật tư trực quan', en: 'Upload visual material image' },

    'products.showcase.4.desc': { vi: 'Phân loại và tổ chức hệ thống vật tư một cách khoa học. Dễ dàng theo dõi số lượng vật tư trong từng danh mục và tối ưu hóa việc tìm kiếm, thống kê kho hàng.', en: 'Classify and organize material system scientifically. Easily track material quantity per category and optimize search and stats.' },
  'products.showcase.4.l1': { vi: 'Tạo mới và chỉnh sửa danh mục', en: 'Create and edit categories' },
  'products.showcase.4.l2': { vi: 'Phân cấp danh mục cha/con', en: 'Parent/child category hierarchy' },
  'products.showcase.4.l3': { vi: 'Theo dõi tổng số lượng vật tư', en: 'Track total materials' },
  'products.showcase.4.l4': { vi: 'Tìm kiếm danh mục theo tên', en: 'Search categories by name' },

  'products.up.1.title': { vi: 'Quản lý Khách hàng (CRM)', en: 'Customer Management (CRM)' },
  'products.up.1.desc': { vi: 'Lưu trữ thông tin khách hàng, lịch sử mua hàng, công nợ. Hỗ trợ tìm kiếm khách hàng nhanh bằng tên, số điện thoại hoặc email. Thống kê khách hàng mới theo thời gian.', en: 'Store customer info, purchase history, debt. Quick search by name, phone or email. New customer stats over time.' },
  'products.up.1.l1': { vi: 'Quản lý thông tin khách hàng đầy đủ', en: 'Comprehensive customer info' },
  'products.up.1.l2': { vi: 'Tìm kiếm nhanh theo tên, SĐT, email', en: 'Quick search by name, phone, email' },
  'products.up.1.l3': { vi: 'Thống kê khách hàng mới', en: 'New customer statistics' },
  'products.up.1.l4': { vi: 'Liên kết với đơn hàng & hóa đơn', en: 'Link with orders & invoices' },

  'products.up.2.title': { vi: 'Quản lý Nhà cung cấp', en: 'Supplier Management' },
  'products.up.2.desc': { vi: 'Lưu trữ thông tin nhà cung cấp phục vụ quy trình nhập kho. Quản lý danh sách NCC với tên, địa chỉ, liên hệ và tự động liên kết khi tạo phiếu nhập.', en: 'Store supplier info for import processes. Manage supplier list with name, address, contact and auto link to receipts.' },
  'products.up.2.l1': { vi: 'Quản lý danh sách nhà cung cấp', en: 'Manage supplier list' },
  'products.up.2.l2': { vi: 'Thông tin liên hệ & địa chỉ', en: 'Contact info & address' },
  'products.up.2.l3': { vi: 'Liên kết tự động với phiếu nhập kho', en: 'Auto link to import receipts' },
  'products.up.2.l4': { vi: 'Tra cứu nhanh nhà cung cấp', en: 'Quick supplier search' },

  'products.hl.1.title': { vi: 'Đa nền tảng', en: 'Multi-platform' },
  'products.hl.1.desc': { vi: 'Web, Mobile, Desktop — truy cập mọi lúc, mọi nơi trên mọi thiết bị.', en: 'Web, Mobile, Desktop — access anytime, anywhere on any device.' },
  'products.hl.2.title': { vi: 'Bảo mật cao', en: 'High Security' },
  'products.hl.2.desc': { vi: 'Phân quyền chi tiết, mã hóa dữ liệu, audit log và tuân thủ các chuẩn bảo mật quốc tế.', en: 'Detailed RBAC, data encryption, audit logs and international security compliance.' },
  'products.hl.3.title': { vi: 'Tùy chỉnh linh hoạt', en: 'Highly Customizable' },
  'products.hl.3.desc': { vi: 'Kiến trúc modular cho phép mở rộng và tùy biến theo đặc thù nghiệp vụ riêng.', en: 'Modular architecture allows scaling and customization for specific business needs.' },
  'products.hl.4.title': { vi: 'Hỗ trợ dài hạn', en: 'Long-term Support' },
  'products.hl.4.desc': { vi: 'Đội ngũ hỗ trợ kỹ thuật chuyên nghiệp, cập nhật liên tục và đào tạo sử dụng toàn diện.', en: 'Professional tech support, continuous updates and comprehensive training.' },

  'products.features.sub': {
    vi: 'Bộ công cụ đầy đủ giúp quản lý mọi khía cạnh hoạt động kinh doanh.',
    en: 'Complete toolkit for managing every aspect of business operations.'
  },

  'products.showcase.label': { vi: 'GIAO DIỆN THỰC TẾ', en: 'ACTUAL INTERFACE' },
  'products.showcase.title': { vi: 'Khám Phá ForgeCore', en: 'Explore ForgeCore' },
  'products.showcase.sub': {
    vi: 'Trải nghiệm giao diện trực quan, hiện đại — được thiết kế tối ưu cho hiệu suất làm việc.',
    en: 'Experience an intuitive, modern interface — optimized for work productivity.'
  },

  'products.upcoming.label': { vi: 'SẮP RA MẮT', en: 'COMING SOON' },
  'products.upcoming.title': { vi: 'Tính Năng Đang Phát Triển', en: 'Features In Development' },
  'products.upcoming.sub': {
    vi: 'Các module mới đang được xây dựng — mở rộng khả năng quản lý toàn diện cho doanh nghiệp của bạn.',
    en: 'New modules under development — expanding comprehensive management capabilities for your business.'
  },

  'products.highlights.label': { vi: 'ĐIỂM NỔI BẬT', en: 'HIGHLIGHTS' },
  'products.highlights.title': { vi: 'Tại Sao Chọn Chúng Tôi?', en: 'Why Choose Us?' },
  'products.highlights.sub': {
    vi: 'Không chỉ là phần mềm — đó là giải pháp được thiết kế cho sự tăng trưởng của doanh nghiệp bạn.',
    en: 'Not just software — it\'s a solution designed for your business growth.'
  },

  'products.cta.title': { vi: 'Sẵn sàng nâng tầm quản lý doanh nghiệp?', en: 'Ready to elevate your business management?' },
  'products.cta.desc': {
    vi: 'Liên hệ ngay để nhận tư vấn miễn phí và demo sản phẩm phù hợp với doanh nghiệp của bạn.',
    en: 'Contact us now for a free consultation and product demo tailored to your business.'
  },
  'products.cta.btn.consult': { vi: 'Liên hệ tư vấn', en: 'Contact for Consultation' },
  'products.cta.btn.home': { vi: 'Về trang chủ', en: 'Back to Home' },

  // ===== GUIDE PAGE =====
  'guide.hero.label': { vi: 'HƯỚNG DẪN', en: 'GUIDE' },
  'guide.hero.title': { vi: 'Bắt Đầu Với<br><span class="accent">ForgeCore</span>', en: 'Get Started With<br><span class="accent">ForgeCore</span>' },
  'guide.hero.desc': {
    vi: 'Tìm hiểu cách đăng ký sử dụng, khám phá lợi ích khi chuyển đổi từ quản lý thủ công sang phần mềm hiện đại.',
    en: 'Learn how to register, discover the benefits of switching from manual management to modern software.'
  },
  'guide.hero.btn.register': { vi: 'Cách đăng ký', en: 'How to Register' },
  'guide.hero.btn.benefits': { vi: 'Lợi ích phần mềm', en: 'Software Benefits' },
  'guide.hero.btn.compare': { vi: 'So sánh chi tiết', en: 'Detailed Comparison' },

  'guide.register.label': { vi: 'ĐĂNG KÝ', en: 'REGISTER' },
  'guide.register.title': { vi: 'Cách Đăng Ký Sử Dụng', en: 'How to Register' },
  'guide.register.sub': {
    vi: 'Liên hệ trực tiếp với chúng tôi qua một trong các kênh bên dưới để được hướng dẫn tạo tài khoản và bắt đầu sử dụng ForgeCore.',
    en: 'Contact us directly through one of the channels below to get account setup assistance and start using ForgeCore.'
  },
  'guide.step1.title': { vi: 'Liên hệ với chúng tôi', en: 'Contact Us' },
  'guide.step1.desc': {
    vi: 'Chọn một trong các kênh liên hệ bên dưới: Email, Zalo hoặc Facebook. Mô tả nhu cầu sử dụng của bạn.',
    en: 'Choose one of the contact channels below: Email, Zalo or Facebook. Describe your usage needs.'
  },
  'guide.step2.title': { vi: 'Tư vấn & Cấu hình', en: 'Consult & Configure' },
  'guide.step2.desc': {
    vi: 'Chúng tôi sẽ tư vấn gói dịch vụ phù hợp, thiết lập hệ thống và tạo tài khoản cho doanh nghiệp của bạn.',
    en: 'We will recommend a suitable service package, set up the system and create an account for your business.'
  },
  'guide.step3.title': { vi: 'Bắt đầu sử dụng', en: 'Start Using' },
  'guide.step3.desc': {
    vi: 'Đăng nhập vào hệ thống, được đào tạo sử dụng và bắt đầu quản lý doanh nghiệp ngay lập tức.',
    en: 'Log in to the system, receive training and start managing your business immediately.'
  },
  'guide.channel.email': { vi: 'Email', en: 'Email' },
  'guide.channel.email.desc': {
    vi: 'Gửi yêu cầu đăng ký qua email — chúng tôi sẽ phản hồi trong 24 giờ.',
    en: 'Send a registration request via email — we\'ll respond within 24 hours.'
  },
  'guide.channel.zalo': { vi: 'Zalo', en: 'Zalo' },
  'guide.channel.zalo.desc': {
    vi: 'Nhắn tin trực tiếp qua Zalo — tư vấn nhanh chóng, hỗ trợ tức thì.',
    en: 'Direct message via Zalo — quick consultation, instant support.'
  },
  'guide.channel.fb': { vi: 'Facebook', en: 'Facebook' },
  'guide.channel.fb.desc': {
    vi: 'Liên hệ qua Facebook Messenger — kết nối dễ dàng mọi lúc.',
    en: 'Contact via Facebook Messenger — easy connection anytime.'
  },

  'guide.benefits.label': { vi: 'LỢI ÍCH', en: 'BENEFITS' },
  'guide.benefits.title': { vi: 'Tại Sao Nên Dùng Phần Mềm<br>Quản Lý Doanh Nghiệp?', en: 'Why Use Enterprise<br>Management Software?' },
  'guide.benefits.sub': {
    vi: 'Phần mềm không chỉ thay thế giấy tờ — mà còn giúp doanh nghiệp vận hành thông minh hơn, nhanh hơn và chính xác hơn.',
    en: 'Software doesn\'t just replace paperwork — it helps businesses operate smarter, faster and more accurately.'
  },
  'guide.b1.title': { vi: 'Tiết kiệm thời gian', en: 'Save Time' },
  'guide.b1.desc': {
    vi: 'Tự động hóa quy trình nhập liệu, tạo phiếu, tính toán tồn kho — giảm đến <strong>80%</strong> thời gian xử lý so với thao tác thủ công.',
    en: 'Automate data entry, receipt creation, inventory calculation — reduce up to <strong>80%</strong> processing time compared to manual work.'
  },
  'guide.b2.title': { vi: 'Giảm sai sót', en: 'Reduce Errors' },
  'guide.b2.desc': {
    vi: 'Dữ liệu được tính toán tự động, đồng bộ real-time — loại bỏ hoàn toàn lỗi nhập sai, nhập trùng hay quên ghi chép.',
    en: 'Data automatically calculated, real-time sync — completely eliminate input errors, duplicates or missed records.'
  },
  'guide.b3.title': { vi: 'Ra quyết định nhanh', en: 'Faster Decisions' },
  'guide.b3.desc': {
    vi: 'Báo cáo, biểu đồ trực quan ngay trên dashboard — giúp lãnh đạo nắm bắt tình hình kinh doanh chỉ trong vài giây.',
    en: 'Visual reports and charts right on the dashboard — helping leaders grasp business status in seconds.'
  },
  'guide.b4.title': { vi: 'An toàn & Bảo mật', en: 'Safe & Secure' },
  'guide.b4.desc': {
    vi: 'Dữ liệu được lưu trữ an toàn trên hệ thống, phân quyền truy cập chi tiết — không lo mất mát hay rò rỉ thông tin.',
    en: 'Data stored securely on the system, detailed access control — no worries about data loss or leaks.'
  },
  'guide.b5.title': { vi: 'Truy cập mọi lúc', en: 'Access Anywhere' },
  'guide.b5.desc': {
    vi: 'Sử dụng trên máy tính, điện thoại hoặc máy tính bảng — quản lý kho hàng và theo dõi kinh doanh ở bất kỳ đâu.',
    en: 'Use on computer, phone or tablet — manage inventory and track business from anywhere.'
  },
  'guide.b6.title': { vi: 'Phối hợp nhóm hiệu quả', en: 'Effective Teamwork' },
  'guide.b6.desc': {
    vi: 'Nhiều người cùng làm việc trên một hệ thống — dữ liệu cập nhật đồng bộ, không bị chồng chéo hay mất thông tin.',
    en: 'Multiple people working on one system — data synced in real-time, no overlaps or lost information.'
  },

  'guide.compare.label': { vi: 'SO SÁNH', en: 'COMPARISON' },
  'guide.compare.title': { vi: 'Phần Mềm vs. Quản Lý Truyền Thống', en: 'Software vs. Traditional Management' },
  'guide.compare.sub': {
    vi: 'Xem rõ sự khác biệt giữa việc sử dụng phần mềm ForgeCore và phương pháp quản lý thủ công truyền thống.',
    en: 'See the clear differences between using ForgeCore software and traditional manual management methods.'
  },
  'guide.compare.th.criteria': { vi: 'Tiêu chí', en: 'Criteria' },
  'guide.compare.th.old': { vi: 'Thủ công / Excel', en: 'Manual / Excel' },
  'guide.compare.th.new': { vi: 'ForgeCore', en: 'ForgeCore' },

  'guide.cta.title': { vi: 'Sẵn sàng chuyển đổi cách quản lý?', en: 'Ready to transform your management?' },
  'guide.cta.desc': {
    vi: 'Liên hệ ngay để được tư vấn miễn phí và trải nghiệm ForgeCore — giải pháp quản lý doanh nghiệp hiện đại.',
    en: 'Contact us now for a free consultation and experience ForgeCore — modern enterprise management solution.'
  },
  'guide.cta.btn.register': { vi: 'Đăng ký ngay', en: 'Register Now' },
  'guide.cta.btn.products': { vi: 'Xem sản phẩm', en: 'View Products' },
  'guide.cta.btn.home': { vi: 'Về trang chủ', en: 'Back to Home' },
  'products.showcase.3.desc': { vi: 'Form thêm vật tư trực quan với đầy đủ trường thông tin: tên, mã SKU, danh mục, nhà cung cấp, đơn giá, tồn kho tối thiểu/tối đa, đơn vị và vị trí kho.', en: 'Visual material form with full info fields: name, SKU, category, supplier, price, min/max stock, unit and storage location.' },
  'products.showcase.3.l1': { vi: 'Tự động sinh mã SKU', en: 'Auto generate SKU code' },
  'products.showcase.3.l2': { vi: 'Thiết lập cảnh báo tồn kho min/max', en: 'Set min/max stock alerts' },
  'products.showcase.3.l3': { vi: 'Phân loại theo danh mục & nhà cung cấp', en: 'Categorize by category & supplier' },
  'products.showcase.3.l4': { vi: 'Giao diện popup — thao tác nhanh gọn', en: 'Popup interface — quick operations' },

  'products.showcase.4.title': { vi: 'Quản Lý Tồn Kho', en: 'Inventory Management' },
  'products.showcase.4.desc': { vi: 'Theo dõi tồn kho chi tiết theo từng vật tư với trạng thái trực quan: bình thường, sắp hết, đã hết. Hiển thị tổng sản phẩm, tổng giá trị, số sắp hết hàng và hết hàng.', en: 'Track detailed inventory per material with visual statuses: normal, low, out of stock. View total products, value, low and out-of-stock items.' },
  'products.showcase.4.l1': { vi: 'Trạng thái tồn kho bằng màu sắc trực quan', en: 'Visual color-coded stock statuses' },
  'products.showcase.4.l2': { vi: 'Tổng giá trị tồn kho tự động tính', en: 'Auto-calculated total inventory value' },
  'products.showcase.4.l3': { vi: 'Lọc nhanh theo trạng thái', en: 'Quick filter by status' },
  'products.showcase.4.l4': { vi: 'Hiển thị min/max cho từng vật tư', en: 'Display min/max for each material' },

  'products.showcase.5.title': { vi: 'Quản Lý Nhập Kho', en: 'Import Management' },
  'products.showcase.5.desc': { vi: 'Quản lý phiếu nhập kho chuyên nghiệp với đầy đủ thông tin: số phiếu, ngày nhập, nhà cung cấp, số mặt hàng, tổng giá trị và trạng thái xử lý.', en: 'Manage import receipts professionally with full info: receipt ID, date, supplier, items count, total value and processing status.' },
  'products.showcase.5.l1': { vi: 'Thống kê tổng phiếu & giá trị nhập kho', en: 'Total receipts & import value stats' },
  'products.showcase.5.l2': { vi: 'Trạng thái: đang chờ / đã hoàn thành', en: 'Status: pending / completed' },
  'products.showcase.5.l3': { vi: 'Lọc theo ngày, trạng thái & nhà cung cấp', en: 'Filter by date, status & supplier' },
  'products.showcase.5.l4': { vi: 'Xem chi tiết & duyệt phiếu nhập', en: 'View details & approve imports' },

  'products.showcase.6.title': { vi: 'Tạo Phiếu Nhập Kho', en: 'Create Import Receipt' },
  'products.showcase.6.desc': { vi: 'Form tạo phiếu nhập kho nhanh chóng với thông tin ngày nhập, nhà cung cấp, ghi chú. Thêm từng mặt hàng vào chi tiết phiếu nhập trước khi xác nhận.', en: 'Quick import receipt creation form with date, supplier, notes. Add individual items to receipt details before confirming.' },
  'products.showcase.6.l1': { vi: 'Chọn nhà cung cấp từ danh sách', en: 'Select supplier from list' },
  'products.showcase.6.l2': { vi: 'Thêm nhiều mặt hàng vào phiếu', en: 'Add multiple items to receipt' },
  'products.showcase.6.l3': { vi: 'Ghi chú & mô tả phiếu nhập', en: 'Notes & import descriptions' },
  'products.showcase.6.l4': { vi: 'Xác nhận tạo phiếu chỉ 1 click', en: '1-click receipt confirmation' },

  'products.showcase.7.title': { vi: 'Quản Lý Xuất Kho', en: 'Export Management' },
  'products.showcase.7.desc': { vi: 'Theo dõi toàn bộ phiếu xuất kho với thông tin phòng ban, người yêu cầu, số mặt hàng, tổng giá trị và trạng thái. Lọc theo ngày, trạng thái và tìm kiếm nhanh.', en: 'Track all export receipts with department info, requester, items count, total value and status. Filter by date, status and quick search.' },
  'products.showcase.7.l1': { vi: 'Thống kê tổng phiếu & giá trị xuất kho', en: 'Total receipts & export value stats' },
  'products.showcase.7.l2': { vi: 'Phân loại theo phòng ban & người yêu cầu', en: 'Categorize by department & requester' },
  'products.showcase.7.l3': { vi: 'Trạng thái: đang chờ / đã hoàn thành', en: 'Status: pending / completed' },
  'products.showcase.7.l4': { vi: 'Xem chi tiết & duyệt phiếu xuất', en: 'View details & approve exports' },

  'products.showcase.8.title': { vi: 'Tạo Phiếu Xuất Kho', en: 'Create Export Receipt' },
  'products.showcase.8.desc': { vi: 'Tạo phiếu xuất kho với đầy đủ thông tin: ngày xuất, phòng ban yêu cầu, người yêu cầu và danh sách hàng hóa cần xuất. Quy trình nhanh gọn, chính xác.', en: 'Create export receipts with full info: date, requesting dept, requester and requested items. Quick and accurate workflow.' },
  'products.showcase.8.l1': { vi: 'Chọn phòng ban & người yêu cầu', en: 'Select department & requester' },
  'products.showcase.8.l2': { vi: 'Thêm danh sách hàng xuất kho', en: 'Add export items list' },
  'products.showcase.8.l3': { vi: 'Ghi chú mục đích xuất kho', en: 'Note export purpose' },
  'products.showcase.8.l4': { vi: 'Tạo phiếu xuất tức thì', en: 'Instant export creation' },

  'products.showcase.9.title': { vi: 'Quản Lý Vị Trí Kho', en: 'Location Management' },
  'products.showcase.9.desc': { vi: 'Quản lý danh mục vị trí lưu trữ vật tư trong hệ thống kho. Theo dõi tổng vị trí, trạng thái hoạt động, số sản phẩm và vị trí trống.', en: 'Manage material storage locations in the warehouse. Track total locations, active status, product count and empty spots.' },
  'products.showcase.9.l1': { vi: 'Thống kê tổng vị trí & trạng thái', en: 'Total locations & status stats' },
  'products.showcase.9.l2': { vi: 'Gắn sản phẩm vào vị trí cụ thể', en: 'Assign products to specific locations' },
  'products.showcase.9.l3': { vi: 'Quản lý mô tả & trạng thái vị trí', en: 'Manage location description & status' },
  'products.showcase.9.l4': { vi: 'Thao tác nhanh: xem, sửa, xóa', en: 'Quick actions: view, edit, delete' },

  'products.showcase.10.title': { vi: 'Thêm Vị Trí Kho', en: 'Add Storage Location' },
  'products.showcase.10.desc': { vi: 'Thêm nhanh vị trí kho mới vào hệ thống với tên vị trí và mô tả chi tiết. Giao diện đơn giản, dễ sử dụng cho mọi nhân viên quản lý kho.', en: 'Quickly add new storage locations to the system with name and detailed description. Simple interface, easy for all staff.' },
  'products.showcase.10.l1': { vi: 'Tạo vị trí kho chỉ trong vài giây', en: 'Create locations in seconds' },
  'products.showcase.10.l2': { vi: 'Đặt tên mô tả rõ ràng (VD: Kho A1, Kệ S2)', en: 'Clear descriptive naming (e.g., A1, Rack S2)' },
  'products.showcase.10.l3': { vi: 'Mô tả chi tiết vị trí lưu trữ', en: 'Detailed storage description' },
  'products.showcase.10.l4': { vi: 'Popup form — không rời trang', en: 'Popup form — without leaving page' },

  'products.showcase.11.title': { vi: 'Quản Lý Người Dùng', en: 'User Management' },
  'products.showcase.11.desc': { vi: 'Quản lý toàn bộ tài khoản hệ thống với phân quyền chi tiết theo vai trò: Quản trị viên, Người dùng. Theo dõi trạng thái.', en: 'Manage all system accounts with detailed role-based access control: Admin, User. Track statuses.' },
  'products.showcase.11.l1': { vi: 'Phân quyền theo vai trò (RBAC)', en: 'Role-Based Access Control (RBAC)' },
  'products.showcase.11.l2': { vi: 'Quản lý trạng thái tài khoản', en: 'Account status management' },
  'products.showcase.11.l3': { vi: 'Tạo, sửa, khóa tài khoản nhanh', en: 'Quick create, edit, block accounts' },

  'products.showcase.12.title': { vi: 'Quản Lý Phòng Ban', en: 'Department Management' },
  'products.showcase.12.desc': { vi: 'Quản lý danh sách phòng ban sử dụng trong hệ thống kho vật tư. Theo dõi tổng phòng ban, trạng thái hoạt động và hỗ trợ tạo mới nhanh chóng.', en: 'Manage departments using the inventory system. Track total departments, active status and support quick creation.' },
  'products.showcase.12.l1': { vi: 'Thống kê phòng ban đang hoạt động', en: 'Active departments statistics' },
  'products.showcase.12.l2': { vi: 'Mô tả chi tiết từng phòng ban', en: 'Detailed descriptions per department' },
  'products.showcase.12.l3': { vi: 'Bật/tắt trạng thái hoạt động', en: 'Toggle active status' },
  'products.showcase.12.l4': { vi: 'Thao tác nhanh: sửa, cảnh báo, xóa', en: 'Quick actions: edit, alert, delete' },

  'products.showcase.13.title': { vi: 'Báo Cáo Tổng Hợp', en: 'General Reports' },
  'products.showcase.13.desc': { vi: 'Xem và xuất báo cáo tất cả hoạt động kho: tổng giao dịch, phiếu nhập, phiếu xuất và tổng giá trị. Lọc theo khoảng thời gian, loại giao dịch và tìm kiếm nâng cao.', en: 'View and export reports of all warehouse activities: total transactions, imports, exports and values. Filter by date range, type and advanced search.' },
  'products.showcase.13.l1': { vi: 'Lọc hôm nay / 7 ngày / tháng / quý / tất cả', en: 'Filter today / 7 days / month / quarter / all' },
  'products.showcase.13.l2': { vi: 'Chi tiết: sản phẩm, số lượng, đơn giá, thành tiền', en: 'Details: product, qty, price, total' },
  'products.showcase.13.l3': { vi: 'Xuất báo cáo ra Excel', en: 'Export reports to Excel' },
  'products.showcase.13.l4': { vi: 'Truy vết nguồn gốc phiếu & người tạo', en: 'Trace receipt origin & creator' },

  'products.showcase.14.title': { vi: 'Cài Đặt Hệ Thống', en: 'System Settings' },
  'products.showcase.14.desc': { vi: 'Cấu hình ứng dụng và tùy chỉnh giao diện theo doanh nghiệp. Quản lý thông tin chung, kho hàng, giao diện, thông báo, dữ liệu, nhật ký và giới thiệu.', en: 'Configure app and customize interface for the business. Manage general info, warehouse, UI, notifications, data, logs and about.' },
  'products.showcase.14.l1': { vi: 'Thông tin doanh nghiệp: tên, mã, địa chỉ', en: 'Business info: name, code, address' },
  'products.showcase.14.l2': { vi: 'Tùy chỉnh giao diện & thông báo', en: 'Customize UI & notifications' },
  'products.showcase.14.l3': { vi: 'Quản lý dữ liệu & nhật ký hệ thống', en: 'Manage data & system logs' },
  'products.showcase.14.l4': { vi: 'Cấu hình nhiều tab — gọn gàng, rõ ràng', en: 'Multi-tab config — clean, clear' },

  'products.up.0.title': { vi: 'Quản lý Đơn hàng', en: 'Order Management' },
  'products.up.0.desc': { vi: 'Tạo và theo dõi đơn đặt hàng từ khách hàng. Quản lý trạng thái đơn từ tiếp nhận đến hoàn thành, thống kê số lượng đơn và doanh thu theo thời gian.', en: 'Create and track customer orders. Manage status from receipt to completion, order count and revenue stats over time.' },
  'products.up.0.l1': { vi: 'Tạo đơn hàng với danh sách sản phẩm', en: 'Create orders with product list' },
  'products.up.0.l2': { vi: 'Theo dõi trạng thái đơn hàng', en: 'Track order status' },
  'products.up.0.l3': { vi: 'Thống kê doanh thu theo khoảng thời gian', en: 'Revenue stats by time period' },
  'products.up.0.l4': { vi: 'Lọc đơn theo khách hàng & trạng thái', en: 'Filter by customer & status' },

  'products.showcase.3.desc': { vi: 'Form thêm vật tư trực quan với đầy đủ trường thông tin: tên, mã SKU, danh mục, nhà cung cấp, đơn giá, tồn kho tối thiểu/tối đa, đơn vị và vị trí kho.', en: 'Visual material form with full info fields: name, SKU, category, supplier, price, min/max stock, unit and storage location.' },
  'products.showcase.3.l1': { vi: 'Tự động sinh mã SKU', en: 'Auto generate SKU code' },
  'products.showcase.3.l2': { vi: 'Thiết lập cảnh báo tồn kho min/max', en: 'Set min/max stock alerts' },
  'products.showcase.3.l3': { vi: 'Phân loại theo danh mục & nhà cung cấp', en: 'Categorize by category & supplier' },
  'products.showcase.3.l4': { vi: 'Giao diện popup — thao tác nhanh gọn', en: 'Popup interface — quick operations' },

  'products.showcase.4.title': { vi: 'Quản Lý Tồn Kho', en: 'Inventory Management' },
  'products.showcase.4.desc': { vi: 'Theo dõi tồn kho chi tiết theo từng vật tư với trạng thái trực quan: bình thường, sắp hết, đã hết. Hiển thị tổng sản phẩm, tổng giá trị, số sắp hết hàng và hết hàng.', en: 'Track detailed inventory per material with visual statuses: normal, low, out of stock. View total products, value, low and out-of-stock items.' },
  'products.showcase.4.l1': { vi: 'Trạng thái tồn kho bằng màu sắc trực quan', en: 'Visual color-coded stock statuses' },
  'products.showcase.4.l2': { vi: 'Tổng giá trị tồn kho tự động tính', en: 'Auto-calculated total inventory value' },
  'products.showcase.4.l3': { vi: 'Lọc nhanh theo trạng thái', en: 'Quick filter by status' },
  'products.showcase.4.l4': { vi: 'Hiển thị min/max cho từng vật tư', en: 'Display min/max for each material' },

  'products.showcase.5.title': { vi: 'Quản Lý Nhập Kho', en: 'Import Management' },
  'products.showcase.5.desc': { vi: 'Quản lý phiếu nhập kho chuyên nghiệp với đầy đủ thông tin: số phiếu, ngày nhập, nhà cung cấp, số mặt hàng, tổng giá trị và trạng thái xử lý.', en: 'Manage import receipts professionally with full info: receipt ID, date, supplier, items count, total value and processing status.' },
  'products.showcase.5.l1': { vi: 'Thống kê tổng phiếu & giá trị nhập kho', en: 'Total receipts & import value stats' },
  'products.showcase.5.l2': { vi: 'Trạng thái: đang chờ / đã hoàn thành', en: 'Status: pending / completed' },
  'products.showcase.5.l3': { vi: 'Lọc theo ngày, trạng thái & nhà cung cấp', en: 'Filter by date, status & supplier' },
  'products.showcase.5.l4': { vi: 'Xem chi tiết & duyệt phiếu nhập', en: 'View details & approve imports' },

  'products.showcase.6.title': { vi: 'Tạo Phiếu Nhập Kho', en: 'Create Import Receipt' },
  'products.showcase.6.desc': { vi: 'Form tạo phiếu nhập kho nhanh chóng với thông tin ngày nhập, nhà cung cấp, ghi chú. Thêm từng mặt hàng vào chi tiết phiếu nhập trước khi xác nhận.', en: 'Quick import receipt creation form with date, supplier, notes. Add individual items to receipt details before confirming.' },
  'products.showcase.6.l1': { vi: 'Chọn nhà cung cấp từ danh sách', en: 'Select supplier from list' },
  'products.showcase.6.l2': { vi: 'Thêm nhiều mặt hàng vào phiếu', en: 'Add multiple items to receipt' },
  'products.showcase.6.l3': { vi: 'Ghi chú & mô tả phiếu nhập', en: 'Notes & import descriptions' },
  'products.showcase.6.l4': { vi: 'Xác nhận tạo phiếu chỉ 1 click', en: '1-click receipt confirmation' },

  'products.showcase.7.title': { vi: 'Quản Lý Xuất Kho', en: 'Export Management' },
  'products.showcase.7.desc': { vi: 'Theo dõi toàn bộ phiếu xuất kho với thông tin phòng ban, người yêu cầu, số mặt hàng, tổng giá trị và trạng thái. Lọc theo ngày, trạng thái và tìm kiếm nhanh.', en: 'Track all export receipts with department info, requester, items count, total value and status. Filter by date, status and quick search.' },
  'products.showcase.7.l1': { vi: 'Thống kê tổng phiếu & giá trị xuất kho', en: 'Total receipts & export value stats' },
  'products.showcase.7.l2': { vi: 'Phân loại theo phòng ban & người yêu cầu', en: 'Categorize by department & requester' },
  'products.showcase.7.l3': { vi: 'Trạng thái: đang chờ / đã hoàn thành', en: 'Status: pending / completed' },
  'products.showcase.7.l4': { vi: 'Xem chi tiết & duyệt phiếu xuất', en: 'View details & approve exports' },

  'products.showcase.8.title': { vi: 'Tạo Phiếu Xuất Kho', en: 'Create Export Receipt' },
  'products.showcase.8.desc': { vi: 'Tạo phiếu xuất kho với đầy đủ thông tin: ngày xuất, phòng ban yêu cầu, người yêu cầu và danh sách hàng hóa cần xuất. Quy trình nhanh gọn, chính xác.', en: 'Create export receipts with full info: date, requesting dept, requester and requested items. Quick and accurate workflow.' },
  'products.showcase.8.l1': { vi: 'Chọn phòng ban & người yêu cầu', en: 'Select department & requester' },
  'products.showcase.8.l2': { vi: 'Thêm danh sách hàng xuất kho', en: 'Add export items list' },
  'products.showcase.8.l3': { vi: 'Ghi chú mục đích xuất kho', en: 'Note export purpose' },
  'products.showcase.8.l4': { vi: 'Tạo phiếu xuất tức thì', en: 'Instant export creation' },

  'products.showcase.9.title': { vi: 'Quản Lý Vị Trí Kho', en: 'Location Management' },
  'products.showcase.9.desc': { vi: 'Quản lý danh mục vị trí lưu trữ vật tư trong hệ thống kho. Theo dõi tổng vị trí, trạng thái hoạt động, số sản phẩm và vị trí trống.', en: 'Manage material storage locations in the warehouse. Track total locations, active status, product count and empty spots.' },
  'products.showcase.9.l1': { vi: 'Thống kê tổng vị trí & trạng thái', en: 'Total locations & status stats' },
  'products.showcase.9.l2': { vi: 'Gắn sản phẩm vào vị trí cụ thể', en: 'Assign products to specific locations' },
  'products.showcase.9.l3': { vi: 'Quản lý mô tả & trạng thái vị trí', en: 'Manage location description & status' },
  'products.showcase.9.l4': { vi: 'Thao tác nhanh: xem, sửa, xóa', en: 'Quick actions: view, edit, delete' },

  'products.showcase.10.title': { vi: 'Thêm Vị Trí Kho', en: 'Add Storage Location' },
  'products.showcase.10.desc': { vi: 'Thêm nhanh vị trí kho mới vào hệ thống với tên vị trí và mô tả chi tiết. Giao diện đơn giản, dễ sử dụng cho mọi nhân viên quản lý kho.', en: 'Quickly add new storage locations to the system with name and detailed description. Simple interface, easy for all staff.' },
  'products.showcase.10.l1': { vi: 'Tạo vị trí kho chỉ trong vài giây', en: 'Create locations in seconds' },
  'products.showcase.10.l2': { vi: 'Đặt tên mô tả rõ ràng (VD: Kho A1, Kệ S2)', en: 'Clear descriptive naming (e.g., A1, Rack S2)' },
  'products.showcase.10.l3': { vi: 'Mô tả chi tiết vị trí lưu trữ', en: 'Detailed storage description' },
  'products.showcase.10.l4': { vi: 'Popup form — không rời trang', en: 'Popup form — without leaving page' },

  'products.showcase.11.title': { vi: 'Quản Lý Người Dùng', en: 'User Management' },
  'products.showcase.11.desc': { vi: 'Quản lý toàn bộ tài khoản hệ thống với phân quyền chi tiết theo vai trò: Quản trị viên, Người dùng. Theo dõi trạng thái.', en: 'Manage all system accounts with detailed role-based access control: Admin, User. Track statuses.' },
  'products.showcase.11.l1': { vi: 'Phân quyền theo vai trò (RBAC)', en: 'Role-Based Access Control (RBAC)' },
  'products.showcase.11.l2': { vi: 'Quản lý trạng thái tài khoản', en: 'Account status management' },
  'products.showcase.11.l3': { vi: 'Tạo, sửa, khóa tài khoản nhanh', en: 'Quick create, edit, block accounts' },

  'products.showcase.12.title': { vi: 'Quản Lý Phòng Ban', en: 'Department Management' },
  'products.showcase.12.desc': { vi: 'Quản lý danh sách phòng ban sử dụng trong hệ thống kho vật tư. Theo dõi tổng phòng ban, trạng thái hoạt động và hỗ trợ tạo mới nhanh chóng.', en: 'Manage departments using the inventory system. Track total departments, active status and support quick creation.' },
  'products.showcase.12.l1': { vi: 'Thống kê phòng ban đang hoạt động', en: 'Active departments statistics' },
  'products.showcase.12.l2': { vi: 'Mô tả chi tiết từng phòng ban', en: 'Detailed descriptions per department' },
  'products.showcase.12.l3': { vi: 'Bật/tắt trạng thái hoạt động', en: 'Toggle active status' },
  'products.showcase.12.l4': { vi: 'Thao tác nhanh: sửa, cảnh báo, xóa', en: 'Quick actions: edit, alert, delete' },

  'products.showcase.13.title': { vi: 'Báo Cáo Tổng Hợp', en: 'General Reports' },
  'products.showcase.13.desc': { vi: 'Xem và xuất báo cáo tất cả hoạt động kho: tổng giao dịch, phiếu nhập, phiếu xuất và tổng giá trị. Lọc theo khoảng thời gian, loại giao dịch và tìm kiếm nâng cao.', en: 'View and export reports of all warehouse activities: total transactions, imports, exports and values. Filter by date range, type and advanced search.' },
  'products.showcase.13.l1': { vi: 'Lọc hôm nay / 7 ngày / tháng / quý / tất cả', en: 'Filter today / 7 days / month / quarter / all' },
  'products.showcase.13.l2': { vi: 'Chi tiết: sản phẩm, số lượng, đơn giá, thành tiền', en: 'Details: product, qty, price, total' },
  'products.showcase.13.l3': { vi: 'Xuất báo cáo ra Excel', en: 'Export reports to Excel' },
  'products.showcase.13.l4': { vi: 'Truy vết nguồn gốc phiếu & người tạo', en: 'Trace receipt origin & creator' },

  'products.showcase.14.title': { vi: 'Cài Đặt Hệ Thống', en: 'System Settings' },
  'products.showcase.14.desc': { vi: 'Cấu hình ứng dụng và tùy chỉnh giao diện theo doanh nghiệp. Quản lý thông tin chung, kho hàng, giao diện, thông báo, dữ liệu, nhật ký và giới thiệu.', en: 'Configure app and customize interface for the business. Manage general info, warehouse, UI, notifications, data, logs and about.' },
  'products.showcase.14.l1': { vi: 'Thông tin doanh nghiệp: tên, mã, địa chỉ', en: 'Business info: name, code, address' },
  'products.showcase.14.l2': { vi: 'Tùy chỉnh giao diện & thông báo', en: 'Customize UI & notifications' },
  'products.showcase.14.l3': { vi: 'Quản lý dữ liệu & nhật ký hệ thống', en: 'Manage data & system logs' },
  'products.showcase.14.l4': { vi: 'Cấu hình nhiều tab — gọn gàng, rõ ràng', en: 'Multi-tab config — clean, clear' },

  'products.up.0.title': { vi: 'Quản lý Đơn hàng', en: 'Order Management' },
  'products.up.0.desc': { vi: 'Tạo và theo dõi đơn đặt hàng từ khách hàng. Quản lý trạng thái đơn từ tiếp nhận đến hoàn thành, thống kê số lượng đơn và doanh thu theo thời gian.', en: 'Create and track customer orders. Manage status from receipt to completion, order count and revenue stats over time.' },
  'products.up.0.l1': { vi: 'Tạo đơn hàng với danh sách sản phẩm', en: 'Create orders with product list' },
  'products.up.0.l2': { vi: 'Theo dõi trạng thái đơn hàng', en: 'Track order status' },
  'products.up.0.l3': { vi: 'Thống kê doanh thu theo khoảng thời gian', en: 'Revenue stats by time period' },
  'products.up.0.l4': { vi: 'Lọc đơn theo khách hàng & trạng thái', en: 'Filter by customer & status' },

  'products.up.01.title': { vi: 'Quản lý Hóa đơn', en: 'Invoice Management' },
  'products.up.01.desc': { vi: 'Xuất và quản lý hóa đơn bán hàng. Theo dõi trạng thái thanh toán, ghi nhận lịch sử thanh toán và cảnh báo hóa đơn quá hạn tự động.', en: 'Issue and manage sales invoices. Track payment status, record payment history and auto-alert overdue invoices.' },
  'products.up.01.l1': { vi: 'Tạo & quản lý hóa đơn bán hàng', en: 'Create & manage sales invoices' },
  'products.up.01.l2': { vi: 'Theo dõi trạng thái thanh toán', en: 'Track payment status' },
  'products.up.01.l3': { vi: 'Ghi nhận lịch sử thanh toán', en: 'Record payment history' },
  'products.up.01.l4': { vi: 'Cảnh báo hóa đơn quá hạn', en: 'Overdue invoice alerts' },

  'products.cta.desc': { vi: 'Liên hệ ngay để nhận tư vấn miễn phí và demo sản phẩm phù hợp với doanh nghiệp của bạn.', en: 'Contact us now for a free consultation and product demo tailored to your business.' },
  'products.cta.btn.visit': { vi: 'Truy cập ForgeCore', en: 'Access ForgeCore' },
  
  'guide.compare.r1.th': { vi: 'Nhập liệu', en: 'Data Entry' },
  'guide.compare.r1.old': { vi: 'Ghi tay, nhập thủ công vào sổ sách hoặc Excel — dễ sai sót, mất thời gian', en: 'Manual writing or Excel input — error-prone, time-consuming' },
  'guide.compare.r1.new': { vi: 'Nhập một lần trên hệ thống — dữ liệu tự động đồng bộ mọi nơi', en: 'Single input on system — data syncs everywhere automatically' },

  'guide.compare.r2.th': { vi: 'Tồn kho', en: 'Inventory' },
  'guide.compare.r2.old': { vi: 'Kiểm đếm thủ công, không biết real-time — dễ bị lệch số liệu', en: 'Manual counting, no real-time status — prone to data mismatch' },
  'guide.compare.r2.new': { vi: 'Cập nhật tự động khi nhập/xuất kho — luôn chính xác theo thời gian thực', en: 'Auto updates upon import/export — always accurate in real-time' },

  'guide.compare.r3.th': { vi: 'Tạo phiếu', en: 'Receipt Creation' },
  'guide.compare.r3.old': { vi: 'Viết phiếu tay hoặc copy template Excel — chậm, dễ nhầm', en: 'Handwritten receipts or Excel templates — slow, easy to confuse' },
  'guide.compare.r3.new': { vi: 'Tạo phiếu tự động, mã phiếu tự sinh — chỉ vài click', en: 'Auto receipt creation, auto-generated ID — just a few clicks' },

  'guide.compare.r4.th': { vi: 'Báo cáo', en: 'Reporting' },
  'guide.compare.r4.old': { vi: 'Tự tổng hợp bằng tay, mất hàng giờ — khó đảm bảo chính xác', en: 'Manual compilation, takes hours — hard to ensure accuracy' },
  'guide.compare.r4.new': { vi: 'Báo cáo tự động, biểu đồ trực quan — xem ngay trên dashboard', en: 'Auto reports, visual charts — view instantly on dashboard' },

  'guide.compare.r5.th': { vi: 'Tìm kiếm', en: 'Search' },
  'guide.compare.r5.old': { vi: 'Lật sổ, dò file Excel — mất thời gian, khó tra cứu khi dữ liệu lớn', en: 'Flipping books, scanning Excel — time-consuming, hard for large data' },
  'guide.compare.r5.new': { vi: 'Tìm kiếm tức thì theo tên, mã, danh mục — kết quả trong giây', en: 'Instant search by name, code, category — results in seconds' },

  'guide.compare.r6.th': { vi: 'Bảo mật', en: 'Security' },
  'guide.compare.r6.old': { vi: 'Sổ sách có thể bị mất, hỏng, không kiểm soát người xem', en: 'Books can be lost, damaged, no access control' },
  'guide.compare.r6.new': { vi: 'Dữ liệu mã hóa, phân quyền truy cập, nhật ký theo dõi hành vi', en: 'Encrypted data, access control, audit logs' },

  'guide.compare.r7.th': { vi: 'Cảnh báo', en: 'Alerts' },
  'guide.compare.r7.old': { vi: 'Không có — chỉ phát hiện khi đã hết hàng hoặc gặp sự cố', en: 'None — only discovered when out of stock or issues occur' },
  'guide.compare.r7.new': { vi: 'Cảnh báo tự động khi tồn kho thấp, phiếu mới, hóa đơn quá hạn', en: 'Auto alerts for low stock, new receipts, overdue invoices' },

  'guide.compare.r8.th': { vi: 'Làm việc nhóm', en: 'Teamwork' },
  'guide.compare.r8.old': { vi: 'Truyền tay sổ sách, gửi file qua email — dễ chồng chéo phiên bản', en: 'Passing books, emailing files — easy version conflicts' },
  'guide.compare.r8.new': { vi: 'Nhiều người dùng cùng lúc — dữ liệu cập nhật đồng bộ, không xung đột', en: 'Multiple users simultaneously — synced data, no conflicts' },

  'guide.compare.r9.th': { vi: 'Chi phí vận hành', en: 'Operating Cost' },
  'guide.compare.r9.old': { vi: 'Tốn giấy, in ấn, nhân sự kiểm kê — chi phí ẩn tích lũy lớn', en: 'Costs of paper, printing, inventory staff — large hidden costs' },
  'guide.compare.r9.new': { vi: 'Giảm nhân sự xử lý thủ công, tiết kiệm giấy và thời gian', en: 'Reduce manual staff, save paper and time' }

};

// ===== i18n Engine =====
const I18N_KEY = 'hft-lang';

function getLang() {
  return localStorage.getItem(I18N_KEY) || 'vi';
}

function setLang(lang) {
  localStorage.setItem(I18N_KEY, lang);
  applyLang(lang);
}

function applyLang(lang) {
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    const key = el.getAttribute('data-i18n');
    const t = TRANSLATIONS[key];
    if (t && t[lang]) {
      el.innerHTML = t[lang];
    }
  });

  // Update lang toggle button
  const btn = document.getElementById('langToggle');
  if (btn) {
    btn.textContent = lang === 'vi' ? 'EN' : 'VI';
    btn.setAttribute('title', lang === 'vi' ? 'Switch to English' : 'Chuyển sang Tiếng Việt');
  }
}

// Init on page load
document.addEventListener('DOMContentLoaded', function () {
  applyLang(getLang());
});
