---
layout: archive
permalink: /publications/
title: "Publications"
author_profile: true
---



_Job Market Paper_

{% include base_path %}
{% for post in site.publications reversed %}
  {% if post.categories contains 'jmp' %}
  {% include archive-single.html %}
    {% endif %}
{% endfor %}

----


_Working Papers_


{% include base_path %}
{% for post in site.publications reversed %}
  {% if post.categories contains 'wp' %}
  {% include archive-single.html %}
    {% endif %}
{% endfor %}

-----

_Work in progress_


{% include base_path %}
{% for post in site.workinprogress %}
  {% if post.categories contains 'wip' %}
  {% include archive-single.html %}
    {% endif %}
{% endfor %}

------

XXXXXX111

{% include base_path %}
{% for post in site.workinprogress %}
  {% if post.categories contains 'conf' %}
  {% include archive-single.html %}
{% endif %}
{% endfor %}

XXXXXX

------

_Other work in progress_


  * A review on the state of the art of multi-unit auctions: what implications for the study of capacity market design.

  * A survey on electricity market design: How can we model behaviors in capacity markets?
  
  * How market design affects actors' behaviors and price formation in an imperfect environment: the case of capacity markets. 



