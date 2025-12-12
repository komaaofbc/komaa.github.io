---
title: "교육·세미나"
permalink: /education/
layout: single
---

## 교육·세미나 안내

KOMAA는 회원들의 임상 역량 강화를 위해 정기적인 교육·세미나를 진행합니다.

- 최신 임상 주제
- 보험·정책 관련 정보
- 실제 케이스 기반 워크숍

## 다가오는 교육·세미나

<ul class="posts-list">
  {% assign edu_posts = site.posts | where_exp: "post", "post.categories contains 'education'" | sort: "date" | reverse %}
  {% for post in edu_posts %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <span class="page__meta">{{ post.date | date: "%Y-%m-%d" }}</span>
    </li>
  {% endfor %}
</ul>
