---
layout: archive
permalink: /publications/
title: "Research"
author_profile: true
---




<hr class="new2" style="width:13%">



### Job Market Paper

{% include base_path %}
{% for post in site.publications reversed %}
  {% if post.categories contains 'jmp' %}
  {% include archive-single.html %}
    {% endif %}
{% endfor %}



<hr class="new1">


### Working Papers


{% include base_path %}
{% for post in site.publications reversed %}
  {% if post.categories contains 'wp' %}
  {% include archive-single.html %}
    {% endif %}
{% endfor %}

<hr class="new1">


### Work in progress


{% include base_path %}
{% for post in site.publications reversed %}
  {% if post.categories contains 'wip' %}
  {% include archive-single.html %}
    {% endif %}
{% endfor %}



<hr class="new1">

### Other work in progress


  * A review on the state of the art of multi-unit auctions: what implications for the study of capacity market design.

  * A survey on electricity market design: How can we model behaviors in capacity markets?
  
  * How market design affects actors' behaviors and price formation in an imperfect environment: the case of capacity markets. 



