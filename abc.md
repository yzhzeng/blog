---
layout: page
title: ABC
---

{% assign pages_list = site.pages | sort:"url" %}
{% for node in pages_list %}
  {% if node.title != null %}
    {% if node.layout == "page" %}
      <a class="sidebar-nav-item{% if page.url == node.url %} active{% endif %}" href="{{ site.baseurl }}/{{ node.url }}">{{ node.title }}</a>
    {% endif %}
  {% endif %}
{% endfor %}