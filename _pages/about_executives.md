---
layout: single
title: "임원진 소개"
permalink: /about/executives/
sidebar:
  nav: "about_sidebar"
toc: false
---

<style>
/* Executives Page CSS - Inlined for reliability */
/* Force full width for the content area, effectively removing TOC/right-sidebar reservation */
.page__content {
    max-width: 100% !important;
    padding-right: 0 !important;
}
.page__inner-wrap {
    max-width: 100% !important;
}

.executives-page-wrapper {
    font-family: "Noto Sans KR", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    color: #333;
    width: 100%; /* Changed from max-width fixed to % to fit container */
    margin: 0 auto;
}

/* --- President Section --- */
.president-section {
    display: flex;
    gap: 40px; /* Reduced gap to fit theme constraint */
    margin-bottom: 60px;
    padding-bottom: 60px;
}

/* 1. Left Column: Profile */
.president-profile {
    flex: 0 0 280px; /* Fixed width for profile */
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.profile-image-container {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 24px;
    box-shadow: 0 8px 20px rgba(0,0,0,0.1);
    background-color: #eee;
}

.president-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.president-identity {
    margin-bottom: 30px;
}

.president-name-en {
    font-size: 1.6rem;
    font-weight: 700;
    color: #3c5a75;
    margin: 0;
    line-height: 1.2;
}

.president-license {
    font-size: 1rem;
    color: #6c8ea4;
    font-weight: 600;
    margin-top: 4px;
}

.president-titles {
    border-top: 1px solid #eee;
    padding-top: 20px;
    width: 100%;
}

.president-titles .main-title {
    font-weight: 700;
    margin: 0;
    font-size: 0.95rem;
    color: #333;
}

.president-titles .sub-title {
    margin: 4px 0 0 0;
    font-size: 0.9rem;
    color: #666;
}


/* 2. Right Column: Message */
.president-message {
    flex: 1;
    padding-left: 40px;
    border-left: 1px solid #e5e5e5;
}

.message-header {
    margin-bottom: 24px;
}

.header-eng {
    display: block;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #6c8ea4;
    font-weight: 600;
    margin-bottom: 8px;
}

.header-kor {
    font-size: 1.8rem;
    font-weight: 700;
    color: #3c5a75;
    margin: 0;
}

.message-body p {
    font-size: 0.95rem;
    line-height: 1.7;
    color: #555;
    margin-bottom: 16px;
    text-align: justify;
}

.president-signature-block {
    margin-top: 40px;
}

.president-signature-block .closing {
    font-size: 0.9rem;
    color: #333;
    margin-bottom: 10px;
    line-height: 1.5;
}

.signature-img {
    height: 60px;
    width: auto;
    opacity: 0.8;
}

/* --- Divider --- */
.section-divider {
    border: none;
    border-top: 1px solid #e5e5e5;
    margin: 0 0 60px 0;
}


/* --- Directors Section --- */
.directors-section {
    width: 100%;
}

.section-titles {
    margin-bottom: 40px;
}

/* Grid Layout */
.directors-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 30px;
    justify-content: center;
}

.director-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.director-photo {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 16px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.08);
    background-color: #f0f0f0;
}

.director-photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.director-name {
    font-size: 1.1rem;
    font-weight: 700;
    color: #3c5a75;
    margin: 0 0 6px 0;
}

.director-name .license {
    font-size: 0.8rem;
    font-weight: 400;
    color: #7f8c8d;
    margin-left: 4px;
}

.director-role {
    font-size: 0.9rem;
    color: #444;
    margin: 0;
}
.director-role .role-eng {
    display: block;
    font-size: 0.75rem;
    color: #888;
    margin-top: 2px;
    text-transform: uppercase;
}


/* --- Responsive Adjustments --- */
@media (max-width: 900px) {
    .president-section {
        flex-direction: column;
        gap: 30px;
        padding-bottom: 30px;
    }

    .president-profile {
        padding-bottom: 30px;
        border-bottom: 1px solid #eee;
        flex: auto;
        width: 100%;
    }

    .president-message {
        border-left: none;
        padding-left: 0;
    }
}
</style>

{% assign ex = site.data.executives %}

<div class="executives-page-wrapper">

  <!-- President Section -->
  <section class="president-section">
    <!-- Left Column: Profile -->
    <div class="president-profile">
      <div class="profile-image-container">
         <img src="{{ ex.president.photo }}" alt="{{ ex.president.name_en }}" class="president-img">
      </div>
      <div class="president-identity">
        <h1 class="president-name-en">{{ ex.president.name_en }}</h1>
        <div class="president-license">{{ ex.president.license }}</div>
      </div>
      
      <div class="president-titles">
        <p class="main-title">{{ ex.president.title_main }}</p>
        <p class="sub-title">{{ ex.president.title_sub }}</p>
      </div>
    </div>

    <!-- Right Column: Message -->
    <div class="president-message">
      <div class="message-header">
        <span class="header-eng">{{ ex.president.welcome_title_en }}</span>
        <h2 class="header-kor">{{ ex.president.welcome_title_ko }}</h2>
      </div>
      
      <div class="message-body">
        {% for paragraph in ex.president.welcome_paragraphs %}
          <p>{{ paragraph }}</p>
        {% endfor %}
      </div>
      
      <div class="president-signature-block">
        <p class="closing">감사합니다.<br>{{ ex.president.name_ko }} 회장</p>
        <img src="{{ ex.president.signature }}" alt="Signature" class="signature-img">
      </div>
    </div>
  </section>

  <hr class="section-divider">

  <!-- Directors Section -->
  <section class="directors-section">
    <div class="section-titles">
      <span class="header-eng">{{ ex.directors.title_en }}</span>
      <h2 class="header-kor">{{ ex.directors.title_ko }}</h2>
    </div>

    <div class="directors-grid">
      {% for member in ex.directors.members %}
        <article class="director-card">
          <div class="director-photo">
            <img src="{{ member.photo }}" alt="{{ member.name_en }}">
          </div>
          <div class="director-info">
            <h3 class="director-name">
              {{ member.name_en }} <span class="license">{{ member.license }}</span>
            </h3>
            <p class="director-role">
              {{ member.role_ko }} <span class="role-eng">({{ member.role_en }})</span>
            </p>
          </div>
        </article>
      {% endfor %}
    </div>
  </section>

</div>
