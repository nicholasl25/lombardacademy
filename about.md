---
layout: default
title: About Us
---

# About Us

Lombard Academy is based out of beautiful Ithaca, NY, and we pride ourselves on hiring only the best tutors from prestigious institutions. Our team includes tutors from nearly every Ivy League school, each bringing unique expertise and dedication to help students reach their academic goals. Over the years, we have successfully helped hundreds of students get into top colleges, achieve their dream test scores, and excel in challenging subjects. 

Our tutors are not only academically accomplished but are also passionate educators who believe in making learning an enjoyable and fulfilling experience. Whether you’re preparing for college, aiming for top test scores, or strengthening your understanding of complex subjects, our tutors are here to guide you every step of the way.

## Meet the Tutors

Below, you'll find a diverse and talented team of tutors who specialize in a variety of subjects. Each tutor’s background and specialties are listed, along with their educational institution.

<div class="tutors-grid">
    {% for tutor in site.data.tutors %}
    <div class="tutor-card">
        <img src="{{ tutor.image | relative_url }}" alt="Photo of {{ tutor.name }}" class="tutor-photo">
        <h3>{{ tutor.name }}</h3>
        <p><strong>School:</strong> {{ tutor.school }}</p>
        <p><strong>Specialties:</strong> {{ tutor.specialties }}</p>
        <p>{{ tutor.bio }}</p>
    </div>
    {% endfor %}
</div>
