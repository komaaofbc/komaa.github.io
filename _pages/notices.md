---
title: "공지사항"
permalink: /notices/
layout: single
---

## 공지사항

협회 운영, 연회비, 교육·세미나, 정책 관련 주요 안내를 공지합니다.

<ul class="posts-list">
  {% assign notice_posts = site.posts | where_exp: "post", "post.categories contains 'notice'" | sort: "date" | reverse %}
  {% for post in notice_posts %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <span class="page__meta">{{ post.date | date: "%Y-%m-%d" }}</span>
    </li>
  {% endfor %}
</ul>
