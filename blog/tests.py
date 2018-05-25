import unittest
from rest_framework.test import APITestCase
from django.urls import reverse
from rest_framework import status
from blog.models import Blog
from core.models import User

class BlogTests(APITestCase):
    def setUp(self):

        super(APITestCase, self).setUp()
        user = User.objects.create_user('test_user', 'test_user@mail.ru', '12345')
        self.current_user = user
        self.client.force_login(user = user)

    def test_create_blog(self):
        url = reverse('blog-list')
        data = {'title': 'TestBlog', 'text':'ghvbjk'}
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Blog.objects.count(), 1)
        self.assertEqual(Blog.objects.get().title, 'TestBlog')

    def test_delete_blog(self):
        url = reverse('blog-list')
        data = {'title': 'TestBlog', 'text': 'ghvbjk'}
        response = self.client.delete(url, data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        #self.assertEqual(Blog.objects.count(), 1)
        #self.assertEqual(Blog.objects.get().title, 'TestBlog')


            #def test_blog_signals(self):
