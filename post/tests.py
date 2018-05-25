# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from rest_framework.test import APITestCase
from django.urls import reverse
from rest_framework import status
from post.models import Post
from core.models import User

class PostTests(APITestCase):

    def setUp(self):

        super(APITestCase, self).setUp()
        user = User.objects.create_user('test_user', 'test_user@mail.ru', '12345')
        self.current_user = user
        self.client.force_login(user = user)

    def test_create_post(self):

        url = reverse('post-list')
        data = {'text': 'TestPost', 'blog': 'TestBlog'}
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Post.objects.count(), 1)
        self.assertEqual(Post.objects.get().name, 'TestPost')

    #def test_post_signals(self):