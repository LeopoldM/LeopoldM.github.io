---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---




{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}
{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}


Main Work
----
{% include base_path %}
{% for post in site.workinprogress %}
  {% include archive-single.html %}
{% endfor %}

Other work in progress
----

  * A review on the state of the art of multi-unit auctions: what implications for the study of capacity market design.

  * A survey on electricity market design: How can we model behaviors in capacity markets?
  
  * How market design affects actors' behaviors and price formation in an imperfect environment: the case of capacity markets. 



