---
layout: splash
permalink: /
hidden: true
header:
  overlay_color: "#000"
  overlay_filter: "0.4"
  overlay_image: /assets/images/metalic-BG.jpg
  caption: "Korean Oriental Medicine and Acupuncturist Association of Canada"
  actions:
    - label: "회원가입"
      url: "https://docs.google.com/forms/d/xxxxxxx"   # Google Forms 링크
      class: "btn btn--primary"
    - label: "연회비 납부"
      url: "https://buy.stripe.com/xxxxxxx"           # Stripe Payment Link
      class: "btn btn--success"  
excerpt: "Leading Clinical Excellence through Education & Community<br>임상 역량 강화의 중심, 캐나다 한의사 협회"
intro: 
  - title: "캐나다 한의사 협회 (KOMAA)에 오신 것을 환영합니다"
    excerpt: "KOMAA는 캐나다 내 한의학의 발전과 한의사들의 권익 보호를 위해 설립된 전문 직능 단체입니다. <br> 우리는 **실전 임상 특강**, **정기 학술 세미나**, 그리고 **신규 한의사 멘토링**을 통해 회원 여러분의 전문성을 높이고 안정적인 임상 활동을 지원합니다."
feature_row:
  - image_path: /assets/images/index_header2.png
    alt: "KOMAA Logo"
    title: "전문성 향상을 위한 최적의 선택"
    excerpt: "KOMAA 회원이 되어 다양한 혜택과 전문적인 지원을 받아보세요."
    url: "/membership/"
    btn_class: "btn--primary"
    btn_label: "자세히 보기"
benefits_row:
  - title: "지속적인 보수교육"
    excerpt: "매년 진행되는 정기 세미나와 학술 대회를 통해 회원들의 임상 실력을 향상시킵니다."
    icon: "fas fa-graduation-cap"
  - title: "전문가 네트워크"
    excerpt: "캐나다 전역의 한의사들과 교류하며 임상 노하우를 공유하고 함께 성장합니다."
    icon: "fas fa-users"
  - title: "권익 보호 & 지원"
    excerpt: "한의사의 법적 보호와 권익을 대변하며, 안전한 진료 환경을 조성합니다."
    icon: "fas fa-shield-alt"
why_join_row:
  - image_path: /assets/images/certificate-sample.png
    title: "Why Join KOMAA?"
    excerpt: "<i class='fas fa-certificate fa-3x' style='color: #d4af37;'></i><br><strong>Authorized Certificate</strong><br><br><strong>1. 임상 역량 강화 (Clinical Excellence)</strong><br>실제 임상에서 바로 활용 가능한 실전 노하우를 공유합니다.<br><br><strong>2. 체계적인 보수 교육 (Continued Education)</strong><br>최신 한의학 지식을 습득하고 협회 인증 이수증을 발급받으세요.<br><br><strong>3. 든든한 법적/제도적 지원 (Support)</strong><br>진료 중 발생하는 다양한 문제에 대해 협회 차원의 자문을 제공합니다."
instagram_intro:
  - title: "KOMAA on Instagram"
    excerpt: "Follow <a href='https://www.instagram.com/komaa_canada/'>@komaa_canada</a> for the latest updates, event photos, and community stories.<br>최신 소식과 행사 사진을 인스타그램에서 확인하세요."
---

{% include feature_row id="intro" type="center" %}

{% include feature_row id="feature_row" %}

{% include feature_row id="benefits_row" %}

{% include feature_row id="why_join_row" type="left" %}

{% include feature_row id="instagram_intro" type="center" %}

<div class="page__content">

  <!-- Why Join (3컬럼 카드) -->
  <section id="why-join">
    <h2>왜 KOMAA에 가입해야 하나요?</h2>
    <div class="feature__wrapper">
      <div class="feature__item">
        <h3>전문 교육·세미나</h3>
        <p>최신 임상 지식과 보험·정책 정보를 다루는 정기 교육 프로그램을 제공합니다.</p>
      </div>
      <div class="feature__item">
        <h3>회원 네트워킹</h3>
        <p>캐나다 전역의 한의사들과 교류하고, 임상 케이스와 노하우를 공유할 수 있는 장을 마련합니다.</p>
      </div>
      <div class="feature__item">
        <h3>정책·보험 대응</h3>
        <p>정부·보험사와의 소통 창구로서, 한의사의 권익을 지키기 위한 공동 대응을 진행합니다.</p>
      </div>
    </div>
  </section>

  <!-- 교육·세미나 미리보기 -->
  <section id="education-preview">
    <h2>다가오는 교육·세미나</h2>
    <ul class="posts-list">
      {% assign edu_posts = site.posts | where_exp: "post", "post.categories contains 'education'" | sort: "date" | reverse %}
      {% for post in edu_posts limit:3 %}
        <li>
          <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
          <span class="page__meta">{{ post.date | date: "%Y-%m-%d" }}</span>
        </li>
      {% endfor %}
    </ul>
    <p><a href="{{ '/education/' | relative_url }}" class="btn btn--outline">교육·세미나 전체 보기</a></p>
  </section>

  <!-- 최신 공지 3개 -->
  <section id="notices-preview">
    <h2>최근 공지사항</h2>
    <ul class="posts-list">
      {% assign notice_posts = site.posts | where_exp: "post", "post.categories contains 'notice'" | sort: "date" | reverse %}
      {% for post in notice_posts limit:3 %}
        <li>
          <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
          <span class="page__meta">{{ post.date | date: "%Y-%m-%d" }}</span>
        </li>
      {% endfor %}
    </ul>
    <p><a href="{{ '/notices/' | relative_url }}" class="btn btn--outline">공지사항 전체 보기</a></p>
  </section>

</div>

<!-- LightWidget WIDGET -->
<div style="width: 100%; overflow: hidden;">
  <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
  <iframe src="//lightwidget.com/widgets/7d6d91d737dc567e8ba9050086db3ee3.html" scrolling="no" allowtransparency="true" class="lightwidget-widget" style="width:100%;border:0;overflow:hidden;"></iframe>
</div>
